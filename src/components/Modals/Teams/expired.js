import React, { useEffect, useState } from "react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Avatar, Spinner, Skeleton} from "@nextui-org/react";
import { IMAGE_GET, PATCH } from "../../../utils/requests";
import { athlete_uri } from "../../../utils/url";
import {toast} from 'react-toastify';
import { GENDER } from "../../../utils/types";

export default function ExpiredModal({data, callback}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [load, setLoad] = useState(false);
  const [id, setId] = useState();

  const [imgload, setImgload] = useState(false);
  const [pro, setPro] = useState();
  const [doc, setDoc] = useState();

  useEffect(() => {
    setId(data.id);
  }, [data]);

  const handleCallback = () => {
    callback();
  }

  var currentDate = new Date();
  var oneYearFromNow = new Date(currentDate);
  oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
  

  const Submit =async () => {
    setLoad(true);
    const res = await PATCH({uri:athlete_uri+`/expired-approve`, data:{id: id, date:oneYearFromNow}})
    if(res.status === 200){
      toast.success("амжилттай сунгалаа");
      setLoad(false);
      return handleCallback();
    }else{
      setLoad(false);
      toast.error("Алдаа гарлаа");
    }
  }

  const handleOpen = () =>{
    onOpen();
    Get();
  }

  const Get = async () => {
    setImgload(true);
    const res = await IMAGE_GET({key:data.profile_img});
    const ress = await IMAGE_GET({key:data.document_img});
    setPro(res);
    setDoc(ress);
    setImgload(false);
  }

  return (
    <>
      <Button onPress={handleOpen} className='' size='sm'>Эрх сунгах</Button>
      <Modal placement='top' isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" className="font-Roboto">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Тамирчины дэлгэрэнгүй мэдээлэл</ModalHeader>
              <ModalBody>
                <div>
                  <div className="flex gap-4">
                      {
                        load?
                        <Skeleton className="w-40 h-40 rounded-lg"></Skeleton>
                        :
                        <img className="h-40 w-40 rounded-lg" src={pro}/>
                      }
                    <div>

                      <div className="mt-2">
                        <h1>Овог, Нэр</h1>
                        <h1 className="text-lg">{data.lastname}, <span className="text-lg font-bold">{data.username}</span></h1>

                        <h1 className="mt-2">Регистерийн дугаар</h1>
                        <h1 className="text-lg">{data.register_no}</h1>

                        <h1 className="mt-2">Хүйс</h1>
                        <h1 className="text-lg">{data.gender === GENDER.MALE && 'Эрэгтэй'}</h1>
                        <h1 className="text-lg">{data.gender === GENDER.FEMALE && 'Эмэгтэй'}</h1>
                      </div>

                    </div>
                  </div>
                  <h1 className="mt-4 mb-2">Бичиг баримт зураг</h1>
                    {
                    load?
                    <Skeleton className="w-full h-96 rounded-lg"></Skeleton>
                    :
                    <div className="w-full">
                      <img className="h-96 rounded-lg" src={doc}/>
                    </div>
                    }
                </div>
              </ModalBody>
              <ModalFooter>

                <Button color="danger" variant="light" onPress={onClose}>
                  Болих
                </Button>
                {
                  load?
                  <Button color="primary">
                    Сунгаж байна... <Spinner/>
                  </Button>
                  :
                  <Button color="primary" onPress={Submit}>
                    Эрх сунгах
                  </Button>
                }
              
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
