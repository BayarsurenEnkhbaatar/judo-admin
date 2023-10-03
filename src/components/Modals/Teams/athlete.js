import React from "react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Avatar} from "@nextui-org/react";

export default function AthleteModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className='' size='sm'>Дэлгэрэнгүй</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" className="font-Roboto">
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
                      <h1 className="text-lg">Энхбаатар, <span className="text-lg font-bold">Баярсүрэн</span></h1>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
