import React, { useContext } from "react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { PATCH } from "../../../utils/requests";
import { athlete_uri } from "../../../utils/url";
import { STATUS } from "../../../utils/types";
import {AuthContext} from '../../../context/auth'
import {toast} from 'react-toastify';

export default function AthleteModal({data, callback}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {currentUser} = useContext(AuthContext);
  
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

  return (
    <>
      <Button onPress={onOpen} className='' size='sm'>Дэлгэрэнгүй</Button>
      <Modal placement="top" isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" className="font-Roboto">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Тамирчны дэлгэрэнгүй мэдээлэл</ModalHeader>
              <ModalBody>
                <div>
                  <div className="flex gap-4">
                    <img className="h-40 w-40 rounded-lg" src="https://i.pravatar.cc/150?u=a04258114e29026708c"/>
                    <div>
                      <h1>Овог, Нэр</h1>
                      <h1 className="text-lg">{data.lastname}, <span className="text-lg font-bold">{data.username}</span></h1>
                    </div>
                  </div>
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
