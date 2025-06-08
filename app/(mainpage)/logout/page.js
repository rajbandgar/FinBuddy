'use client'

import { useEffect, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { UserContext } from '@/context/userContext'

export default function LogoutPage() {
  const { clearUser } = useContext(UserContext)
  const router = useRouter()

  useEffect(() => {
    // Perform logout actions
    localStorage.clear()
    clearUser()

    // Redirect to login
    router.replace('/')
  }, [])

  return (
    <div className="flex items-center justify-center h-screen text-lg font-semibold">
      Logging out...
    </div>
  )
}
