import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import React from "react";

export default function Layout(props: { children: React.ReactNode }) {
    return (
        <div className="relative max-w-screen-2xl">
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
    );
}
