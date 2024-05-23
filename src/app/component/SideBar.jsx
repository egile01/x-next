
import Link from 'next/link';
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";

const SideBar = () => {
    return (
        <div className='flex flex-col gap-4'>
            <Link href="/">
                <FaSquareXTwitter className='w-16 h-16 cursor-pointer p-3
                 hover:bg-gray-100 rounded-full transition-all duration-200'/>
            </Link>
            <Link href="/" className='flex items-center p-3 hover:bg-gray-100 rounded-full
            transition-all duration-200 gap-2 w-fit'>
            <HiHome  className='w-7 h-7 '/>
            <span className='font-bond hidden xl:inline'>Home</span>
            </Link>
            <button className=' bg-blue-400 text-white rounded-full
            hover:brightness-95 trasition-all duration-200 w-48 h-9
            shadow-md hidden xl:inline font-semibold'>
                Sign In
            </button>
        </div>
    );
};

export default SideBar;
