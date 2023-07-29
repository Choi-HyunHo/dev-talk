import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";

export default function Header() {
    return (
        <header className="flex items-center justify-between sticky top-0 left-0 h-20 w-full">
            <Link href="/" className="flex items-center">
                <Image src={Logo} alt="logo" width={200} />
            </Link>
            <nav className="flex gap-4 text-lg">
                <button>로그인 &nbsp; | &nbsp; 회원가입</button>
            </nav>
        </header>
    );
}
