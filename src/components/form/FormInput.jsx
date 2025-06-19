import React from 'react'

function FormInput({name, register}) {
  return (
    <div>  

      <input className='border w-full rounded-md border-gray-400 
       p-1 px-4'
            placeholder={name}
            {...register(name)}
            />

     </div>
  )
}

export default FormInput