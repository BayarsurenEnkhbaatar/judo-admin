import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function Img_Modal({data}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <img onClick={onOpen} className='h-10 w-8' src={data}/>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <div>
                <img className="w-full" src={data}/>
              </div>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Гарах
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
