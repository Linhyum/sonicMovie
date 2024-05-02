import React from 'react'
const social = [
   // eslint-disable-next-line react/jsx-key
   <svg viewBox='0 0 24 24' width='24' height='24' className='fill-white group-hover:fill-primary transition-all'>
      <path fill='none' d='M0 0h24v24H0z'></path>
      <path d='M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z'></path>
   </svg>,
   // eslint-disable-next-line react/jsx-key
   <svg width={24} height={24} viewBox='0 0 24 24' className='fill-white group-hover:fill-primary transition-all'>
      <path
         fillRule='evenodd'
         clipRule='evenodd'
         d='M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z'
      />
   </svg>,
   // eslint-disable-next-line react/jsx-key
   <svg width={24} height={24} viewBox='0 0 24 24' className='fill-white group-hover:fill-primary transition-all'>
      <path d='M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z' />
      <circle cx='11.994' cy='11.979' r='3.003' />
   </svg>
]
export default function Footer() {
   return (
      <footer
         className='bg-no-repeat bg-cover bg-center h-[300px] md:h-[150px] relative text-white'
         style={{
            backgroundImage: 'url("https://movies-ax.netlify.app/static/media/background.4791eb57.jpg")'
         }}
      >
         <div className='absolute inset-0 bg-black/70 z-10'></div>
         <div className='absolute inset-x-0 inset-y-5 z-20 container grid gap-5 md:gap-0 grid-cols-2 md:grid-cols-4 justify-items-center'>
            <div className='flex flex-col items-center'>
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img
                  src='https://online-fonts.com/sites/default/files/2024-02/Sonic%20the%20Hedgehog%202%20%28film%29%20logo%20EN.png'
                  alt=''
                  className='h-12'
               />
               <div className='flex items-center gap-x-4 mt-4'>
                  {social.map((item, index) => (
                     <button
                        key={index}
                        className='flex items-center justify-center bg-[#262626] w-10 h-10 rounded-full group'
                     >
                        {item}
                     </button>
                  ))}
               </div>
            </div>
            <Info title='About' info={['About Us', 'Features', 'New Movies']} />
            <Info title='Company' info={['Team', 'Plan', 'Become a member']} />
            <Info title='Support' info={['FAQs', 'Support Center', 'Contact']} />
         </div>
      </footer>
   )
}

function Info({ title, info }: { title: string; info: string[] }) {
   return (
      <div>
         <h2 className='font-bold text-2xl'>{title}</h2>
         <ul className='mt-2'>
            {info.map((item, index) => (
               <li key={index} className='hover:text-primary text-base font-medium transition-all cursor-pointer'>
                  {item}
               </li>
            ))}
         </ul>
      </div>
   )
}
