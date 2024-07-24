'use client';
import React, { useEffect, useState } from 'react';
import { TbSquareArrowUpFilled } from 'react-icons/tb';

function TopButton() {
  const [scrolling, setScrolling] = useState(false);

  //300以上スクロールしたらTopButtonが表示される
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <div
      className={
        scrolling ? 'fixed bottom-[0.5rem] right-[0.7rem] z-50' : 'hidden'
      }
    >
      <a href="#home">
        <TbSquareArrowUpFilled className="text-cadetblue " size={40} />
      </a>
    </div>
  );
}

export default TopButton;
