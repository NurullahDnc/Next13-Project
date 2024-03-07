import prisma from '@/app/libs/Prismadb'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'

// Kullanıcının oturumunu getiren fonksiyon
export async function getSession(){
    return await getServerSession(authOptions)
}

// Oturum açıkken mevcut kullanıcıyı getir
export default async function getCurrentUser(){
    
    // getSession fonksiyonu ile oturumu alır
    const Session = await getSession()
    
  // Eğer email bilgisi yoksa veya kullanıcı null ise null döndür
  if(!Session?.user?.email){
        return null
    }

    // Prisma uzerinden kulanıcıyı bul
    const user = await prisma.user.findUnique({
        where:{
            email: Session.user.email
        }
    })
    
    // Eğer kullanıcı bulunamazsa null döndür
    if (!user) {
        return null
    }

    return user

}