import React, { useState } from 'react'
import Round1CardAthlets64 from '../Rounds/Athletes64/round1card';
import Round2CardAthlets64 from '../Rounds/Athletes64/round2card';
import Round3CardAthlets64 from '../Rounds/Athletes64/round3card';
import Round4CardAthlets64 from '../Rounds/Athletes64/round4card';

const Onoolt16 = ({data, group, callback}) => {
    const round1 = data.filter(item => item.group === group).filter(item => item.round === 1).sort((a, b) => a.match_number - b.match_number);
    const round2 = data.filter(item => item.group === group).filter(item => item.round === 2).sort((a, b) => a.match_number - b.match_number);
    const round3 = data.filter(item => item.group === group).filter(item => item.round === 3).sort((a, b) => a.match_number - b.match_number);
    const round4 = data.filter(item => item.group === group).filter(item => item.round === 4).sort((a, b) => a.match_number - b.match_number);
    const round5 = data.filter(item => item.group === group).filter(item => item.round === 5).sort((a, b) => a.match_number - b.match_number);

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
                            <Round1CardAthlets64 callback={callbackHandle} data={data} key={index}/>
                        )
                    })
                }
            </div>

            <div className={'flex justify-between flex-col my-8'}>
                {
                    round2.map((data, index) => {
                        return(
                            <Round2CardAthlets64 callback={callbackHandle} data={data} key={index}/>
                        )
                    })
                }
            </div>

            <div className={'flex justify-between flex-col my-24'}>
                {
                    round3.map((data, index) => {
                        return(
                            <Round3CardAthlets64 callback={callbackHandle} data={data} key={index}/>
                        )
                    })
                }
            </div>

            <div className={"flex justify-between flex-col my-32"}>
                {
                    round4.map((data, index) => {
                        return(
                            <Round4CardAthlets64 callback={callbackHandle} data={data} key={index}/>
                        )
                    })
                }
            </div>

            <div className="flex items-center">
                {
                round5[0]?.athlete1?.id === 111 ?
                <h1 className='border-b w-40'></h1>
                :
                <h1>{round5[0]?.athlete1?.username}</h1>
                }
            </div>

        </div>
    </div>
  )
}

export default Onoolt16