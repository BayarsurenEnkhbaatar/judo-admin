import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import Onoolt16 from '../../components/Comptation/Onooltuud/16';
import Onoolt32 from '../../components/Comptation/Onooltuud/32';
import Onoolt4 from '../../components/Comptation/Onooltuud/4';
import Onoolt8 from '../../components/Comptation/Onooltuud/8';
import Loading from '../../components/Loading/load';
import CreateModalComp from '../../components/Modals/Comptation/create';
import { GET } from '../../utils/requests';
import { comp_uri, group_uri } from '../../utils/url';

const CompOnooltDetail = () => {
    const params = useParams();
    const [athletes, setAthletes] = useState([]);
    const [groups, setGroups] = useState([]);
    const [data, setData] = useState({comp_id:params.comp_id, kg: params.kg, groups:[]});
    const [load, setLoad] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      Get();
    }, []);

    const Get = async () => {
      setLoad(true);
      const groups = await GET(group_uri+`?comp_id=${params.comp}&kg=${params.kg}`);
      // if(groups.data.length > 0){
      //   navigate(`/dashboard/comp-list/${params.comp}`)
      //   toast.warning("Оноолт хийгдсэн байна өөрчлөх боломжгүй !");
      //   return
      // }
      const res = await GET(comp_uri+`-admin-athletes?comp_id=${params.comp}&kg=${params.kg}`);
      setGroups(groups.data);
      setAthletes(res.data);
      if(groups.data.length <= 1){
        setData({...data, groups:[{name:'A'}]});
      } else if(groups.data.length <= 2){
        setData({...data, groups:[{name:'A'}, {name:'B'}] });
      } else if(groups.data.length <= 4){
        setData({...data, groups:[{name:'A'}, {name:'B'}, {name:'C'}, {name:'D'}] });
      }
      setLoad(false);
    }

    const callback =() => {
      Get();
    }

    const el = {
      athletes: athletes.length,
      comp_id: params.comp,
      kg: params.kg,
      comp_id: params.comp
    }

  return (
    <div className='font-Roboto mx-10 my-4'>
      {
        load?
        <Loading/>
        :
        <div>
          {groups.length >= 1?
            <div>
              {
                groups[0]?.group_number === 8 &&
                <Onoolt8 athletes={athletes} data={data} />
              }
              {
                groups[0]?.group_number === 16 &&
                <Onoolt16 athletes={athletes} data={data} />
              }
              {
                groups[0]?.group_number === 4 &&
                <Onoolt4 athletes={athletes} data={data} />
              }
              {
                groups[0]?.group_number === 32 &&
                <Onoolt32 athletes={athletes} data={data} />
              }
            </div>
           :
            <div>
              <CreateModalComp datas={el} callback={callback}/>
            </div>
          }
        </div>
      }
    </div>
  )
}

export default CompOnooltDetail