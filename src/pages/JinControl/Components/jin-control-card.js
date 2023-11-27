import React, { useEffect, useState } from 'react'
import {Button, Input, Spin} from 'antd'
import { IMAGE_GET, PATCH } from '../../../utils/requests'
import { athlete_to_comptation_uri } from '../../../utils/url'
import {toast} from 'react-toastify';
import Img_Modal from './img_modal';

const JinControlCard = ({data, callback}) => {
    const [jin, setJin] = useState({jin:'-', atid:'', standart_jin:'', comp_id:''})
    const [load, setLoad] = useState(false);
    const [util, setUtil] = useState({img:'', imgload:''});

    const handlecall = () => {
        callback();
    }

    const Submit = async() => {
        if(jin.jin === '-' || jin.jin === ''){
            return toast.warning("Жингийн мэдээлэл хоосон байна !")
        }
        setLoad(true);
        try{
            console.log(jin)
            const res = await PATCH({uri:athlete_to_comptation_uri+`/jin-control`, data:jin})
            setJin({...jin, jin:'-'})
            setLoad(false);
            handlecall();
            toast.success("Амжиллтай нэмлээ");
        }catch(err){
            setLoad(false);
            console.log(err);
        }
    }

    useEffect(() => {
        Get();
        setJin({...jin, atid:data.athlete.id, standart_jin:data.kg, comp_id:data.comp_id, });
    }, [data]);

    const Get = async()=> {
        setUtil({...util, imgload:true});
        try{
            const res = await IMAGE_GET({key: data.athlete.profile_img})
            setUtil({...util, img:res});
        }catch(err){
            console.log(err);
        }
    }


  return (
    <div className='bg-white rounded p-2 mt-1 hover:bg-gray-300 cursor-pointer'>
        <div className='flex items-center justify-between gap-2'>
            <div className='flex items-center gap-2'>
                <Img_Modal data={util.img}/>
                <div>
                    <h1 className='text-sm'>{data.athlete.lastname}</h1>
                    <h1 className='font-bold'>{data.athlete.username}</h1>
                </div>
            </div>
            <h1 className='text-sm'>{data.organization.name}</h1>
            <div className='flex items-center gap-2'>
                <Input className='w-24' value={jin.jin} onChange={(e)=> setJin({...jin, jin:e.target.value})}/>
                {
                    load?
                    <Button>
                        <Spin/>
                    </Button>
                    :
                    <Button onClick={Submit}>Оруулах</Button>
                }
            </div>
        </div>
    </div>
  )
}

export default JinControlCard
