import { Button, Input, Spinner } from '@nextui-org/react'
import React, {useState } from 'react'
import { Select } from 'antd';
import {PATCH} from '../../../utils/requests'
import { matches_uri } from '../../../utils/url';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Onoolt8 = ({athletes, data}) => {
    const [values, setValues] = useState([]);
    const params = useParams();
    const [load, setLoad] = useState(false);
    const router = useNavigate();

    const onChange = (value) => {
        console.log(value)
        setValues([...values, value]);
    };

    const renderOption = (a) => {
        return `${a.athlete.username} (${a.athlete.lastname})`;
    };

    const selectedValues = values.map((value) => value.value);

    const option = athletes.map((option) => ({
        value: option.athlete.id,
        label: renderOption(option),
        disabled: selectedValues.includes(option.athlete.id),
    }));

    const SubmitOnoolt = async() => {
        setLoad(true);
        const res = await PATCH({uri:matches_uri + `/draw/update?comp_id=${params.comp}`, data:values});

        if(res.status === 200){
            toast.success("Амжилттай нэмлээ");
            setLoad(false);
            router(-1)
        }
    }

  return(
    <div>
        <h1 className='font-bold text-3xl'>{params.kg} кг оноолтыг тааруулах</h1>
        {
            data.groups.map((it, index) => {
                return(
                    <div key={index}>
                        <h1 className='mt-4'>Хэсэг {it.name}</h1>
                        <div className='flex mt-2'>

                            <div className='flex flex-col justify-between'>
                                {
                                    [1,2,3,4,5,6,7,8].map((item, idx) => {
                                        const adjustedMatchNumber = Math.floor(idx / 2) + 1;
                                        return(
                                            <div className='my-1' key={idx}>
                                                <Select
                                                    showSearch
                                                    style={{
                                                    width: 200,
                                                    }}
                                                    placeholder="Search to Select"
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                                    filterSort={(optionA, optionB) =>
                                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                                    }
                                                    onChange={(e)=>onChange({match_number:adjustedMatchNumber, value:e, round:1, group:it.name, kg:data.kg, match_sequence:idx+1})}
                                                    options={option}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className='flex flex-col justify-between my-5 mx-1'>
                                {
                                    [1,2,3,4].map((item, idx) => {
                                        const adjustedMatchNumber = Math.floor(idx / 2) + 1;
                                        return(
                                            <div className='my-1' key={idx}>
                                                <Select
                                                    showSearch
                                                    style={{
                                                    width: 200,
                                                    }}
                                                    placeholder="Search to Select"
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                                    filterSort={(optionA, optionB) =>
                                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                                    }
                                                    onChange={(e)=>onChange({match_number:adjustedMatchNumber, value:e, round:2, group:it.name, kg:data.kg, match_sequence:idx+1})}
                                                    options={option}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className='flex flex-col justify-between my-14 mx-1'>
                                {
                                    [1,2].map((item, idx) => {
                                        const adjustedMatchNumber = Math.floor(idx / 2) + 1;
                                        return(
                                            <div className='my-1' key={idx}>
                                                <Select
                                                    showSearch
                                                    style={{
                                                    width: 200,
                                                    }}
                                                    placeholder="Search to Select"
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                                    filterSort={(optionA, optionB) =>
                                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                                    }
                                                    onChange={(e)=>onChange({match_number:adjustedMatchNumber, value:e, round:3, group:it.name, kg:data.kg, match_sequence:idx+1})}
                                                    options={option}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className='flex items-center'>
                                <div className='my-1'>
                                    <Select
                                        showSearch
                                        style={{
                                        width: 200,
                                        }}
                                        placeholder="Search to Select"
                                        optionFilterProp="children"
                                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                        filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                        }
                                        onChange={(e)=>onChange({match_number:1, value:e, round:4, group:it.name, kg:data.kg, match_sequence:1})}
                                        options={option}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                )
            })
        }
        
        {
            load?
            <Button className='bg-green-600 text-white flex justify-end mt-4'><Spinner/>Хадгалж байна...</Button>
            :
            <Button className='bg-green-600 text-white flex justify-end mt-4' onPress={SubmitOnoolt}>Оноолт хадгалах</Button>
        }

    </div>
  )
}

export default Onoolt8