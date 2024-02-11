"use client";

import ButtonText from "@/constants/text/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { PropsWithChildren } from "react";

export const AuthButtons = () => {
  const { data: session, status } = useSession();

  if (!session?.user)
    return (
      <ButtonWrapper>
        <button onClick={() => signIn()}>{ButtonText.login}</button>
      </ButtonWrapper>
    );

  return (
    <ButtonWrapper>
      <button onClick={() => signOut()}>{ButtonText.logout}</button>
    </ButtonWrapper>
  );
};

const ButtonWrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <li className='p-2 cursor-pointer text-slate-300 hover:text-black cursor-pointer'>
    {children}
  </li>
);
