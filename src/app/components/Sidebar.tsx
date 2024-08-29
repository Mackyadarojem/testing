import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-yellow-400 text-white flex flex-col">
      <div className="p-4">
        <h1 className="text-3xl text-center text-black font-bold">OUR Bank</h1>
      </div>
      <nav className="mt-10">
        <Link href="/main" className="pl-20 font-semibold text-black block py-2.5 px-4 rounded hover:bg-yellow-500">
          Home
        </Link>
        <Link href="/main/job" className="pl-20 font-semibold text-black block py-2.5 px-4 rounded hover:bg-yellow-500">
          Job
        </Link>
        <Link href="/main/job" className="pl-20 font-semibold text-black block py-2.5 px-4 rounded hover:bg-yellow-500">
          About
        </Link>
        <Link href="/main/job" className="pl-20 font-semibold text-black block py-2.5 px-4 rounded hover:bg-yellow-500">
          Contact
        </Link>
        <Link href="/main/job" className="pl-20 font-semibold text-black block py-2.5 px-4 rounded hover:bg-yellow-500">
          Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
