import Unauthorized from "@/components/error/unauthorized";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const UserPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) return <Unauthorized />;
  return (
    <div className='m-auto text-center text-xl my-5'>
      <div>일반 사용자 페이지</div>
    </div>
  );
};

export default UserPage;
