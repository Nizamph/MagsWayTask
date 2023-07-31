import React from 'react';
import polygon from '../IconsAndImages/Polygon 1 (3).png';
import userImg from '../IconsAndImages/user.png';
import Arrow from '../IconsAndImages/arrow-right.png';
import Polygon2 from '../IconsAndImages/Polygon 2 (2).png';
import briefCase from '../IconsAndImages/briefcase.png';
const JoinUsPage = () => {
  return (
    <div className='w-7/12 flex flex-col gap-32'>
      <div className='pt-10 text-right'>
        <span className='text-slate-400 text-lg font-normal leading-7'>
          Already have an account?
        </span>
        <span className='text-blue-700 text-lg font-medium leading-7'>
          {' '}
          Sign In
        </span>
      </div>
      <div className='w-full justify-center items-center flex flex-col gap-2 '>
        <div className='text-black text-3xl font-bold'>Join Us!</div>
        <div className='w-[411px] text-slate-400 text-lg font-normal leading-7'>
          To begin this journey, tell us what type of account you’d be opening.
        </div>
        <div className='w-[426px] h-[108px] bg-slate-50 rounded-md shadow border border-blue-700 flex items-center gap-2'>
          <div className='relative flex flex-col items-center ml-6'>
            <img
              src={polygon}
              className='w-15 h-15 '
            />
            <img
              src={userImg}
              className='w-6 h-6 left-3 absolute top-3'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-black text-base font-medium'>Individual</div>
            <div className='w-[264px] text-slate-400 text-sm font-normal'>
              Personal account to manage all you activities.
            </div>
          </div>
          <img
            src={Arrow}
            className='w-6 h-6'
          />
        </div>
        <div className='w-[426px] h-[108px] bg-slate-50 rounded-md shadow border flex items-center gap-2'>
          <div className='relative flex flex-col items-center ml-6'>
            <img
              src={Polygon2}
              className='w-15 h-15 '
            />
            <img
              src={briefCase}
              className='w-6 h-6 left-3 absolute top-3'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-black text-base font-medium'>Individual</div>
            <div className='w-[264px] text-slate-400 text-sm font-normal'>
              Personal account to manage all you activities.
            </div>
          </div>
          <img
            src={Arrow}
            className='w-6 h-6'
          />
        </div>
      </div>
    </div>
  );
};

export default JoinUsPage;
