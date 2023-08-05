import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthContext from "@/context/AuthContext";
import { MultiLevelSidebar } from "@/components/ui/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "DEV TALK",
    description: "개발자들을 위한 DEV TALK 입니다.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthContext>
                    <div className="flex">
                        <MultiLevelSidebar />
                        <main className="w-[calc(100vw-20rem)] bg-slate-100">
                            {children}
                        </main>
                    </div>
                </AuthContext>
            </body>
        </html>
    );
}
