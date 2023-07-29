import React from "react";

interface Props {
    text: string;
    onClick: () => void;
}

export default function LoginBtn({ text, onClick }: Props) {
    return (
        <div className="rounded-md">
            <button onClick={onClick}>{text}</button>
        </div>
    );
}
