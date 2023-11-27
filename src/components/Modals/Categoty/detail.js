import React, { useEffect, useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Spinner} from "@nextui-org/react";
import {GET, POST} from '../../../utils/requests';
import { toast } from 'react-toastify';
import { jin_uri } from "../../../utils/url";

export default function Categotydetail({data}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [datas, setDatas] = useState({id:data.id, kg:""})
  const [load, setLoad] = useState(false);
  const [jin, setJin] = useState([]);

  useEffect(() => {
    Get();
  }, [data]);

  const Submit = async () => {
    setLoad(true);
    const res = await POST({uri:jin_uri, data:datas});
    if(res.status === 201){
      setDatas({...data, jin:""});
      Get();
      toast.success("Амжилттай нэмлээ");
      setLoad(false);
    }
    setLoad(false);
  }

  const Get = async() => {
    const res = await GET(jin_uri+`/${data.id}`);
    setJin(res.data);
  }

  return (
    <>
      <Button onPress={onOpen} className=" " size="sm">Дэлгэрэнгүй</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top" size="5xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Ангилалын дэлгэрэнгүй мэдээлэл ({data.name})</ModalHeader>
              <ModalBody>
                <div className="font-Roboto">
                    <div>
                        <h1 className="text-xm font-bold ">Жин нэмэх</h1>
                        <div className="flex items-center gap-2 mt-2">
                            <Input type='number' placeholder="Нэмэх жин оруулах" value={data.jin} onChange={(e) => setDatas({...datas, kg:e.target.value})}/>
                            {
                              load?
                              <Button ><Spinner/></Button>
                              :
                              <Button onPress={Submit}>Нэмэх</Button>
                            }
                        </div>
                        <div className="flex items-center gap-4">
                          {
                            jin.map((item, index) => {
                              return(
                                <div className="mt-4 flex items-center gap-2 bg-gray-200 py-1 px-2" key={index}>
                                  <h1>{item.kg}кг</h1>
                                  <Button size="sm" className="bg-red-600 text-white">Устгах</Button>
                                </div>
                              )
                            })
                          }
                        </div>
                    </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Болих
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
