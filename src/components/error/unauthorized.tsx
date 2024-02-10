import Link from "next/link";

const Unauthorized = () => {
  return (
    <div className='flex flex-col justify-center text-center gap-4 mt-[50px]'>
      <div className='text-[50px] text-[red] font-bold'>401-Unauthorized</div>
      <div className='text-lg text-slate-400'>
        You are not authorized to access this page.
      </div>
      <div className='mt-5'>
        <Link
          href='/'
          className='border-[1px] border-[black] hover:bg-black hover:text-white rounded p-3'
        >
          HOME
        </Link>
      </div>
    </div>
  );
};

export default Unauthorized;
