"use client"
import { title } from "process";
import { IoClose } from "react-icons/io5";
import Button from "../buttons/Button";

type modalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  btnLabel: string;
  title: string;
  bodyElement?: React.ReactElement;
  footerElement?: React.ReactElement;
};

const Modal: React.FC<modalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  btnLabel,
  title,
  bodyElement,
  footerElement

}) => {

  const closeFunc =()=>{
    onClose()
  }
  
  {/*colback func =()=> handlecahde */}

  //arow func
  const submitFunc =()=>{
    onSubmit()
  }
  
  //isopen false ise bos don, isopen true gelirse modal gosterilecek false gelirse nul don
  if (!isOpen) {
    return null
  }

  return (
    <div className="bg-black bg-opacity-70 fixed flex items-center justify-center w-full h-full">
      <div className="bg-white rounded-lg w-1/2 p-5">
        
        <div className="flex justify-between items-center border-b pb-3 mb-3">
          <div className="text-xl">{title}</div>
          <div onClick={closeFunc}>
            <IoClose size={28} />
          </div>
        </div>

        {/*icerik ortada gosterilecek olan */}
        {bodyElement}

        <Button onSubmit={submitFunc} btnLabel={btnLabel} />
        
        {/*footer elementi */}
        {footerElement}
      </div>
    </div>
  );
};

export default Modal;
