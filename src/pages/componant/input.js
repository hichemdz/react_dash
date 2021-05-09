import React from 'react'

export default function Input({hundelInput,name,field,message,type,placeholder}) {
    return (
        <div className=' mb-5'>
            <input onChange={hundelInput}
              name={field} 
              type={type} 
              placeholder={placeholder}
              className={ (name !== ''   ? 'bg-red-100 ' : ' bg-blue-100 ') + "px-2 py-2 rounded-lg w-full" } />
            {name ? name.map((i,k)=><p key={k} className='px-3 text-xs py-1'>{i}</p>) : ''}
          </div>
    )
}
