import React, { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import PDFAthletesCard from "../../Card/pdf-athletes";
import html2pdf from 'html2pdf.js'


export default function MeduulegPDF({male, female, org}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [loader, setLoader] = useState(false);

  const options = {
    margin: 1,
    filename: `${org.name} багийн мэдүүлэг.pdf`,
    image: { 
      type: 'jpeg', 
      quality: 0.98 
    },
    html2canvas: { 
      scale: 2 
    },
    jsPDF: { 
      unit: 'in', 
      format: 'letter', 
      orientation: 'portrait' 
    }
  }
  

  const downloadPDF = () => {
    const element = document.getElementById('demo');
    html2pdf().from(element).set(options).save();
    setLoader(false);
  }


  return (
    <>
      <Button className='bg-indigo-700 text-white' size='sm' onPress={onOpen}>Мэдүүлэг татах</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl" className="h-full" scrollBehavior='inside'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div id="demo">
                    <div className="p-4">
                        <h1 className="text-center font-bold mt-4 mx-20">Монгол улсын аварга шалгаруулах тэмцээнд оролцох "{org.name}" багийн мэдүүлэг</h1>
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
