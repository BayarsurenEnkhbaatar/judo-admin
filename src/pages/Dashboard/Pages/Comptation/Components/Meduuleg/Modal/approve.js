import React, { useEffect, useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useParams } from "react-router-dom";
import { comp_to_org_uri } from "../../../../../../../utils/url";
import { GET, PATCH } from "../../../../../../../utils/requests";
import { STATUS } from "../../../../../../../utils/types";

export default function ApproveModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const params = useParams();
  const [data, setData] = useState({})

  useEffect(()=>{
    Get();
  }, []);

  const Get = async () => {
    const res = await GET(comp_to_org_uri+ `?comp_id=${params.slug}&org_id=${params.org}`);
    setData(res.data)
  };

  const Submit = async () => {
    const res = await PATCH({uri:comp_to_org_uri, data:{comp_id:params.slug, org_id: params.org, status:STATUS.APPROVED}});
    console.log(res)
  };

  return (
    <>
      <>
        {
          data?.comp?.status === STATUS.APPROVED &&
          <h1 className="uppercase text-green-700 font-bold text-xs">Баталгаажсан</h1>
        }
        {
          data?.comp?.status === STATUS.REQUESTED &&
          <Button size="sm" onPress={onOpen} className="bg-green-600 text-white">Төлбөр төлсөн тохиолдолд баталгаажуулна</Button>
        }
      </>
      {/* {
        data.comp.status === STATUS.APPROVED &&
        <h1 className="bg-green-600 p-2 text-white">Баталгаажсан</h1>
      } */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Тамирчдыг баталгаажуулах</ModalHeader>
              <ModalBody>
               <div>
                   <h1>Нийт тэмцээнд оролцох тамирчид <span className="font-bold">{data.athletes.length}</span></h1>
                   <h1>Мандатын төлбөр <span className="font-bold">{data.comp.comptation.mandat_price} ₮</span></h1>
                   <h1>Нийт төлөх <span className="font-bold">{data.comp.comptation.mandat_price * data.athletes.length} ₮</span></h1>
               </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
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
