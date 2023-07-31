import React from 'react';
import arrowback from '../IconsAndImages/arrow_back_ios_24px.png';
import googleLogo from '../IconsAndImages/flat-color-icons_google.png';
import { useNavigate } from 'react-router-dom/dist';
const RegistrationPage = () => {
  const navigate = useNavigate();
  const gotoCompleteProfilePage = (e) => {
    e.preventDefault();
    navigate('/completeProfile');
  };

  const gotoMainPage = () => {
    navigate('/');
  };
  return (
    <div className='w-7/12 flex flex-col gap-4'>
      <div className='w-full flex justify-between items-center '>
        <div
          className='flex items-center m-10 cursor-pointer'
          onClick={gotoMainPage}>
          <img
            src={arrowback}
            className='w-4 h-4'
          />
          <div className='text-slate-400 text-base font-semibold'>Back</div>
        </div>
        <div>
          <div className='text-right text-stone-300 text-sm font-medium'>
            STEP 01/03
          </div>
          <div className='text-right text-slate-400 text-base font-semibold'>
            Personal Info.
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center w-full'>
        <div className='text-black text-3xl font-bold'>
          Register Individual Account!
        </div>
        <div className='w-[413px] text-slate-400 text-lg font-normal leading-7'>
          For the purpose of industry regulation, your details are required.
        </div>
        <form
          onSubmit={gotoCompleteProfilePage}
          className='flex flex-col mt-5'>
          <label className='text-gray-500 text-base font-medium'>
            Your fullname*
          </label>
          <input
            className='w-[426px] h-16 bg-white rounded-md shadow border border-blue-700'
            placeholder='fullName'
            required
          />
          <label className='text-gray-500 text-base font-medium'>
            Email address*
          </label>
          <input
            className='w-[426px] h-16 bg-white rounded-md shadow border border-blue-700'
            placeholder='Your Email'
            required
          />
          <label className='text-gray-500 text-base font-medium'>
            Create password*
          </label>
          <input
            className='w-[426px] h-16 bg-white rounded-md shadow border border-blue-700'
            placeholder='password'
            required
          />
          <div className='flex justify-start items-center m-2'>
            <input
              type='checkbox'
              required
            />
            <div className='text-gray-500 text-base font-medium ml-3'>
              I agree to terms & conditions
            </div>
          </div>

          <button
            className='w-[426px] h-16 bg-blue-700 rounded-md'
            type='submit'>
            <div className='text-center text-white text-base font-medium'>
              Register Account
            </div>
          </button>
          <button className='w-[426px] h-16 bg-white rounded-md shadow flex items-center justify-center mt-6'>
            <img
              src={googleLogo}
              alt='googleImg'
              className='w-6 h-6'
            />
            <div className='text-center text-black text-base font-medium'>
              Register with Google
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
