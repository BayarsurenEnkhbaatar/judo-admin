import React, { useState } from "react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Avatar, Spinner} from "@nextui-org/react";
import { PATCH } from "../../../utils/requests";
import { org_uri } from "../../../utils/url";
import { STATUS } from "../../../utils/types";
import {toast} from 'react-toastify'

export default function ApprovedModal({data, callback}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [load, setLoad] = useState(false)

//   const handleCallback = () => {
//     callback();
//   }


  return (
    <>
      <Button onPress={onOpen} className='' size='sm'>Дэлгэрэнгүй</Button>
      <Modal placement='top' isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" className="font-Roboto">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Байгууллагын дэлгэрэнгүй мэдээлэл</ModalHeader>
              <ModalBody>
                <div>
                  <div className="flex gap-4">
                    <img className="h-40 w-40 rounded-lg" src="https://i.pravatar.cc/150?u=a04258114e29026708c"/>
                    <div>

                      <div className="mt-2">
                        <h1>Байгууллагын нэр</h1>
                        <h1 className="text-lg uppercase font-bold">{data.name}</h1>
                      </div>
                      <div className="mt-2">
                        <h1>Танилцуулга</h1>
                        <h1 className="text-lg uppercase font-bold">{data.description}</h1>
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
