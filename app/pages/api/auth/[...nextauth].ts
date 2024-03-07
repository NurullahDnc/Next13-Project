import prisma from "@/app/libs/Prismadb";
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {

    // PrismaAdapter'ı kullanarak Prisma ile next-auth arasında bağlantı sağlar
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    // Google ile kimlik doğrulama sağlayıcısı
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

     CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },

       async authorize(credentials) {

        // Eğer email veya şifre boş ise hata don
        if (!credentials?.email || !credentials?.password) {
          throw new Error("lütfen tüm alanları doldurunuz ");
        }

        // Kullanıcıyı Prisma üzerinde email adresine göre bul
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        // Kullanıcı bulunamazsa veya hashedPassword yoksa hata fırlat
        if (!user || !user.hashedPassword) {
          throw new Error("kulanıcı bulunamadı");
        }

        // Girilen şifreyi, kullanıcının hashedPassword'ı ile karşılaştır
        const comparePassword = await bcrypt.compare( credentials.password, user.hashedPassword);

        // Şifre uyuşmazsa hata fırlat
        if (!comparePassword) {
          throw new Error("sifreniz hatalı");
        }

        // Kimlik doğrulama başarılıysa kullanıcı nesnesini döndür
        return user;
      },
    }),
  ],

  // Oturum (session) ve sayfa yönlendirmeleri ile ilgili ek ayarlar
  pages: {
    signIn: "/", // Giriş sayfasının yolu
    error: "/your-custom-error-page", // Doğru sayfa yolunu belirtin

  },
  session: {
    strategy: "jwt", // Oturum stratejisi
  },

  // Geliştirme ortamında debug modunu etkinleştirir
  debug: process.env.NODE_ENV === "development",

  // NextAuth'ın kullanacağı gizli anahtar
  secret: process.env.NEXTAUTH_URL,
};

//as string => tip belirleme
