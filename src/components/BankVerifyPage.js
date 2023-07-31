import React from 'react';
import { useNavigate } from 'react-router-dom/dist';
import arrowback from '../IconsAndImages/arrow_back_ios_24px.png';
const BankVerifyPage = () => {
  const navigate = useNavigate();

  const gotoCompleteProfile = () => {
    navigate('/completeProfile');
  };

  const verifiedbankHandler = () => {
    navigate('/verified');
  };
  return (
    <div className='w-7/12 flex flex-col gap-4'>
      <div className='w-full flex justify-between items-center '>
        <div
          className='flex items-center m-10 cursor-pointer'
          onClick={gotoCompleteProfile}>
          <img
            src={arrowback}
            className='w-4 h-4'
          />
          <div className='text-slate-400 text-base font-semibold'>Back</div>
        </div>
        <div>
          <div className='text-right text-stone-300 text-sm font-medium'>
            STEP 03/03
          </div>
          <div className='text-right text-slate-400 text-base font-semibold'>
            Bank Verification
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center w-full'>
        <div className='text-black text-3xl font-bold'>
          Complete Your Profile!
        </div>
        <div className='w-[413px] text-slate-400 text-lg font-normal leading-7'>
          For the purpose of industry regulation, your details are required.
        </div>
        <form
          className='flex flex-col mt-5 gap-2'
          onSubmit={verifiedbankHandler}>
          <label className='text-gray-500 text-base font-medium'>
            Bank verification number (BVN)
          </label>
          <input
            type='telephone'
            placeholder='verification code'
            className='w-[426px] h-16 bg-white rounded-md shadow border border-blue-700'
            required
          />
          <button className='w-[426px] h-16 bg-blue-700 rounded-md mt-20'>
            <div className='text-center text-white text-base font-medium'>
              Save & Continue
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BankVerifyPage;
