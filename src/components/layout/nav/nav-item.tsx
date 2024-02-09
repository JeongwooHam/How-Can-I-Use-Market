"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

type NavItemProps = {
  mobile: boolean;
};

const NavItem: React.FC<NavItemProps> = ({ mobile }) => {
  const { data: session, status } = useSession();
  console.log("session", session, status);
  return (
    <ul
      className='flex w-full justify-center gap-3 font-bold'
      style={{ flexDirection: mobile ? "column" : "row" }}
    >
      <li className='p-2 cursor-pointer text-slate-300 hover:text-black cursor-pointer'>
        <Link href='/admin'>ADMIN</Link>
      </li>
      <li className='p-2 cursor-pointer text-slate-300 hover:text-black cursor-pointer'>
        <Link href='/user'>USER</Link>
      </li>
      {!session?.user && (
        <li className='p-2 cursor-pointer text-slate-300 hover:text-black cursor-pointer'>
          <Link href='/admin' onClick={() => signIn()}>
            로그인
          </Link>
        </li>
      )}
      {session?.user && (
        <li className='p-2 cursor-pointer text-slate-300 hover:text-black cursor-pointer'>
          <Link href='/admin' onClick={() => signOut()}>
            로그아웃
          </Link>
        </li>
      )}
    </ul>
  );
};

export default NavItem;
