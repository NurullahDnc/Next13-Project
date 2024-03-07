
import bcrypt from 'bcrypt';
import prisma from '@/app/libs/Prismadb';
import { NextResponse } from 'next/server';

//disardan request aldık, post istegi atıldıgında veri requst'de olacak
export async function POST(request: Request){

    //jsondan name,email ve password gelecek
   const {name, email, password} = await request.json();

   //bcrypt kutuphanesi ile password kripoluyoruz
    const hashedPassword = await bcrypt.hash(password, 12);

    //prisma altında user' create et, data donucez disarıdan gelen verileri alacak
    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword
        }
    })

    //json formatında user degiskenini gonderiyor
    return NextResponse.json(user);
}