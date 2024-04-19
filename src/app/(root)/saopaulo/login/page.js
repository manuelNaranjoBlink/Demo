import { Suspense } from 'react';

import './saopaulo.css';
import Image from 'next/image';
import { login } from '@/lib/login';
import InputLabel from '../../ui/InputLabel';

export default async function MainPage() {

  return (
      <Suspense fallback={<div>Loading...</div>}>
     
        <div className="login__container">
          <form  className="login__form" 
            action={async (formData) => {
                'use server'
                await login(formData.get("name"), formData.get("password"));
            }}>
                <div className="w-50 logo">
                  <div className='w-h-100 p-absolute'>
                    <Image
                        alt='Sao Paulo'
                        src={'/login/img/saoPaulo.png'}   
                          width={300}
                         height={600}
                        quality={100}
                        style={{objectFit: "contain", width: "100%", height: "auto"}}
                       
                      />
                  </div>
                </div>
                <div className='w-50 container-form'>
                  <div>
                    <div className='img-logo'>
                    <Image
                          alt='Sao Paulo'
                          src={'/login/img/logoColor.png'} 
                          width={300}
                          height={100}
                          quality={100}
                          style={{objectFit: "contain", width: "auto", height: "100%"}}
                        
                        />
                    </div>
                    <div className='container-input'>
                      <div className="div-input">
                        <InputLabel typeInput="text" labelInput="Correo electrónico" /> 
                        </div>    
                        <div className="div-input">
                        <InputLabel typeInput="password" labelInput="Contraseña" />   
                        <div className="div-input padding-top-50">
                        <button className='button-login'>Iniciar Sesion</button>                  
                      </div>
                    </div>
                    </div>
                  </div>
              </div>
          </form>
          </div>
       
      </Suspense>
  )
}
