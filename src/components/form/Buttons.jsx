import React from 'react'
import { Loader } from 'lucide-react';


function Buttons({isSubmitting, label}) {
  return (
    <div>
      <button disabled={isSubmitting}
      className="bg-pink-700 text-white p-2 rounded-md hover:cursor-pointer hover:bg-pink-600">
              {isSubmitting 
              ? <div className='flex gap-2'>
              <Loader className='animate-spin' />
              <p>Loading</p>
              </div> 
              : label
              }
            </button>
    </div>
  )
}

export default Buttons