'use client'
import { usePathname } from 'next/navigation';
import style from './ActiveLink.module.css'
import Link from "next/link";

interface Props{
    path:string;
    text:string;
}
export const ActiveLink=({path,text}:Props)=>{

    const pathName=usePathname()

    return (
        <Link key={path} className={`${style.link} ${(pathName === path) && style['active-link']}`} href={path}>{text}</Link>
    )
}