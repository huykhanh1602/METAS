"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
    image: string;
    badge: string;
    title: string;
    description: string;
}

const slides: Slide[] = [
    {
        image: "/slide1.jpg",
        badge: "Công nghệ giáo dục METAS",
        title: "Nền tảng học tập trực tuyến dành cho học sinh & giáo viên Việt Nam",
        description:
            "Tích hợp LMS, trí tuệ nhân tạo, chatbot tư vấn 24/7 và hệ thống track tiến độ giúp sĩ tử chuẩn bị tốt nhất cho các kỳ thi trong nước và quốc tế.",
    },
    {
        image: "/slide2.jpg",
        badge: "AI cá nhân hóa METAS",
        title: "Học tập thông minh với trợ lý AI 24/7",
        description:
            "Trí tuệ nhân tạo phân tích điểm yếu, đề xuất lộ trình riêng và giải đáp thắc mắc tức thì – giúp mỗi học sinh có một gia sư riêng không giới hạn.",
    },
    {
        image: "/slide3.jpg",
        badge: "Luyện thi quốc tế METAS",
        title: "Chinh phục kỳ thi Toán & Khoa học quốc tế",
        description:
            "Lộ trình bài bản từ cơ bản đến nâng cao, được thiết kế bởi đội ngũ giáo viên giàu kinh nghiệm luyện thi TIMO, HKIMO, ASMO và các kỳ thi quốc tế khác.",
    },
];

const SLIDE_INTERVAL = 5000;

const HeroSection = () => {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const goTo = useCallback((index: number) => {
        setCurrent((prev) => {
            const total = slides.length;
            return ((index % total) + total) % total;
        });
    }, []);

    const next = useCallback(() => goTo(current + 1), [current, goTo]);
    const prev = useCallback(() => goTo(current - 1), [current, goTo]);

    useEffect(() => {
        if (isPaused) return;
        const id = setInterval(next, SLIDE_INTERVAL);
        return () => clearInterval(id);
    }, [isPaused, next]);

    return (
        <section
            className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-xl shadow-border"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
        >
            {/* Slides */}
            <div className="relative flex-1 w-full overflow-hidden">
                {slides.map((slide, idx) => (
                    <div
                        key={idx}
                        className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                        style={{ opacity: idx === current ? 1 : 0 }}
                    >
                        {/* Background image */}
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="h-full w-full object-cover"
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                        {/* Text content */}
                        <div className="absolute inset-0 flex items-center px-6 md:px-12 lg:px-16">
                            <div className="max-w-xl space-y-4 text-white">
                                <p className="text-xs uppercase tracking-[0.35em] text-white/70 md:text-sm">
                                    {slide.badge}
                                </p>
                                <h1 className="text-2xl font-bold leading-tight md:text-4xl lg:text-5xl">
                                    {slide.title}
                                </h1>
                                <p className="text-sm leading-relaxed text-white/80 md:text-base lg:text-lg">
                                    {slide.description}
                                </p>
                                <div className="flex flex-wrap gap-3 pt-2">
                                    <button className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface shadow-lg shadow-accent/40 transition hover:brightness-110">
                                        Đăng ký ngay
                                    </button>
                                    <button className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20">
                                        Thi thử Toán quốc tế
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation arrows */}
            <button
                onClick={prev}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-text-primary shadow-md backdrop-blur-sm transition hover:bg-white hover:shadow-lg md:left-5"
            >
                <ChevronLeft className="h-5 w-5" />
            </button>
            <button
                onClick={next}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-text-primary shadow-md backdrop-blur-sm transition hover:bg-white hover:shadow-lg md:right-5"
            >
                <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 md:bottom-6">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goTo(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`rounded-full transition-all duration-300 ${
                            idx === current ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
                        } h-2.5`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSection;
