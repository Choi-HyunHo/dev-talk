import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import { useSession, signIn, signOut } from "next-auth/react";
import Avatar from "./Avatar";
import LoginBtn from "./LoginBtn";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/store/auth/authSlice";

export default function Header() {
    const { data: session } = useSession();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            loginSuccess({
                name: session?.user?.name,
                email: session?.user?.email,
                image: session?.user?.image,
            })
        );
    }, [session]);

    return (
        <header className="flex items-center justify-between sticky top-0 left-0 h-20 w-full">
            <Link href="/" className="flex items-center">
                <Image src={Logo} alt="logo" width={200} priority />
            </Link>
            <nav className="flex gap-4 text-lg">
                {session ? (
                    <div className="flex items-center gap-4">
                        <Avatar user={session.user} />
                        <LoginBtn text="로그아웃" onClick={() => signOut()} />
                    </div>
                ) : (
                    <LoginBtn
                        text="로그인 &nbsp; | &nbsp; 회원가입"
                        onClick={() => signIn()}
                    />
                )}
            </nav>
        </header>
    );
}
