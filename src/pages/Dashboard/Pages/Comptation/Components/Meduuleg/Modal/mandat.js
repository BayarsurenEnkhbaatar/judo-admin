import React, { useEffect, useState } from "react";
import html2pdf from 'html2pdf.js'
import { Button } from "@nextui-org/react";
import MandatCard from "../../Card/mandat";
import { useParams } from "react-router-dom";
import { GET } from "../../../../../../../utils/requests";
import { athlete_uri } from "../../../../../../../utils/url";

export default function MandatPDF({org, comp}) {
  const params = useParams();
  const [loader, setLoader] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [athletes, setAthletes] = useState([]);
  
  useEffect(() => {
    Get();
  }, []);

  const Get = async () => {
    const b = await GET(athlete_uri + `/athlete-to-comptation?comp_id=${params.slug}&org_id=${params.org}`)
    setAthletes(b.data)
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const options = {
    margin: 0, // Remove margin
    filename: `${org.name} багийн мэдүүлэг.pdf`,
    image: {
      type: 'jpeg',
      quality: 1, // Use the highest quality
    },
    html2canvas: {
      scale: 2,
    },
    jsPDF: {
      unit: 'mm', // Use millimeters
      format: 'a4', // Use A4 paper size
      orientation: 'portrait',
    },
  };
  

  const downloadPDF = async() => {
    setLoader(true)
    const element = document.getElementById('demo');
    await html2pdf().from(element).set(options).save();
    setLoader(false);
  }

  return (
    <>
      <Button className='bg-indigo-700 text-white' onClick={openModal} size='sm'>
        Мандат татах
      </Button>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="absolute w-full h-full bg-gray-800 opacity-50" onClick={closeModal}></div>
          <div className="bg-white rounded-lg z-10 overflow-y-auto h-[284mm]">
            <div className="bg-white rounded-lg z-10" id="demo">
              <div className="grid grid-cols-2 gap-1 justify-between">
                {
                  athletes.map((data, index) => {
                    return(
                      <MandatCard data={data} key={index} org={org} comp={comp}/>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-end ml-2">
              {
                loader?
                <Button className="bg-white">Татаж байна...</Button>
                :
                <Button className="bg-white" onClick={downloadPDF}>Мандат татах</Button>
              }
            </div>
        </div>
      )}
    </>
  );
}
