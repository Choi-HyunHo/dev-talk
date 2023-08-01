"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

interface Props {
    user?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
    };
}

export default function Avatar({ user }: Props) {
    const router = useRouter();
    const handleAbout = () => {
        router.push("/about");
    };

    return (
        <div className="w-12 h-12 cursor-pointer" onClick={handleAbout}>
            <Image
                alt="uesr profile"
                src={user?.image || undefined}
                width={100}
                height={100}
                className="rounded-full"
            />
        </div>
    );
}
