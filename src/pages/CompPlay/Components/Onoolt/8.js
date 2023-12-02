import React, { useState } from 'react'
import Round1CardAthlets16 from '../Rounds/Athletes16/round1card';
import Round2CardAthlets16 from '../Rounds/Athletes16/round2card';
import Round3CardAthlets16 from '../Rounds/Athletes16/round3card';

import Round1CardAthlets8 from '../Rounds/Athletes8/round1card';
import Round2CardAthlets8 from '../Rounds/Athletes8/round2card';
import Round3CardAthlets8 from '../Rounds/Athletes8/round3card';

import Round1CardAthlets32 from '../Rounds/Athletes32/round1card';
import Round2CardAthlets32 from '../Rounds/Athletes32/round2card';
import Round3CardAthlets32 from '../Rounds/Athletes32/round3card';

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
        {
            data.length >= 4 && data.length <=8 &&
            <div className='flex overflow-auto'>
                <div>
                    {
                        round1.map((data, index) => {
                            return(
                                <Round1CardAthlets8 callback={callbackHandle} data={data} key={index}/>
                            )
                        })
                    }
                </div>

                <div className={'flex justify-between flex-col my-8'}>
                    {
                        round2.map((data, index) => {
                            return(
                                <Round2CardAthlets8 callback={callbackHandle} data={data} key={index}/>
                            )
                        })
                    }
                </div>

                <div className={"flex justify-between flex-col my-14"}>
                    {
                        round3.map((data, index) => {
                            return(
                                <Round3CardAthlets8 callback={callbackHandle} data={data} key={index}/>
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
        }
        {
            data.length > 8 && data.length <= 16 &&
            <div className='flex overflow-auto'>
                <div>
                    {
                        round1.map((data, index) => {
                            return(
                                <Round1CardAthlets16 callback={callbackHandle} data={data} key={index}/>
                            )
                        })
                    }
                </div>

                <div className={'flex justify-between flex-col my-8'}>
                    {
                        round2.map((data, index) => {
                            return(
                                <Round2CardAthlets16 callback={callbackHandle} data={data} key={index}/>
                            )
                        })
                    }
                </div>

                <div className={"flex justify-between flex-col my-14"}>
                    {
                        round3.map((data, index) => {
                            return(
                                <Round3CardAthlets16 callback={callbackHandle} data={data} key={index}/>
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
        }
        {
            data.length > 16 && data.length <= 32 &&
            <div className='flex overflow-auto'>
                <div>
                    {
                        round1.map((data, index) => {
                            return(
                                <Round1CardAthlets32 callback={callbackHandle} data={data} key={index}/>
                            )
                        })
                    }
                </div>

                <div className={'flex justify-between flex-col my-8'}>
                    {
                        round2.map((data, index) => {
                            return(
                                <Round2CardAthlets32 callback={callbackHandle} data={data} key={index}/>
                            )
                        })
                    }
                </div>

                <div className={"flex justify-between flex-col my-14"}>
                    {
                        round3.map((data, index) => {
                            return(
                                <Round3CardAthlets32 callback={callbackHandle} data={data} key={index}/>
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
        }


        {/* {
            data.length > 8 && data.length <=16 &&
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
        } */}
    </div>
  )
}

export default Onoolt8