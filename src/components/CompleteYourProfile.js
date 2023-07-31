import React from 'react';
import arrowback from '../IconsAndImages/arrow_back_ios_24px.png';
import googleLogo from '../IconsAndImages/flat-color-icons_google.png';
import { useNavigate } from 'react-router-dom/dist';
const CompleteYourProfile = () => {
  const navigate = useNavigate();
  const gotoBankVerfication = (e) => {
    e.preventDefault();
    navigate('/bankverification');
  };

  const backToRegistration = () => {
    navigate('/registration');
  };
  return (
    <div className='w-7/12 flex flex-col gap-4'>
      <div className='w-full flex justify-between items-center '>
        <div
          className='flex items-center m-10 cursor-pointer'
          onClick={backToRegistration}>
          <img
            src={arrowback}
            className='w-4 h-4'
          />
          <div className='text-slate-400 text-base font-semibold'>Back</div>
        </div>
        <div>
          <div className='text-right text-stone-300 text-sm font-medium'>
            STEP 02/03
          </div>
          <div className='text-right text-slate-400 text-base font-semibold'>
            Residency Info
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
          onSubmit={gotoBankVerfication}>
          <label className='text-gray-500 text-base font-medium'>
            Phone number*
          </label>
          <input
            type='telephone'
            className='w-[426px] h-16 bg-white rounded-md shadow border border-blue-700'
            placeholder='phone number'
            required
          />
          <label className='text-gray-500 text-base font-medium'>
            Your address*
          </label>
          <input
            placeholder='please enter address'
            className='w-[426px] h-16 bg-white rounded-md shadow border border-blue-700'
            required
          />
          <label className='text-gray-500 text-base font-medium'>
            Country of residence*
          </label>
          <select
            className='w-[426px] h-16 bg-white rounded-md shadow border border-blue-700'
            required>
            <option>dummy residence</option>
          </select>
          <button
            className='w-[426px] h-16 bg-blue-700 rounded-md mt-6'
            type='submit'>
            <div className='text-center text-white text-base font-medium'>
              Save & Continue
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompleteYourProfile;
