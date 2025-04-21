'use client'
import Link , {LinkProps} from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    href: string;
    className?: string;
}

const sleep = (ms: number = 500) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const TransitionLink =  ({
    children,
    href,
    ...props
} : TransitionLinkProps) => {
    const router = useRouter();
    const handleTranstion = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const body = document.querySelector('body') as HTMLBodyElement;

        body.classList.add('page-transition');

        router.push(href);

        body.classList.remove('page-transition');
    }
  return (
    <Link href={href} {...props} onClick={handleTranstion}>{children}</Link>
  )
}

export default TransitionLink