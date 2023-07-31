import React from 'react';
import Welcome from './components/Welcome';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import JoinUsPage from './components/JoinUs';
import RegistrationPage from './components/RegistrationPage';
import CompleteYourProfile from './components/CompleteYourProfile';
import BankVerifyPage from './components/BankVerifyPage';
import Verified from './components/Verified';

const AppLoyout = () => {
  return (
    <div className='w-full h-full flex justify-stretch'>
      <Welcome />
      <Outlet />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLoyout />,
    children: [
      {
        path: '/',
        element: <JoinUsPage />,
      },
      {
        path: 'registration',
        element: <RegistrationPage />,
      },
      {
        path: 'completeProfile',
        element: <CompleteYourProfile />,
      },
      {
        path: 'bankverification',
        element: <BankVerifyPage />,
      },
      {
        path: 'verified',
        element: <Verified />,
      },
    ],
  },
]);

export default AppLoyout;
