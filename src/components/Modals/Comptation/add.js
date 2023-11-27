import React, { useEffect, useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea, Checkbox, Select, SelectItem, Spinner} from "@nextui-org/react";
import { BsPlus } from "react-icons/bs";
import { Steps } from 'antd';
import { DatePicker } from 'antd';
import { GET, IMAGE_UPLOAD, POST } from "../../../utils/requests";
import { category_uri, comp_uri } from "../../../utils/url";
import {ATTYPES} from '../../../utils/types'
import {toast} from 'react-toastify'

export default function CompAddModal({callback}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [step, setStep] = useState(0);
  const [category, setCategory] = useState([]);
  const [data, setData] = useState({name:"", desc:"", province:"", sum:"", start_date:"", end_date:"", 
  orgenizer:"", cover_img:"", categorys:[], mandat_price:"", more_address:"", type:""});
  const [imgload, setImgload] = useState(false);
  const steps = [{title: 'Ерөнхий мэдээлэл',content: 'First-content',},{title: 'Зохион байгуулагч',content: 'Second-content',},{title: 'Ангилал, жингийн мэдээлэл',content: 'Last-content',},];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const handleCall = () => {
    callback();
  }

  useEffect(() => {
    Get();
  }, [data]);

  const Get = async()=>{
    const res = await GET(category_uri)
    setCategory(res.data);
  }

  const next = () => {
    setStep(step + 1);
  };
  const prev = () => {
    setStep(step - 1);
  };

  function handleChange({ checked, id }) {
    setData(prevData => {
      if (checked){
        return {
          ...prevData,
          categorys: [...prevData.categorys, id]
        };
      } else {
        return {
          ...prevData,
          categorys: prevData.categorys.filter(item => item !== id)
        };
      }
    });
  }

  const Submit = async () =>{
    if(data.name === "", data.desc === "" || data.province === ""||data.sum === ""|| data.start_date === ""|| data.end_date === ""|| data.orgenizer === ""|| data.categorys === [] || data.mandat_price === ""){
     return toast.warning("Та мэдээллээ бүрэн оруулна уу !")
    }
    const res = await POST({uri:comp_uri, data:data});
    if(res.status === 201){
      toast.success("Тэмцээнийг амжилттай нэмлээ");
      onOpenChange(false);
      handleCall();
    }
  }

  const options = [
    { label: "Сонгох", value: "" },
    { label: "Өсвөр үе", value: ATTYPES.JUNIOR },
    { label: "Залуучууд", value: ATTYPES.CADET },
    { label: "Насанд хүрэгчид", value: ATTYPES.SENIOR },
    { label: "Мастерс", value: ATTYPES.MASTERS },
  ];

  const handleSelectionChange = (event) => {
    setData({...data, type:event.target.value});
  };

  const handleUpload = async (e) => {
    setImgload(true);
    const file = e.target.files[0];
    try {
      const res = await IMAGE_UPLOAD({file:file})
      setData({...data, cover_img:res});
      setImgload(false);
    } catch (error) {
      setImgload(false);
      console.error('Error uploading file', error);
    }
  };


  return (
    <>
    <Button onPress={onOpen} size='sm' className='bg-blue-600 text-white'><BsPlus/>Тэмцээн нэмэх</Button>
      <Modal placement="top" backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange} size="5xl" className="m-8">
        <ModalContent>
          {(onClose) => (
            <>
              {/* <ModalHeader className="flex flex-col gap-1">Тэмцээн нэмэх</ModalHeader> */}
              <ModalBody>
              <div className="font-Roboto my-4">
                <div className="">
                <Steps
                  current={step}
                  percent={100}
                  items={items}
                />
                </div>
                <h1 className="text-xl mt-8 text-center uppercase">Шинэ тэмцээн нэмэх</h1>
                <p className="text-sm text-center">Шинэ тэмцээн нэмэхдээ мэдээллүүдээ сайтар нягтална уу</p>

                  {
                    step === 0 &&
                    <div className="my-4">
                      <h1 className="text-sm font-bold">Тэмцээний нэр</h1>
                      <Input onChange={(e) => setData({...data, name:e.target.value})} value={data.name} className="mt-1" placeholder="Тэмцээний нэр оруулах"/>

                      <h1 className="text-sm font-bold mt-4">Тэмцээний зорилго</h1>
                      <Textarea onChange={(e) => setData({...data, desc:e.target.value})}  value={data.desc} className="mt-1" placeholder="Зорилго оруулах"/>

                      <h1 className="text-sm font-bold mt-4">Зохиогдох газар</h1>
                      <div className="flex gap-2">
                        <Input onChange={(e) => setData({...data, province:e.target.value})} value={data.province} className="mt-1" placeholder="Хот / Аймаг"/>
                        <Input onChange={(e) => setData({...data, sum:e.target.value})} value={data.sum} className="mt-1" placeholder="Сум / Дүүрэг"/>
                      </div>

                      <h1 className="text-sm font-bold mt-4">Зохиогдох дэлгэрэнгүй хаяг</h1>
                      <Textarea onChange={(e) => setData({...data, more_address:e.target.value})}  value={data.more_address} className="mt-1" placeholder="Дэлгэрэнгүй хаяг оруулах"/>

                      <h1 className="text-sm font-bold mt-4">Эхлэх хугацаа</h1>
                      <input className="bg-gray-100 w-full p-2 rounded-md outline-none" type="date" value={data.start_date} onChange={(e) => setData({...data, start_date:e.target.value})}/>

                      <h1 className="text-sm font-bold mt-4">Дуусах хугацаа</h1>
                      <input className="bg-gray-100 w-full p-2 rounded-md outline-none" type="date" value={data.end_date} onChange={(e) => setData({...data, end_date:e.target.value})}/>
                    </div>
                  }

                  {
                    step === 1 &&
                    <div className="my-4">
                      <h1 className="text-sm font-bold">Зохион байгуулагчид</h1>
                      <Input onChange={(e) => setData({...data, orgenizer:e.target.value})} value={data.orgenizer} className="mt-1" placeholder="Зохион байгуулагчдийн нэр оруулах"/>
                      
                      <h1 className="text-sm font-bold mt-4">Ангилал сонгох</h1>
                      {/* <Select className="" size="xs" onChange={(e) => setData({...data, type:e.target.value})}> */}
                      <Select
                      size="xs"
                        value={data.type}
                        onChange={handleSelectionChange}
                      >
                        {options.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </Select>

                      <input className="mt-1" type='file' onChange={handleUpload}/>

                      {
                        imgload &&
                        <div className="mt-1 flex items-center gap-2">
                          <h1 className="text-sm">Зургийг хадгалж байна.</h1>
                          <Spinner size='sm'/>
                        </div>
                      }

                      <h1 className="text-sm mt-4 font-bold">Мандатын төлбөр</h1>
                      <Input type='number' onChange={(e) => setData({...data, mandat_price:e.target.value})} value={data.mandat_price} className="mt-1" placeholder="Мандатын төлбөр"/>
                    </div>
                  }

                  {
                    step === 2 &&
                    <div className="my-4">
                      <h1 className="text-sm font-bold">Тэмцээний ангилал оруулах</h1>
                      <div>
                        {
                          category.map((item, index) => {
                            return(
                              <div key={index}>
                                  <div className='flex items-center bg-gray-100 rounded-md p-4 gap-4 mt-2'>
                                    <Checkbox value={item.id} checked={data.categorys.includes(item.id)} onChange={(e) => handleChange({ checked:e.target.checked, id:item.id })}/>
                                    <h1>{item.name}</h1>
                                    {
                                      item.type === ATTYPES.JUNIOR &&
                                      <h1 className='bg-green-600 text-white p-1 text-xs rounded-md'>Өсвөр үе</h1>
                                    }
                                    {
                                      item.type === ATTYPES.CADET &&
                                      <h1 className='bg-pink-600 text-white p-1 text-xs rounded-md'>Залуучууд</h1>
                                    }
                                    {
                                      item.type === ATTYPES.SENIOR &&
                                      <h1 className='bg-fuchsia-600 text-white p-1 text-xs rounded-md'>Насанд хүрэгчид</h1>
                                    }
                                  </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  }

              </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={prev}>
                  Буцах
                </Button>
                  {
                    step === 2?
                    <Button color="primary" onPress={Submit}>
                      Оруулах
                    </Button>
                    :
                    <Button color="primary" onPress={next}>
                      Цааш
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
