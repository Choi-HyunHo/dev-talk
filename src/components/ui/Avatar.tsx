import React from "react";

interface Props {
    image?: string | null;
}

export default function Avatar({ image }: Props) {
    return (
        <div className="w-12 h-12">
            <img
                alt="uesr profile"
                src={image ?? undefined}
                className="rounded-full"
            />
        </div>
    );
}
