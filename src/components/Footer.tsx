import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-primary text-surface">
            <div className="container mx-auto grid gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-3">
                    <img src="/logo.png" alt="METAS Learning" className="h-12 w-auto" />
                    <p className="text-sm text-text-footer">
                        METAS Learning định hướng gia tăng tính kết nối giữa học sinh, phụ huynh và
                        giáo viên trên nền tảng số hóa.
                    </p>
                    <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
                        Học chất, sống thoải
                    </p>
                </div>
                <div className="space-y-2 text-sm text-slate-300">
                    <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
                        Phụ huynh & Học sinh
                    </p>
                    <ul className="space-y-1">
                        <li>Tìm khóa học</li>
                        <li>Hướng dẫn thanh toán</li>
                        <li>Theo dõi tiến độ</li>
                    </ul>
                </div>
                <div className="space-y-2 text-sm text-text-footer">
                    <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
                        Kho Tài nguyên & Sự kiện
                    </p>
                    <ul className="space-y-1">
                        <li>Tin tức công nghệ</li>
                        <li>Cuộc thi toán</li>
                        <li>Học liệu số</li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
                        Tải ứng dụng
                    </p>
                    <div className="flex flex-col gap-3">
                        <button className="flex items-center justify-center gap-2 rounded-3xl border border-white/40 px-4 py-2 text-sm font-semibold">
                            Google Play
                        </button>
                        <button className="flex items-center justify-center gap-2 rounded-3xl border border-white/40 px-4 py-2 text-sm font-semibold">
                            App Store
                        </button>
                    </div>
                    <div className="flex items-center gap-4 pt-2 text-text-footer">
                        <Facebook className="h-5 w-5" />
                        <Instagram className="h-5 w-5" />
                        <Linkedin className="h-5 w-5" />
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10 px-4 py-6 text-xs text-slate-400">
                <div className="container mx-auto flex flex-col items-center justify-between gap-2 text-center md:flex-row md:text-left">
                    <span>© 2026 METAS. Sở hữu bởi CTCP Giáo dục số META.</span>
                    <span>Hotline: 1900 6933 · Email: hotro@metas.vn</span>
                    <span>Địa chỉ: P Vàng Danh, Uông Bí, Quảng Ninh</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
