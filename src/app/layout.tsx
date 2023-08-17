import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthContext from "@/context/AuthContext";
import { MultiLevelSidebar } from "@/components/ui/Sidebar";
import { StickyNavbar } from "@/components/ui/Navbar";

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
                        <div className="flex flex-col">
                            <StickyNavbar />
                            <main className="w-[calc(100vw-20rem py-2 px-4 lg:px-8 lg:py-4">
                                {children}
                            </main>
                        </div>
                    </div>
                </AuthContext>
            </body>
        </html>
    );
}
