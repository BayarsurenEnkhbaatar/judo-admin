import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {useRef, useState} from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PDFAthletesCard from "../../Card/pdf-athletes";


export default function MeduulegPDF({male, female}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [loader, setLoader] = useState(false);
  const pdfRef = useRef();
  

  const downloadPDF = () =>{
    const capture = pdfRef.current;
    setLoader(true);
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = doc.internal.pageSize.getHeight(); 
      const imgWidth = canvas.width;
      const imgHeigth = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight/imgHeigth);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      doc.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeigth * ratio);
      doc.save('invoice.pdf');
    })
    setLoader(false);
  }


  return (
    <>
      <Button className='bg-indigo-700 text-white' size='sm' onPress={onOpen}>Мэдүүлэг татах</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl" className="h-full">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div ref={pdfRef}>
                    <div className="p-4">
                        <h1 className="text-center font-bold mt-4 mx-20">Монгол улсын аварга шалгаруулах тэмцээнд оролцох ХАНГАЙ байгууллагын мэдүүлэг</h1>
                        <div className="flex justify-center gap-2 mt-4">
                            <img className="h-20" src="../../../icons/ijf.png"/>
                            <img className="h-20" src="../../../icons/judo.jpg"/>
                            <img className="h-20" src="../../../icons/gov.svg"/>
                        </div>


                        <div className="px-4">
                          
                              <div className="flex flex-col text-xs">
                                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                  <div className="inline-block min-w-full sm:px-6 lg:px-8">
                                      <div className="overflow-hidden">
                                      <h1 className="mb-4 mt-6">Эрэгтэй жин</h1>
                                        {
                                          male.map((it, index) => {
                                            return(
                                              <table className="min-w-full text-left text-sm font-light border">
                                                <thead className="border font-medium dark:border-neutral-500">
                                                  {
                                                    it.category.jin.map((jin, idx) => {
                                                      return(
                                                          <th scope="col" className="px-6 py-1 border-l ">{jin.kg} кг</th>
                                                      )
                                                    })
                                                  }
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    {
                                                      it.category.jin.map((jin, idx) => {
                                                        return(
                                                            <PDFAthletesCard data={jin} key={idx}/>
                                                        )
                                                      })
                                                    }
                                                  </tr>
                                                </tbody>
                                              </table>
                                            )
                                          })
                                        }

                                      </div>
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-col text-xs">
                                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                  <div className="inline-block min-w-full sm:px-6 lg:px-8">
                                      <div className="overflow-hidden">
                                      <h1 className="mb-4 mt-6">Эмэгтэй жин</h1>
                                        {
                                          female.map((it, index) => {
                                            return(
                                              <table className="min-w-full text-left text-sm font-light border">
                                                <thead className="border font-medium dark:border-neutral-500">
                                                  {
                                                    it.category.jin.map((jin, idx) => {
                                                      return(
                                                          <th scope="col" className="px-6 py-1 border-l ">{jin.kg} кг</th>
                                                      )
                                                    })
                                                  }
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    {
                                                      it.category.jin.map((jin, idx) => {
                                                        return(
                                                            <PDFAthletesCard data={jin} key={idx}/>
                                                        )
                                                      })
                                                    }
                                                  </tr>
                                                </tbody>
                                              </table>
                                            )
                                          })
                                        }

                                      </div>
                                  </div>
                                </div>
                              </div>

                        </div>

                    </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                {
                    loader?
                    <Button color="primary">
                        Татаж байна...
                    </Button>
                    :
                    <Button color="primary" onPress={downloadPDF}>
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
