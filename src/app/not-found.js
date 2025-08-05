// app/not-found.js
'use client';

import { useEffect } from 'react';
import Link from 'next/link';


export default function NotFound() {
  useEffect(() => {
    document.body.classList.add('on-404');

    return () => {
      document.body.classList.remove('on-404');
    };
  }, []);

  return (
    <div className='container-md text-center'>
      <div className='mt-10'>

      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link href="/">Go Back Home</Link>
    </div>
    </div>
  );
}
