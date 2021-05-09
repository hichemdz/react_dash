import React, { useState, createContext, useContext } from 'react'
import { Link } from 'react-router-dom';

const allItemsToggoles = createContext();

const list = [
    {
        icone: 'tachometer-alt',
        text: 'Dashboard',
        path:'/',
        subList: []
    },
    {
        icone: 'users-cog',
        text: 'Mumbers',
        path:'',
        subList: [
            {
                icone: 'users',
                text: 'ALL Users ',
                path:'/users',
            },
            {
                icone: 'user-plus',
                text: 'crate',
                path:'',
            },


        ]
    },
    {
        icone: 'tasks',
        text: 'Projects',
        path:'',
        subList: [
            {
                icone: 'user',
                text: 'All Projects',
                path:'',
            },
            {
                icone: 'folder-plus',
                text: 'Create',
                path:'',
            },



        ]
    },

    {
        icone: 'suitcase-rolling',
        text: 'Rols',
        subList: [
            {
                text: 'All Projects',
                icone: 'tools',
            },
            {
                text: 'Create',
                icone: 'wrench',
            },



        ]
    }
];


const Li = ({ count, data, name, icone, hidden, path ,index , vertical}) => {
const {subItem,show,toggleItmes, setToggleItems} = useContext(allItemsToggoles);
 const set = (index) => {
     
     if(index == toggleItmes  ) setToggleItems({show:!show,toggleItmes:index})
     else setToggleItems({show:true,toggleItmes:index})
    
 } 

 const setKey = (i,count) =>{
     console.log(count+i);
     return setToggleItems({show,toggleItmes,subItem:count+i})
 }


    if (data && data.length) {
        return (
            <li className='relative'>
                <div className={(vertical?" justify-between ":" px-4")+' py-2 w-full flex  items-center' + (index == toggleItmes?" text-red-300 ":"") } >
                    <div className='space-x-2 mr-2' onClick={()=>set(index)}>
                        {
                            icone ? <i className={`fas fa-${icone} font-bold`} ></i> : ''
                        }
                         <span className='hidden md:inline-block'>{name}</span>
                    </div>

                    <i className={`hidden md:inline-block fas fa-sm fa-` + (hidden ? "chevron-left" : 'chevron-down')} ></i>

                </div>

                <div className={'bg-gray-200 px-2 py-2 space-y-2 absolute z-50  left-11  ' +(vertical? 'md:static px-4 ' : ' absolute z-50 top-14 left-0 ' ) + (show && index === toggleItmes?" block ":" hidden " )}  style={{ minWidth: '10rem' }}>
                    

                    {
                        data.map((item, key) => {
                            return (
                            <Link onClick={()=>setKey(count,key)} key={key + 1000 } to={item.path} className={'space-x-2 block' + (parseInt(count+key) === subItem? " text-red-300 ":"")}>
                                {
                                    icone ? <i className={`fas fa-${item.icone} font-bold`} ></i> : ''
                                }
                                <span className=''>{item.text}</span>
                            </Link>)
                        })
                    }

                </div>
            </li>
        )
    }
    return (
        <Link onClick={set} to={path} className={'space-x-2' +  (index == toggleItmes? " text-red-300 ":"")}>
            {
                icone ? <i className={`fas fa-${icone} font-bold`} ></i> : ''
            }
            <span className='hidden md:inline-block'>{name}</span>
        </Link>
    )
}

const Ul = ({ list, vertical = true, abs = false }) => {
    const [{subItem,show,toggleItmes}, setToggleItems] = useState({subItem:null, show:false,toggleItmes:-1});
    console.log('items open',toggleItmes,show);
    return (
        <allItemsToggoles.Provider value={{subItem,show,toggleItmes, setToggleItems}}>

            <ul className={"flex " + (vertical ? "justify-center flex-col space-y-2 " : "items-center ")}>
                {
                    list.map((item, key) => {
                        return <Li count={list.length} path={item.path} vertical={vertical} index={key} key={key +1} name={item.text} icone={item.icone} data={item.subList} />
                    })
                }
            </ul>
        </allItemsToggoles.Provider>
    )
}

export default function Menu({vertical,data=list,color='gray-500'}) {
    return (
        <nav className={"h-full px-5 text-left w-full " + color}>
            <Ul list={list} vertical={vertical} />
           
            
        </nav>
    )
}
