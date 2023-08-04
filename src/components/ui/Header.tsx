"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";

import Avatar from "./Avatar";
import LoginBtn from "./LoginBtn";

export default function Header() {
    return (
        <header className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
                <Image src={Logo} alt="logo" width={200} priority />
            </Link>
            <nav className="flex gap-4 text-lg"></nav>
        </header>
    );
}
