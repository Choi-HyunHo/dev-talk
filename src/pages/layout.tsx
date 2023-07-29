import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import React from "react";

export default function Layout(props: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </>
    );
}
