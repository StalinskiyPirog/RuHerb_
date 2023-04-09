import { Dispatch, SetStateAction } from "react"

interface SignUpFormProps{
    setIsLogin: Dispatch<SetStateAction<boolean>>
}
  
 export function SignUpForm({setIsLogin}:SignUpFormProps){
     return(
        <div className="bg-orange-400  rounded-bl-3xl rounded-tr-3xl border border-orange-600 shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-5000 ease-out">
              <h2 className='p-3 text-3xl font-bold '>RuHerb</h2>
             <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
             <h3 className='text-xl font-semibold  pt-2'>Создать аккаунт</h3>
             
             {/* Inputs */}
             <div className='flex flex-col items-center justify-center mt-2'>
             <input type="name" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='ФИО'></input>
             <input type="tel" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Телефон'></input>
              <input type='email' className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Почта'></input>
              <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Пароль'></input>
              <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Пароль'></input>
              <button className='rounded-2xl m-4 text-blue-400 bg-white w-3/5 px-4 py-2 shadow-md hover:text-white hover:bg-blue-400 transition duration-200 ease-in'>
                Ввод
              </button>
             </div>
             <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
             <p className=' mt-4 text-sm'>Уже есть аккаунт?</p>
             <p className=' mb-4 text-sm font-medium cursor-pointer' onClick={() => setIsLogin(true)}>Войти</p>
          </div>
     )
  }