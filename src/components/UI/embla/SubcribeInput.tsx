'use client';
import { Button, Input, Space } from 'antd';
import { IoIosSend } from 'react-icons/io';

function SubcribeInput() {
  return (
    <div
      style={{ width: '100%' }}
      className='flex items-center justify-between rounded-md bg-[rgba(255,255,255,0.1)] p-3 pr-0 [&_input]:focus:outline-blue-primary'
    >
      <input
        defaultValue=''
        placeholder='Subscribe with us'
        className='bg-transparent outline-none'
      ></input>
      <button className='w-10'>
        <IoIosSend size={28} />
      </button>
    </div>
  );
}

export default SubcribeInput;
