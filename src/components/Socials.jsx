import React from 'react'

import {social} from  '../data'

const Socials = () => {
  return (
    <div>
        <nav>
          <ul className='flex space-x-6'>
            {
              social.map((item , index)=>{
                return <li className='flex justify-center items-center text-accent'
                key={index}>
                  <a className='text-base  hover:text-slate-400 transition-all duration-500' href={item.href}>
                    {item.icon}
                  </a>
                </li>
              })
            }

          </ul>
        </nav>
    </div>
  )
}

export default Socials