"use client";
import {
  FieldValue,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import Input from "../inputs/Input";
import Modal from "./Modal";
import Button from "../buttons/Button";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { registerModalFun } from "@/app/redux/modalSlice";
import { useAppSelector } from "@/app/redux/hooks";
import axios from "axios";
import { toast } from "react-toastify";

const RegisterModal = () => {
  const dispacth = useDispatch();
  const { registermodal } = useAppSelector((state) => state.modal);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    //varsayılan degerleri
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);

    axios.post("api", data)
      .then(() => {
        //kayıt islemi basarılı ise modal'ı kapat
        dispacth(registerModalFun());
        toast.success("kayıt islemi basarılı");
      })
      .catch((err: any) => {        
        toast.error("kayit isleminde bir hata olsutu");
      });
  };

  //modal icerigi orta kısmı  degisken icerisinde tanımladık
  const bodyElement = (
    <div>
      <Input
        id={"name"}
        type={"text"}
        placeholder={"name"}
        required
        register={register}
        errors={errors}
      />

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
  );

  //modal'in yani popup alt kısmı
  const footerElement = (
    <Button
      onSubmit={() => {}}
      btnLabel="Google ile giriş"
      outline
      icon={FcGoogle}
    />
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/*modal yani popup kısmı tamamı  */}
      <Modal
        //registermodal'da ki degeri gonderiyoruz ekranda gosterilmesi icin true, false
        isOpen={registermodal}
        onClose={() => {
          dispacth(registerModalFun());
        }}
        onSubmit={() => {}}
        title="Register"
        btnLabel="Register"
        //body elemnt icerik
        bodyElement={bodyElement}
        footerElement={footerElement}
      />
    </form>
  );
};

export default RegisterModal;
