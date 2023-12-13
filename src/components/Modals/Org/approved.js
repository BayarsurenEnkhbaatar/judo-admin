import React, { useState } from "react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Avatar, Spinner, Skeleton} from "@nextui-org/react";
import { IMAGE_GET } from "../../../utils/requests";


export default function ApprovedModal({data, callback}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [imgload, setImgload] = useState(false);
  const [logo, setLogo] = useState();

  const handleOpen = () =>{
    onOpen();
    Get();
  }

  const Get = async () => {
    setImgload(true);
    const res = await IMAGE_GET({key:data.logo});
    setLogo(res);
    setImgload(false);
  }


  return (
    <>
      <Button onPress={handleOpen} className='' size='sm'>Дэлгэрэнгүй</Button>
      <Modal placement='top' isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" className="font-Roboto">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Байгууллагын дэлгэрэнгүй мэдээлэл</ModalHeader>
              <ModalBody>
                <div>
                  <div className="flex gap-4">
                      {
                        imgload?
                        <Skeleton className="w-40 h-40 rounded-lg"></Skeleton>
                        :
                        <img className="h-40 w-40 rounded-lg" src={logo}/>
                      }
                    <div>

                      <div className="mt-2">
                        <h1>Байгууллагын нэр</h1>
                        <h1 className="text-lg uppercase font-bold">{data.name}</h1>
                      </div>
                      <div className="mt-2">
                        <h1>Танилцуулга</h1>
                        <h1 className="text-lg uppercase font-bold">{data.description}</h1>
                      </div>
                      <div className="mt-2">
                        <h1>Дэлгэрэнгүй хаяг</h1>
                        <h1 className="text-lg uppercase font-bold">{data.address}</h1>
                      </div>
                      <div className="mt-2">
                        <h1>Хот/Аймаг, Дүүрэг/Сум</h1>
                        <h1 className="text-lg uppercase font-bold">{data.province}, {data.sum}</h1>
                      </div>
                      <div className="mt-2">
                        <h1>Имейл хаяг</h1>
                        <h1 className="text-lg uppercase font-bold">{data.email}</h1>
                      </div>
                      <div className="mt-2">
                        <h1>Утасны дугаар</h1>
                        <h1 className="text-lg uppercase font-bold">{data.phone_no}</h1>
                      </div>

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
