import type { Metadata } from "next";
import "./globals.css";
import Layout from "../components/Layout";

export const metadata: Metadata = {
    title: "METAS Learning - Nền tảng giáo dục số",
    description:
        "Nền tảng học tập trực tuyến dành cho học sinh & giáo viên Việt Nam. Tích hợp LMS, AI, chatbot tư vấn 24/7.",
    icons: {
        icon: "/logo.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi">
            <body>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
