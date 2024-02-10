import prisma from "@/app/libs/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth/next";
// CredentialsProvider: 사용자명, 비밀번호와 같은 인증을 제공하는 NextAuth의 Provider
import CredentialsProvider from "next-auth/providers/credentials";

// 사용자 인증 handler, Next.js API 라우트에서 사용된다.
const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  // 인증 제공자 설정: CredentialsProvider 외에도 google, github 등 간편 로그인 Provider도 설정 가능
  providers: [
    CredentialsProvider({
      // 로그인 폼에 보여줄 이름
      name: "Credentials",
      // 로그인 페이지에서 폼을 생성하기 위해 사용한다.
      // credentials 객체에 어떤 필드가 제출되어야 할 지 지정할 수 있다.
      // <input> 태그에 전달할 HTML 속성을 추가할 수 있다.
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "이메일 주소를 입력해주세요.",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "비밀번호를 입력해주세요.",
        },
      },
      // 사용자를 인증하기 위한 콜백 함수
      // 사용자가 제출한 자격 증명을 받아 사용자를 찾고 인증을 수행한다.
      // DB나 외부 서비스를 사용하여 사용자를 찾는 로직이 들어간다.
      async authorize(credentials, req) {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/signin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const user = await res.json();

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
