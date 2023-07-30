import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./Layout";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "../store/index";

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps) {
    return (
        <SessionProvider session={session}>
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </SessionProvider>
    );
}
