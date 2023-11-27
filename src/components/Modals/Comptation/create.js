import React, { useEffect, useState } from "react";
import {Modal, ModalContent, ModalBody, Button, useDisclosure} from "@nextui-org/react";
import { POST } from "../../../utils/requests";
import { matches_uri } from "../../../utils/url";
import {toast} from 'react-toastify';

export default function CreateModalComp({datas, callback}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [load, setLoad] = useState(false);
  const [data, setData] = useState({ groups:'', kg:datas.kg, comp_id:datas.comp_id, athletes:'', group_number:'' });

    useEffect(() => {
        let calculatedGroups = '';
        let calculatedAthletes = '';
        let group_numberc = '';
    
        if(datas.athletes === 0){
          calculatedAthletes = 0;
        }
        else if (datas.athletes <= 4) {
            calculatedGroups = 1;
            calculatedAthletes = 4;
            group_numberc = 4;
        } else if (datas.athletes <= 8) {
            calculatedGroups = 1;
            calculatedAthletes = 8;
            group_numberc = 8;
        } else if (datas.athletes <= 16) {
            calculatedGroups = 2;
            group_numberc = 8;
            calculatedAthletes = 16;
        } else if (datas.athletes <= 32) {
            calculatedGroups = 4;
            calculatedAthletes = 32;
            group_numberc = 8;
        } else if (datas.athletes <= 64) {
            group_numberc = 16;
            calculatedGroups = 4;
            calculatedAthletes = 64;
        } else if (datas.athletes <= 128) {
            calculatedGroups = 4;
            group_numberc = 32;
            calculatedAthletes = 128;
        }
        setData({ ...data, groups: calculatedGroups, athletes: calculatedAthletes, group_number:group_numberc });
        onOpen();
    }, [datas]);

    const handleCallback =() =>{
      callback();
    }

    const Submit = async () => {
        setLoad(true);
        if(parseInt(data.athletes) === 0){
          toast.warning("Уучлаарай энэ жинд тамирчин бүртгүүлээгүй байна!")
          return setLoad(false);
        }
        const res = await POST({uri:matches_uri + `/create`, data:data});
        if(res.status === 200){
            setLoad(false);
            toast.success('Оноолт бэлтгэгдлээ');
            onOpenChange(false);
        }
        setLoad(false);
        handleCallback();
    }

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="pt-10 pb-4">
                    {
                        load?
                        <div className="flex justify-center flex-col mt-4">
                            <h1 className="font-Roboto uppercase text-sm text-center animate-pulse">Тэмцээний оноолтыг бэлдэж байна ...</h1>
                            <img src="../../gifs/loading.gif"/>
                        </div>
                        :
                        <div className="flex justify-center flex-col mt-4">
                            <h1 className="font-Roboto uppercase text-lg text-center mb-4">Тэмцээний оноолтыг бэлдэх</h1>
                            <div className="flex justify-center">
                                <Button onPress={Submit} className="bg-indigo-600 text-white rounded-full">Тэмцээний оноолт бэлдэх</Button>
                            </div>
                        </div>
                    }
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
