import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingButton from "./FloatingButton";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-page text-text-primary">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <FloatingButton />
        </div>
    );
};

export default Layout;
