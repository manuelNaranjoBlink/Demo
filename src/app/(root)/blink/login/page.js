import { Suspense } from 'react';
import Image from 'next/image';
import InputLabel from '@/app/(root)/ui/InputLabel';
import { login } from '@/lib/login';
import './blink.css';

export default async function MainPage() {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className='h-100'>
                <div >
                    <Image
                        alt='Blink'
                        src={'/img/fondo.jpg'}
                        layout="fill"
                        objectFit="cover"
                        quality={80}
                        className="img-fondo"
                    />
                </div>
                <div className='container-form h-100'>
                    <div className='center-item max-width-40'>
                        <form
                            action={async (formData) => {
                                'use server'
                                await login(formData.get("name"), formData.get("password"));
                            }}
                        >
                            <div >
                                <h1>Iniciar sesión en BlinkLearning</h1>
                                <div className='div-input'>
                                    <InputLabel typeInput="text" labelInput="Correo electrónico" />
                                </div>
                                <div className='div-input'>
                                    <InputLabel typeInput="password" labelInput="Contraseña" />
                                </div>
                                <div className='padding-top-20'>
                                    <h5 className='color-white font-weight-300'>Olvidé mi contraseña</h5>
                                </div>
                            </div>
                            <div className='padding-top-50'>
                                <button type='submit' className='button-login'>Iniciar Sesion</button>
                            </div>
                        </form>
                    </div>
                    <div className='center-item max-width-40'>

                        <div>
                            <h1>Aún no soy usuario.</h1>
                            <h3 >Crea tu cuenta y descubre las ventajas de BlinkLearning</h3>
                            <div>
                                <button className='button-login'>Crear Cuenta</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </Suspense>
    )
}
