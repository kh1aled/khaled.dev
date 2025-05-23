'use client'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode
  href: string
  className?: string
}

const sleep = (ms: number = 500) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const TransitionLink = ({ children, href, ...props }: TransitionLinkProps) => {
  const router = useRouter()

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const body = document.querySelector('body')
    if (!body) return

    body.classList.add('page-transition')

    // انتظر التأثير يشتغل لمدة 500ms
    await sleep(400)

    
    
    // انتقل للصفحة بعدها
    router.push(href)
    body.classList.remove('page-transition')

    // ممكن تشيل الكلاس بعد التنقل باستخدام useEffect في الصفحة الجديدة
  }

  return (
    <Link href={href} {...props} onClick={handleTransition}>
      {children}
    </Link>
  )
}

export default TransitionLink
