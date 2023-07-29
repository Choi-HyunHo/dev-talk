import React, { useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function about() {
    const router = useRouter();
    const { name, email, image } = useSelector((state: any) => state.auth);

    useEffect(() => {
        if (name === undefined) {
            router.push("/");
        }
    }, [name, router]);

    return (
        <div className="flex flex-col items-center mt-20">
            <div className="flex justify-center">
                <Image
                    src={image}
                    alt="user-image"
                    width={250}
                    height={10}
                    className="rounded-2xl"
                />
            </div>
            <div className="flex flex-col justify-center items-center mt-10 mb-20">
                <div>
                    <p className="text-xl semi-bold text-gray-400">{name}</p>
                </div>
                <div>
                    <p className="text-xl semi-bold text-gray-400">{email}</p>
                </div>
                <p className="mt-10 text-md">{name} 님 즐거운 코딩 하세요👍</p>
            </div>
            <p>부가 기능은 comming soon...</p>
        </div>
    );
}
