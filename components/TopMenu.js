'use client';

import Link from 'next/link';
import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { RiMenu5Fill } from 'react-icons/ri';
import { IoIosMail } from 'react-icons/io';
import { useMenuStore } from '@/store/useMenuStore';

function TopMenu() {
  const { isOpen, openMobileMenu } = useMenuStore();
  return (
    <section
      className="px-[40px] bg-whitesmoke py-4 z-10 max-xs:px-5"
      id="home"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-between items-center gap-5">
        {/* 上 */}
        <div className="flex justify-between items-center w-full md:hidden">
          <Link href={'/'}>
            <h1 className="font-bold text-3xl text-tailgreen">MY PORTFOLIO</h1>
          </Link>

          {/* トグル */}
          <div className="text-2xl z-50" onClick={openMobileMenu}>
            {isOpen ? <IoCloseOutline /> : <RiMenu5Fill />}
          </div>
        </div>
        {/* 下 */}
        <div className="flex justify-between w-full items-center max-xs:flex-col max-xs:items-start max-xs:gap-2">
          <div className="flex flex-row gap-2 items-center text-lg font-bold">
            <IoIosMail className="text-2xl text-darkblue mt-1" />
            <span className=" text-darkblue text-xl pd-1 px-2 py-1">
              alpinehunter1984@gmail.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopMenu;
