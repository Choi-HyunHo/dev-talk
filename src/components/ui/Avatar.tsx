import { useRouter } from "next/router";
import React from "react";

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
            <img
                alt="uesr profile"
                src={user?.image ?? undefined}
                className="rounded-full"
            />
        </div>
    );
}
