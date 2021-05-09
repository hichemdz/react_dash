import React, { useContext, useState, createContext } from 'react';
import { Link } from 'react-router-dom';

export const menuList = createContext();
const Li = ({ icone, text, data , sub }) => {
    const [hidden, setHidden] = useState(true)
    const toggel = () => setHidden(!hidden)
    if (data && data.length) {
        return (
            <li className='w-full relative'>
                <div className=' '>
                    <li className={(hidden?'':'bg-gray-200') + ' px-4 py-2 w-full   flex justify-between items-center'} onClick={toggel} >
                        <div className='flex space-x-2 items-center'>

                            {
                                icone ? <i className={`fas fa-${icone} font-bold`} ></i> : ''
                            }
                            <span className='text-md hidden md:inline-block '>{text}</span>

                        </div>
                        {/* chevron-right */}
                        
                        <i className={`hidden md:inline-block fas fa-sm fa-` + (hidden?"chevron-left":'chevron-down')} ></i> 
                        

                    </li>
                </div>

            

                    <Ul data={data} cl={(hidden ? 'h-0 opacity-0 ' : 'opacity-100 py-1 h-auto !important') + ' bg-gray-300 mx-6 z-50 absolute left-10 top-10'} sub={true}/>
              

            </li>
        )
    }
    return (
        <li >

            <Link className='space-x-2 flex items-center px-4 py-1 hover:text-red-400'>
                {
                    icone ? <i className={` fas fa-${icone}`} ></i> : ''
                }

                <span className={'text-xs '+(( sub  || (data && !data.length ) )? 'hidden md:block':'')  }>{text}</span>
            </Link>
        </li>
    )
}


const Ul = ({ data, cl ,sub=true }) => {

    return (


        <ul style={{ transition: "height 1s , opacity 1s" }} className={`   transition space-y-2 text-lg md:text-sm font-semiblod ${cl || ''}`}>
            {
                data.map((li, k) => <Li key={k} icone={li.icone} text={li.text} data={li.subList} sub={sub}/>
                )
            }
        </ul>

    )

}

export { Ul, Li };