import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function NotFound() {
    const router = useRouter(); 
    useEffect(() => {
        router.push('/')
    },[])
  return (
    <div>Loading...</div>
  )
}
