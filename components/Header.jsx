import React from 'react'
import { Button } from './ui/button'
import Link from "next/link"
import Nav from './Nav'


const Header = () => {
    return (
        <header>
            <div className="py-8 xl:py-12 text=white">
                <div className="container mx-auto flex justify-between items-center">
                    {/* logo */}
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Dicky<span className="text-accent">.</span>
                        </h1>
                    </Link>
                    {/* desktop nav & hire me button */}
                    <div className="hidden xl:flex item-center gap-8">
                        <Nav />
                        <Link href="/contact">
                            <Button>Hire Me</Button>
                        </Link>
                    </div>
                    <div className='xl:hidden'>
                        mobile nav
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header