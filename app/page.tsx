"use client"
import Image from 'next/image'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('http://localhost:3000/dashboard');
  }, [router]);
  return null
}
