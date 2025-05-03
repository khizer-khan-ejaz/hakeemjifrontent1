// ./src/app/admin/appointments/page.tsx
'use client'; // This marks it as a client component

import FetchAppointmentsSSR from '@/Components/FetchAppointmentsSSR'
import React from 'react'

export default function AppointmentPage() {
  return (
    <div className='w-[100vw] h-[100vh]'>
      <FetchAppointmentsSSR />
    </div>
  )
}

