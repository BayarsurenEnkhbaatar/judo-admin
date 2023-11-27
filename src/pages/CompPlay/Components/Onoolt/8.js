import React, { useState } from 'react'
import Round1Card from '../Rounds/round1card';
import Round2Card from '../Rounds/round2card';
import Round8Round3Card from '../Rounds/Rounds8/round3card';

const Onoolt8 = ({data, group, callback}) => {
    const round1 = data.filter(item => item.group === group).filter(item => item.round === 1).sort((a, b) => a.match_number - b.match_number);
    const round2 = data.filter(item => item.group === group).filter(item => item.round === 2).sort((a, b) => a.match_number - b.match_number);
    const round3 = data.filter(item => item.group === group).filter(item => item.round === 3).sort((a, b) => a.match_number - b.match_number);
    const round4 = data.filter(item => item.group === group).filter(item => item.round === 4).sort((a, b) => a.match_number - b.match_number);

    const callbackHandle = () => {
        callback();
    }
    
  return (
    <div className='mt-4'>
        <h1 className='font-bold text-sm'>{group} Хэсэг</h1>
        <div className='flex overflow-auto'>
            <div>
                {
                    round1.map((data, index) => {
                        return(
                            <Round1Card callback={callbackHandle} data={data} key={index}/>
                        )
                    })
                }
            </div>

            <div className={'flex justify-between flex-col my-8'}>
                {
                    round2.map((data, index) => {
                        return(
                            <Round2Card callback={callbackHandle} data={data} key={index}/>
                        )
                    })
                }
            </div>
            
            <div className={"flex justify-between flex-col my-14"}>
                {
                    round3.map((data, index) => {
                        return(
                            <Round8Round3Card callback={callbackHandle} data={data} key={index}/>
                        )
                    })
                }
            </div>
            <div className="flex items-center">
                {
                round4[0]?.athlete1?.id === 111 ?
                <h1 className='border-b w-40'></h1>
                :
                <h1>{round4[0]?.athlete1?.username}</h1>
                }
            </div>

        </div>
    </div>
  )
}

export default Onoolt8