import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Unauthorized from "@/components/error/unauthorized";

const AdminPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) return <Unauthorized />;

  return (
    <div className='m-auto text-center text-xl my-5'>
      <div>관리자 페이지</div>
    </div>
  );
};

export default AdminPage;
