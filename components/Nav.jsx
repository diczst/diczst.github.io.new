"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { use } from "react"

const links = [
    {
        name: 'home',
        path: "/"
    },
    {
        name: 'services',
        path: "/services"
    },
    {
        name: 'resume',
        path: "/resume"
    },
    {
        name: 'contact',
        path: "/contact"
    }
]

const Nav = () => {
    const pathName = usePathname()
    console.log(pathName);

    return <div>Desktop Nav</div>
}

export default Nav
