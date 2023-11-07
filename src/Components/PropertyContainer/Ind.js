import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { PiBathtubLight, PiBedLight, PiBuildings } from 'react-icons/pi'
import { Link } from 'react-router-dom'


const Ind = ({ item }) => {
    return (
        <div className='z-10'>
            <Link to={`/property/ ${item.id}`}>
                <div className='pt-8'>
                    <div>
                        <div className='hover:shadow-gray-400 bg-white md:hover:scale-105 md:duration-500 md:cursor-pointer box-border min-h-[360px] max-w-[350px] rounded-xl lg:h-[350px] border-[1px] border-[#0000001F] shadow-lg'>
                            <div >
                                <img className='w-[100%] h-[242px] rounded-xl object-cover' src={item.img} alt="" />

                                <h1 style={{ paddingInline: '6%' }} className='font-[open sans] font-semibold text-[18px] px-4 lg:px-8 text-[#013698]'>{item.name}</h1>
                            </div>
                            <div style={{ paddingInline: '5%' }} className='flex flex-row px-4 lg:px-7 pt-1'>
                                <span><CiLocationOn size={22} /></span>
                                <h1 className=' text-[#00000099] text-sm'>{item.loation}</h1>
                            </div>

                            <div style={{ paddingInline: '6%' }} className=' px-4 lg:px-0 pt-3 flex flex-row justify-between'>
                                <div className='border-box border-[1px] flex items-center gap-2 justify-center rounded-md border-[#0000001F]  w-16 h-8'>
                                    <span className=''><PiBedLight size={20} className='' /></span>
                                    <h1 className='text-lg'>{item.bed}</h1>
                                </div>
                                <div className='border-box border-[1px] flex items-center gap-2 justify-center rounded-md border-[#0000001F] w-16 h-8'>
                                    <span className=''><PiBathtubLight size={20} className='' /></span>
                                    <h1 className='text-lg'>{item.Shower}</h1>
                                </div>
                                <div className='border-box border-[1px] flex items-center gap-2 justify-center rounded-md border-[#0000001F] w-16 h-8'>
                                    <span className=''><PiBuildings
                                        size={20} className='' /></span>
                                    <h1 className='text-lg'>{item.floor}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default Ind
