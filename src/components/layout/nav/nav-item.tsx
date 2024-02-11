import { AuthButtons } from "@/components/buttons/auth";
import Link from "next/link";

type NavItemProps = {
  mobile: boolean;
};

const NavItem: React.FC<NavItemProps> = ({ mobile }) => {
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
      <AuthButtons />
    </ul>
  );
};

export default NavItem;
