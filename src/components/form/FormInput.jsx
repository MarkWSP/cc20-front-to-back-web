import React from 'react'

function FormInput({name, register, errors, type="text"}) {
  return (
    <div>  

      <input className='border w-full rounded-md border-gray-400 
       p-1 px-4'
            placeholder={name}
            type={type}
            {...register(name)}
            />
        <p className='text-red-700 text-sm'>
          {errors[name] && <span>{errors[name].message}</span>}
          </p>
     </div>
  )
}

export default FormInput