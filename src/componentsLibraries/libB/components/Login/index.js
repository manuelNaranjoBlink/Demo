import { Suspense } from 'react';
import Image from 'next/image';
import { login } from '@/lib/login';
import InputLabel from '../InputLabel';

export default async function LoginPage() {

  return (
    <Suspense fallback={<div>Loading...</div>}>

      <div className="login__container">
        <form className="login__form"
          action={async (formData) => {
            'use server'
            await login(formData.get("name"), formData.get("password"));
          }}>
          <div className="w-50 logo">
            <div className='w-h-100 p-absolute'>
              <Image
                alt='Sao Paulo'
                src={'/_next/image?url=%2Fimg%2FsaoPaulo.png&w=256&q=75'}
                width={300}
                height={600}
                quality={100}
                style={{ objectFit: "contain", width: "100%", height: "auto" }}

              />
            </div>
          </div>
          <div className='w-50 container-form'>
            <div>
              <div className='img-logo'>
                <Image
                  alt='Sao Paulo'
                  src={'/_next/image?url=%2Fimg%2FlogoColor.png&w=256&q=75'}
                  width={300}
                  height={100}
                  quality={100}
                  style={{ objectFit: "contain", width: "auto", height: "100%" }}

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
