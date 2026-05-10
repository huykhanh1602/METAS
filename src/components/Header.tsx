"use client";

import { Search, Phone, Menu } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { navItems } from "../constants/navItems";

const Header = () => {
    const router = useRouter();
    const pathname = usePathname();

    // Extract the first path segment to determine active page
    const activeSegment =
        (pathname ?? "") === "/" ? "main" : (pathname ?? "").split("/")[1] || "main";

    const handleNavigation = (pageId: string) => {
        if (pageId === "main") {
            router.push("/");
        } else {
            router.push(`/${pageId}`);
        }
    };

    return (
        <>
            <div className="sticky top-0 z-40 bg-surface shadow-lg border-b border-border">
                <div className="container mx-auto flex flex-wrap items-center gap-4 px-4 py-3 md:justify-between lg:px-6">
                    <div className="flex items-center gap-3">
                        <div className="relative inline-flex h-12 w-auto">
                            <img src="/logo.jpg" alt="METAS Learning" className="h-12 w-auto" />
                            <button
                                type="button"
                                onClick={() => handleNavigation("main")}
                                className="absolute inset-0 rounded-lg bg-transparent focus:outline-none hover:cursor-pointer"
                                aria-label="Về trang chính"
                            />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-text-muted">
                                Nền tảng giáo dục
                            </p>
                            <p className="text-lg font-bold text-text-primary">METAS Learning</p>
                        </div>
                    </div>

                    <div className="flex flex-1 items-center justify-center">
                        <div className="flex w-full max-w-xl items-center rounded-full border border-border bg-surface-soft px-4 py-2 shadow-sm focus-within:border-info">
                            <Search className="h-5 w-5 text-text-muted" />
                            <input
                                type="search"
                                placeholder="Tìm kiếm khóa học, bài giảng, học liệu..."
                                className="ml-3 flex-1 bg-transparent text-sm font-medium text-text-secondary focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="hidden items-center gap-4 text-sm font-semibold text-text-secondary lg:flex">
                        <a
                            href="tel:0818933007"
                            className="flex items-center gap-2 text-text-secondary hover:text-info-dark"
                        >
                            <Phone className="h-4 w-4" /> <span>0818933007</span>
                        </a>
                        <button className="rounded-full border border-border-muted px-5 py-2 text-text-secondary transition hover:border-border">
                            Đăng nhập
                        </button>
                        <button className="rounded-full bg-accent px-5 py-2 text-white shadow-sm transition hover:bg-accent-dark">
                            Đăng ký
                        </button>
                    </div>

                    <div className="lg:hidden">
                        <button className="rounded-full border border-border p-2 text-text-secondary shadow-sm">
                            <Menu className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            <header>
                <nav className="bg-primary text-surface">
                    <div className="container mx-auto flex flex-wrap items-center justify-center gap-3 px-4 py-3 text-xs font-semibold uppercase tracking-wide sm:text-sm lg:gap-6">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavigation(item.id)}
                                className={`rounded-full px-3 py-1 transition focus:outline-none ${
                                    activeSegment === item.id
                                        ? "bg-surface text-primary"
                                        : "text-surface/90 hover:bg-primary-dark hover:text-info-light hover:cursor-pointer"
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
