import React, { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Spinner} from "@nextui-org/react";
import { utils_uri } from "../../../utils/url";
import { useParams } from 'react-router-dom';

export default function Download_pdf({data}) {
  const params = useParams();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [load, setLoad] = useState(false);


  const generatePDF = async () => {
    setLoad(true);
    try {
      const response = await fetch(utils_uri+`/jin/pdf`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jin: params.kg,
          comp_id: params.comp,
        }),
      });

      const pdfContent = await response.text();
      console.log(response.text)

    
      const myWindow = window.open('');
      myWindow.document.write(
          '<iframe width="100%" height="100%" src="data:application/pdf;base64, ' + pdfContent + '"></iframe>'
      );

   setLoad(false);
  } catch (error) {
    setLoad(false);
    console.error('Error generating PDF:', error);
  }
};


  return (
    <>
      <Button onPress={onOpen}>Жингийн протокол татах</Button>
      {/* <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top" className="h-[297mm] w-[2100000px]" size="4xl">
        <ModalContent>
          {(onClose) => (
            <>
              <div className="p-8 font-Roboto">
                <div className="bg-green-200 border-2 border-gray-700 rounded-md p-2 w-full">
                  <div className="flex justify-between">
                    <h1 className="font-bold text-center text-green-200 text-5xl mt-2">34 kg</h1>
                    <div>
                      <h1 className="font-bold text-center text-3xl">Weigh-in-List</h1>
                      <h1 className="font-bold text-center text-lg">Suragch-2023</h1>
                    </div>
                    <h1 className="font-bold text-center text-5xl mt-2">34 kg</h1>
                  </div>
                </div>
                <div className="mt-8">
                <table className="w-full border-1 border-gray-400">
                  <thead className="p-2">
                    <tr className="border font-bold text-sm">
                      <th className="border">#</th>
                      <th className="border">Клуб</th>
                      <th className="border">Овог</th>
                      <th className="border">Нэр</th>
                      <th className="border w-28">Төрсөн огноо</th>
                      <th className="border">Жин</th>
                      <th className="border">Гарын үсэг</th>
                      <th className="border">Out</th>
                    </tr>
                  </thead>
                  <tbody className="border">
                    <tr className="text-xs h-6 text-center">
                      <td className="border">1</td>
                      <td className="border">KIL</td>
                      <td className="border text-wrap">Энхбаатар</td>
                      <td className="border">Баярсүрэн</td>
                      <td className="border">2023-10-10</td>
                      <td className="border">12</td>
                      <td className="border">1</td>
                      <td className="border">1</td>
                    </tr>
                    </tbody>
                </table>
                </div>
              </div>
            </>
          )}
        </ModalContent>
      </Modal> */}


      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top">
        <ModalContent>
          {(onClose) => (
            <>
              <div className="p-4">
                <h1>Та энэ жинд оролцох бүх тамирчдын мэдээллийг татах гэж байна.</h1>
              </div>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Гарах
                </Button>
                {
                  load?
                  <Button color="primary" variant="light">
                    Татаж байна ... <Spinner/>
                  </Button>
                  :
                  <Button color="primary" variant="light" onPress={generatePDF}>
                    Татах
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
