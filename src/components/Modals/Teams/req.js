import React, { useContext, useState } from "react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Skeleton} from "@nextui-org/react";
import { IMAGE_GET, PATCH } from "../../../utils/requests";
import { athlete_uri } from "../../../utils/url";
import { GENDER, STATUS } from "../../../utils/types";
import {AuthContext} from '../../../context/auth'
import {toast} from 'react-toastify';

export default function AthleteModal({data, callback}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {currentUser} = useContext(AuthContext);

  const [load, setLoad] = useState(false);
  const [pro, setPro] = useState();
  const [doc, setDoc] = useState();
  
  const Submit = async () => {
    const res = await PATCH({uri: athlete_uri+`${'/status/'+data.id}`, data:{status: STATUS.APPROVED}})
    console.log(res)
    if(res.status === 200){
      toast.success("Амжилттай баталгаажууллаа");
      handleCalback();
    }
  }

  const Reject = async () => {
    const res = await PATCH({uri: athlete_uri+`${'/status/'+data.id}`, data:{status: STATUS.DECLINED}})
    console.log(res)
    if(res.status === 200){
      toast.success("Амжилттай цуцаллаа");
      handleCalback();
    }
  }

  const handleCalback = () =>{
    callback();
  }


  const handleOpen = () =>{
    onOpen();
    Get();
  }

  const Get = async () => {
    setLoad(true);
    const res = await IMAGE_GET({key:data.profile_img});
    const ress = await IMAGE_GET({key:data.document_img});
    setPro(res);
    setDoc(ress);
    setLoad(false);
  }


  return (
    <>
      <Button onPress={handleOpen} className='' size='sm'>Дэлгэрэнгүй</Button>
      <Modal placement="top" isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" className="font-Roboto">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Тамирчны дэлгэрэнгүй мэдээлэл</ModalHeader>
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
                        <h1>Овог, Нэр</h1>
                        <h1 className="text-lg">{data.lastname}, <span className="text-lg font-bold">{data.username}</span></h1>

                        <h1 className="mt-2">Регистерийн дугаар</h1>
                        <h1 className="text-lg">{data.register_no}</h1>

                        <h1 className="mt-2">Хүйс</h1>
                        <h1 className="text-lg">{data.gender === GENDER.MALE && 'Эрэгтэй'}</h1>
                        <h1 className="text-lg">{data.gender === GENDER.FEMALE && 'Эмэгтэй'}</h1>
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
                  Close
                </Button>
                <Button color="yellow" onPress={Reject}>
                  Цуцлах
                </Button>
                <Button color="primary" onPress={Submit}>
                  Баталгаажуулах
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
