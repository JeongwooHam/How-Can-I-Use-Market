import Link from "next/link";

type NavItemProps = {
  mobile: boolean;
};

const NavItem: React.FC<NavItemProps> = ({ mobile }) => {
  return (
    <ul className='flex w-full justify-center gap-3 font-bold'>
      <li className='p-2 cursor-pointer text-slate-300 hover:text-black cursor-pointer'>
        <Link href='/admin'>ADMIN</Link>
      </li>
      <li className='p-2 cursor-pointer text-slate-300 hover:text-black cursor-pointer'>
        <Link href='/user'>USER</Link>
      </li>
      {/* <li className='p-2 cursor-pointer text-slate-300 hover:text-black cursor-pointer'>
        <Link href='/admin'>로그인</Link>
      </li>
      <li className='p-2 cursor-pointer text-slate-300 hover:text-black cursor-pointer'>
        <Link href='/admin'>로그아웃</Link>
      </li> */}
    </ul>
  );
};

export default NavItem;
