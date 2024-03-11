"use client"
import { FieldValue, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../inputs/Input'
import Modal from './Modal'
import Button from '../buttons/Button';
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { loginModalFun, registerModalFun } from '@/app/redux/modalSlice';
import { useAppSelector } from '@/app/redux/hooks';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const LoginModal = () => {
    const dispacth = useDispatch();
    const {loginModal} = useAppSelector((state)=> state.modal)
    const router = useRouter();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FieldValues>({
        //varsayılan degerleri 
        defaultValues:{
             email: "",
            password: ""
        }
    });
    const onSubmit: SubmitHandler<FieldValues> = data => {  
        console.log(data);
        signIn('credentials', {
            ...data,
            redirect: false,
          })
          .then((callback) => {
            if(callback?.ok){
                dispacth(loginModalFun())
                router.refresh();
                toast.success('login işlemi basarılı!!!')
            }
            if(callback?.error){
                toast.error('login işlemi hatalı!!!')
            } 
        })

    };

    //modal icerigi orta kısmı,  degisken icerisinde tanımladık
    const bodyElement =(

        <div>
            <Input
                id={"email"}
                type={"text"}
                placeholder={"email"}
                required
                register={register}
                errors={errors}

            />

            <Input
                id={"password"}
                type={"text"}
                placeholder={"password"}
                required
                register={register}
                errors={errors}

            />

         </div>
    )
    
    //modal'in yani poppup alt kısmı 
    const footerElement = (
        <Button onSubmit={()=> {signIn("google")}} btnLabel='Google ile giriş' outline icon={FcGoogle} />
    )

  return (
    <form onSubmit={handleSubmit(onSubmit)}>


    {/*modal, popup kısmı props geciyoruz*/}
      <Modal
            isOpen={loginModal}
            onClose={()=> {dispacth(loginModalFun())}} 
            onSubmit={()=> {}} 
            title="Login" 
            btnLabel="Login" 
            //body elemnt icerik 
            bodyElement={bodyElement} 
            footerElement={footerElement}
          />
    </form>
  )
}

export default LoginModal
