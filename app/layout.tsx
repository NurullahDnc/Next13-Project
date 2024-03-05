import "../styles/globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./comporents/navbar/Navbar";
import MountedClient from "./comporents/MountedClient";
import Modal from "./comporents/modals/Modal";
import RegisterModal from "./comporents/modals/RegisterModal";
import ReduxProvider from "./providers/ReduxProvider";
import LoginModal from "./comporents/modals/LoginModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const newFont = Nunito({
  subsets: ["latin"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className={newFont.className} lang="tr">
      <head>
        <meta charSet="utf-8" />
      </head>

      <body>
        <ToastContainer position="top-right" />
        
        <ReduxProvider>
          <MountedClient>
            <LoginModal />
            <RegisterModal />
            <Navbar />
          </MountedClient>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;

/*
//* tip belirlemeleri
const Layout = ({children}: {Children:React.ReactNode}) => {
  
const CategoriesItem: React.FC<CategoriesItemProps> = ({
    name,
    icon,
    selected
})

//*genel
<div onClick={()=> router.push(`?Category = ${name}`)}  = ? oldugu zaman yonelndirme yapmıyor sadece url degisiyor

*/
