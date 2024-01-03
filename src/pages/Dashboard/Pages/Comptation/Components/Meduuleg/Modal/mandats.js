import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {Button} from '@nextui-org/react'
import { utils_uri } from '../../../../../../../utils/url';

const Mandats = () => {
  const params = useParams();
  const [htmlContent, setHtmlContent] = useState(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
            .mandat-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 16px; /* Adjust the gap as needed */
                padding: 2px; /* Add padding to the grid container */
            }
          .mandat-container {
              border: 1px solid #0073e6;
              font-family: 'Roboto', sans-serif;
              width: 105mm;
              height: 147.5mm;
              background: url('path/to/mandat-background.jpg') no-repeat center center;
              background-size: cover;
          }
  
          .header {
              background: #0073e6;
              color: white;
              padding: 6px 0;
          }
  
          .header h1 {
              text-align: center;
              text-transform: uppercase;
              font-size: 12px;
          }
  
          .logo-container {
              display: flex;
              justify-content: center;
              gap: 2px;
              margin-top: 12px;
          }
  
          .logo-container img {
              height: 20px;
          }
  
          .profile-container {
              display: flex;
              justify-content: center;
              margin-top: 12px;
          }
  
          .profile-container img {
              height: 4cm;
              width: 3cm;
          }
  
          .info-container {
              display: flex;
              justify-content: center;
              padding: 16px 0;
          }
  
          .info {
              width: 70%;
              padding: 0 10%;
          }
  
          .info h1 {
              font-weight: bold;
              font-size: 12px;
          }
  
          .info h1 span {
              font-weight: lighter;
              font-size: 10px;
              text-transform: uppercase;
          }
  
          .footer {
              text-align: center;
              margin-top: 12px;
          }
  
          .footer h1 {
              font-weight: bold;
              font-size: 12px;
          }
      </style>
  </head>
  <body>
      <div class="mandat-grid">
      <div class="mandat-container">
          <div class="header">
              <h1>Монголын жүдо бөхийн холбоо</h1>
              <h1>COMP_NAME МАНДАТ</h1>
          </div>
          <div class="logo-container">
              <img src="../../../icons/judo.jpg" alt="Judo Logo">
              <img src="../../../icons/gov.svg" alt="Government Logo">
              <img src="../../../icons/ijf.png" alt="IJF Logo">
          </div>
          <div class="profile-container">
              <img src="PROFILE_PATH" alt="Profile Image">
          </div>
          <div class="info-container">
              <div class="info">
                  <h1><span>Тамирчины овог нэр :</span> <span>ATHLETE_NAME</span></h1>
                  <h1><span>Байгууллага :</span> <span>ORG_NAME</span></h1>
                  <h1><span>Жин :</span> <span>KG кг</span></h1>
              </div>
          </div>
          <div class="footer">
              <h1>Dojo.mn</h1>
              <h1>2023 он</h1>
          </div>
      </div>
      </div>
  </body>
  </html>
  
  `);
  const [load, setLoad] = useState(false);

  const generatePDF = async () => {
      setLoad(true);
    try {
      // const dynamicData = [
      //   {
      //     title: 'Sample Title 1',
      //     content: 'Sample Content 1',
      //     imageUrl: '<../../../icons/ijf.png',
      //   },
      //   {
      //     title: 'Sample Title 2',
      //     content: 'Sample Content 2',
      //     imageUrl: '<../../../icons/ijf.png',
      //   },
      //   {
      //       title: 'Sample Title 2',
      //       content: 'Sample Content 2',
      //       imageUrl: '<../../../icons/ijf.png',
      //     },
      //     {
      //       title: 'Sample Title 1',
      //       content: 'Sample Content 1',
      //       imageUrl: '<../../../icons/ijf.png',
      //     },
      //     {
      //       title: 'Sample Title 2',
      //       content: 'Sample Content 2',
      //       imageUrl: '<../../../icons/ijf.png',
      //     },
      //     {
      //         title: 'Sample Title 2',
      //         content: 'Sample Content 2',
      //         imageUrl: '<../../../icons/ijf.png',
      //       },
      //       {
      //           title: 'Sample Title 1',
      //           content: 'Sample Content 1',
      //           imageUrl: '<../../../icons/ijf.png',
      //         },
      //         {
      //           title: 'Sample Title 2',
      //           content: 'Sample Content 2',
      //           imageUrl: '<../../../icons/ijf.png',
      //         },
      //         {
      //             title: 'Sample Title 2',
      //             content: 'Sample Content 2',
      //             imageUrl: '<../../../icons/ijf.png',
      //           },
      //           {
      //               title: 'Sample Title 1',
      //               content: 'Sample Content 1',
      //               imageUrl: '<../../../icons/ijf.png',
      //             },
      //             {
      //               title: 'Sample Title 2',
      //               content: 'Sample Content 2',
      //               imageUrl: '<../../../icons/ijf.png',
      //             },
      //             {
      //                 title: 'Sample Title 2',
      //                 content: 'Sample Content 2',
      //                 imageUrl: '<../../../icons/ijf.png',
      //               },
      //               {
      //                   title: 'Sample Title 1',
      //                   content: 'Sample Content 1',
      //                   imageUrl: '<../../../icons/ijf.png',
      //                 },
      //                 {
      //                   title: 'Sample Title 2',
      //                   content: 'Sample Content 2',
      //                   imageUrl: '<../../../icons/ijf.png',
      //                 },
      //                 {
      //                     title: 'Sample Title 2',
      //                     content: 'Sample Content 2',
      //                     imageUrl: '<../../../icons/ijf.png',
      //                   },
                        
      //   // ... add more dynamic data objects as needed
      // ];

      // // Combine dynamic HTML content for each data object
      // const dynamicHtml = dynamicData.map((data) => {
      //   return Object.keys(data).reduce(
      //     (acc, key) => acc.replace(new RegExp(`{{${key}}}`, 'g'), data[key]),
      //     htmlContent
      //   );
      // }).join('');

      const response = await fetch(utils_uri+`/pdf`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          org_id: params.org,
          comp_id: params.slug,
        }),
      });

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      window.open(url, '_blank'); // Open the PDF in a new tab/window
      setLoad(false);
    } catch (error) {
      setLoad(false);
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div>
      {
          load?
          <Button className='bg-gray-300 text-blue-800 animate-bounce' size='sm'>Мандатыг боловсруулж байна ...</Button>
          :
          <Button className='bg-blue-800 text-white' size='sm' onClick={generatePDF}>Generate PDF мандат</Button>
      }
    </div>
  );
};

export default Mandats;