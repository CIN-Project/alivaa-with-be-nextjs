'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Error page caught:', error);
  }, [error]);

  return (
    <div className='text-center p-4'>
      <h2>Something went wrong!</h2>
      <p>{error?.message}</p>
      <button onClick={() => reset()} className='mt-4'>
        Try again
      </button>
    </div>
  );
}
