'use client'

import { cn, getInitials } from '@/lib/utils'
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Session } from 'next-auth';
import { logoutAction } from '@/actions/auth';

const Header = ({session}: {session: Session}) => {
    const pathname = usePathname();
    
    return (
        <header className="my-10 flex justify-between gap-5">
            <Link href="/" className="flex items-center gap-2">
                <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
                <span className="font-medium text-light-200 text-2xl ">Bookify</span>
            </Link>
            
            <ul className="flex items-center justify-center gap-8">
                <li>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="flex justify-center items-center gap-1 outline-none">
                                <Avatar>
                                    <AvatarFallback className="bg-amber-100">
                                        {getInitials(session?.user?.name as string)}
                                    </AvatarFallback>
                                </Avatar>
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56 ">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link href="/my-profile" className="cursor-pointer">
                                    Profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/settings" className="cursor-pointer">
                                    Settings
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem 
                                onClick={async () => await logoutAction()}
                                className="text-red-500 cursor-pointer"
                                >
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </li>
            </ul>
        </header>
    )
}

export default Header