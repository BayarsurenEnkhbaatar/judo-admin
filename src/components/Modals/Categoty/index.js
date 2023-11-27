import React, { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";
import {ATTYPES, GENDER} from '../../../utils/types'
import {POST} from '../../../utils/requests'
import { category_uri } from "../../../utils/url";
import { toast } from 'react-toastify'

export default function CategoryAdd({callback}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [data, setData] = useState({name:"",gender:"",type:"", access_age: ""});

  const Submit = async () => {
    const res = await POST({uri:category_uri, data:data});
    if(res.status === 201){
        onOpenChange(false);
        handlecallback();
        toast.success("Амжилттай нэмлээ");
    }
  }

  const handlecallback = () => {
      callback();
  }

  return (
    <>
      <Button onPress={onOpen} className="bg-blue-800 text-white">Нэмэх</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Жингийн ангилал нэмэх</ModalHeader>
              <ModalBody>
                <div>

                    <h1>Ангилалын нэр</h1>
                    <Input onChange={(e) => setData({...data, name:e.target.value})} className="mt-1" placeholder="2007 оос хойш эрэгтэй гэх мэт"/>

                    <h1 className=" mt-4">Хүйс сонгох</h1>
                    <select className="bg-gray-100 w-full mt-1 rounded-md py-3 px-2 outline-none" onChange={(e) => setData({...data, gender:e.target.value})}>
                        <option>Сонгох</option>
                        <option value={GENDER.MALE}>Эр</option>
                        <option value={GENDER.FEMALE}>Эм</option>
                    </select>

                    <h1 className=" mt-4">Ангилал сонгох</h1>
                    <select className="bg-gray-100 w-full mt-1 rounded-md py-3 px-2 outline-none" onChange={(e) => setData({...data, type:e.target.value})}>
                        <option>Сонгох</option>
                        <option value={ATTYPES.JUNIOR}>Өсвөр үе</option>
                        <option value={ATTYPES.CADET}>Залуучууд</option>
                        <option value={ATTYPES.SENIOR}>Насанд хүрэгчид</option>
                        <option value={ATTYPES.MASTERS}>Мастерс</option>
                    </select>

                    <h1 className=" mt-4">Зөвшөөрөгдөх нас (хойш)</h1>
                    <input onChange={(e) => setData({...data, access_age:e.target.value})} type="date" className="w-full py-2 bg-gray-100 px-4 rounded-md outline-none"/>

                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Болих
                </Button>
                <Button color="primary" onPress={Submit}>
                  Нэмэх
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
