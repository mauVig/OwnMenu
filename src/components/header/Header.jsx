import React, { useRef, useEffect } from 'react';
import { MdMenuBook } from 'react-icons/md';
import MenuUser from './MenuUser.jsx';
import { UseAuthContext } from '../../context/googleContext';
export default function Header() {
  const tall = useRef();
  const { getHeaderTall } = UseAuthContext();
  useEffect(() => {
    getHeaderTall(tall.current.offsetHeight);
  }, []);
  return (
    <>
      <div
        className=' bg-neutral-800 text-greyL-500 h-10 text-white'
        ref={tall}
      >
        <div className=' max-w-7xl mx-auto px-4 xl:px-0 h-full'>
          <div className='flex items-center justify-between h-full'>
            <MdMenuBook className=' text-2xl' />
            <MenuUser />
          </div>
        </div>
      </div>
    </>
  );
}
