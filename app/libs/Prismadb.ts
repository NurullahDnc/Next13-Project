import { PrismaClient } from "@prisma/client"

//*her render edildiginde prisma olusturulmaması icin

declare global{
    //tip tanımlaması: tipi  prismaclient olacak veya undefined olacak
    var prisma : PrismaClient | undefined
}

//globalThis.prisma varsa bunu kulan, yoksa o zaman yeniden olustur prisma  
const client = globalThis.prisma || new PrismaClient();

//NODE_ENV'nin  "production" farklı oldugu yerlerde, globalThis.prisma icerisine client'i at
if(process.env.NODE_ENV != "production") globalThis.prisma = client;


export default client