'use client'; // If using app router

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamic import with SSR disabled
const FetchAppointmentsSSR = dynamic(
  () => import('@/Components/FetchAppointmentsSSR'),
  { ssr: false }
);

const AppointmentPage = () => {
  return (
    <div className='w-[100vw] h-[100vh]'>
      <FetchAppointmentsSSR />
    </div>
  );
};

// If using pages router, add this to prevent prerendering
export const getServerSideProps = async () => {
  return { props: {} };
};

export default AppointmentPage;