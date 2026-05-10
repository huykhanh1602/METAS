"use client";

import React from "react";
import HeroSection from "../components/HeroSection";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import StatsBar from "../components/StatsBar";

const courseBlocks = [
    {
        title: "Dành cho Học sinh Tiểu học",
        description: "Khóa học theo chuẩn bộ Giáo dục, kết hợp video bài giảng và làm bài tập AI.",
        cards: [
            {
                badge: "Toán quốc tế",
                title: "Luyện thi Toán 5 quốc tế",
                description: "Khoá học bám sát đề thi Singapore và chuẩn hóa tư duy logic.",
                actionLabel: "Xem chi tiết",
            },
            {
                badge: "Công nghệ",
                title: "Phòng luyện AI Math",
                description: "Làm bài tập theo sức học với phản hồi tức thì từ chatbot.",
                actionLabel: "Thi thử ngay",
            },
        ],
    },
    {
        title: "Dành cho Phụ huynh",
        description: "Kênh báo cáo tiến độ, lịch khai giảng và review từ các hội đồng chuyên môn.",
        cards: [
            {
                badge: "Lịch khai giảng",
                title: "Bản tin tháng 6",
                description: "Học phí ưu đãi, lớp giới hạn dưới 30 học viên.",
                actionLabel: "Tải báo cáo",
            },
            {
                badge: "Đánh giá",
                title: "Review 5 sao",
                description: "Phản hồi thực tế từ phụ huynh các trường nòng cốt.",
                actionLabel: "Xem đánh giá",
            },
        ],
    },
    {
        title: "Dành cho Giáo viên & Sinh viên",
        description: "Chương trình bồi dưỡng số, học liệu và nộp bài thu hoạch nhanh chóng.",
        cards: [
            {
                badge: "Học liệu",
                title: "Kho học liệu PDF & video",
                description: "Tải miễn phí & có phí – bám sát chương trình phổ thông và đại học.",
                actionLabel: "Tải ngay",
            },
            {
                badge: "Bồi dưỡng",
                title: "Nộp bài thu hoạch",
                description: "Chuẩn hóa biểu mẫu và nhắc tiến độ tự động.",
                actionLabel: "Gửi bài",
            },
        ],
    },
];

const introHighlights = [
    {
        title: "Phương pháp học chủ động",
        description:
            "Tích hợp học theo dự án + AI tutor giúp học sinh chủ động lập kế hoạch và tự phản hồi sau từng bài học.",
        meta: "Online & Offline",
    },
    {
        title: "Giảng viên chuẩn hoá",
        description:
            "Đội ngũ giáo viên đạt chứng chỉ quốc tế, phối hợp với chuyên gia AI trong việc đánh giá bài tập theo tiêu chí SMART.",
        meta: "Mentorship",
    },
];

const newsEvents = [
    {
        title: "Hội thảo Ươm mầm tài năng số",
        date: "10/05/2026",
        description:
            "Gặp gỡ chuyên gia STEM, trải nghiệm phòng lab ảo và định hướng bậc phổ thông/đại học.",
    },
    {
        title: "Khai giảng khóa bồi dưỡng AI Math",
        date: "20/05/2026",
        description:
            "Lớp giới hạn 40 học viên, tài liệu chuẩn Cambridge và phản hồi từ hệ thống đánh giá tự động.",
    },
    {
        title: "Ngày hội tuyển dụng giáo viên METAS",
        date: "02/06/2026",
        description:
            "Tại văn phòng Hà Nội và TP.HCM, mở rộng chương trình đối tác giảng dạy cho giáo viên phần mềm.",
    },
];

const digitalResources = [
    {
        title: "Kho bài giảng tương tác",
        detail: "Video, mô phỏng và giải thích bằng đa ngôn ngữ (Việt - Anh).",
    },
    {
        title: "Bộ đề theo chuẩn",
        detail: "Bộ đề THCS, THPT & quốc tế tích hợp bài tập AI tự chấm.",
    },
    {
        title: "Tài liệu giáo viên",
        detail: "Kế hoạch bài giảng, rubic đánh giá và tư liệu dự án STEAM.",
    },
];

const consultingSteps = [
    {
        title: "Tư vấn chương trình",
        description: "Gặp chuyên gia phụ trách từng khối lớp để xác định lộ trình học phù hợp.",
    },
    {
        title: "Đăng ký linh hoạt",
        description:
            "Các gói học online, offline và kết hợp, thanh toán theo từng giai đoạn hoặc toàn khoá.",
    },
    {
        title: "Hỗ trợ sau khóa",
        description:
            "Quản lý tiến độ, phản hồi từ cố vấn học tập và tài khoản truy cập học liệu trọn đời.",
    },
];

const HomeContent = () => {
    return (
        <div className="container mx-auto space-y-10 px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-12">
                <div className="lg:col-span-3">
                    <Sidebar />
                </div>
                <div className="lg:col-span-6">
                    <HeroSection />
                </div>
                <div className="lg:col-span-3 space-y-4">
                    <div className="rounded-3xl border border-border bg-gradient-to-b from-warning-soft to-accent p-5 text-surface shadow-lg">
                        <p className="text-sm uppercase tracking-[0.3em] text-text-muted">
                            QR Tài liệu
                        </p>
                        <p className="mt-4 text-lg font-semibold text-text-primary">
                            Quét mã QR ngay để nhận video bài giảng
                        </p>
                    </div>
                    <div className="rounded-3xl border border-border bg-surface p-5 text-text-primary shadow-lg">
                        <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
                            Giáo viên chuyên biệt
                        </p>
                        <p className="mt-3 text-lg font-semibold text-text-primary">
                            Khóa bồi dưỡng số & chứng chỉ
                        </p>
                    </div>
                </div>
            </div>

            <StatsBar />

            {courseBlocks.map((block) => (
                <section
                    key={block.title}
                    className="space-y-6 rounded-3xl bg-surface p-6 shadow-lg"
                >
                    <header>
                        <h2 className="text-2xl font-bold text-text-primary">{block.title}</h2>
                        <p className="text-sm text-text-muted">{block.description}</p>
                    </header>
                    <div className="grid gap-4 md:grid-cols-2">
                        {block.cards.map((card) => (
                            <Card key={card.title} {...card} />
                        ))}
                    </div>
                </section>
            ))}

            <section className="space-y-6 rounded-3xl bg-surface p-6 shadow-lg">
                <header>
                    <h2 className="text-2xl font-bold text-text-primary">Giới thiệu khóa học</h2>
                    <p className="text-sm text-text-muted">
                        Thiết kế theo hành trình học tập số hoá, kết hợp mentorship công nghệ và
                        feedback theo dữ liệu.
                    </p>
                </header>
                <div className="grid gap-4 md:grid-cols-2">
                    {introHighlights.map((item) => (
                        <article
                            key={item.title}
                            className="space-y-2 rounded-2xl border border-border p-4"
                        >
                            <p className="text-xs uppercase tracking-wide text-text-muted">
                                {item.meta}
                            </p>
                            <h3 className="text-lg font-semibold text-text-primary">
                                {item.title}
                            </h3>
                            <p className="text-sm text-text-muted">{item.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="space-y-6 rounded-3xl bg-surface p-6 shadow-lg">
                <header>
                    <h2 className="text-2xl font-bold text-text-primary">Tin tức & Sự kiện</h2>
                    <p className="text-sm text-text-muted">
                        Cập nhật lịch sự kiện, hội thảo tuyển sinh và chương trình trải nghiệm STEM
                        hàng tháng.
                    </p>
                </header>
                <div className="grid gap-4 lg:grid-cols-3">
                    {newsEvents.map((event) => (
                        <article
                            key={event.title}
                            className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface-soft p-5"
                        >
                            <div>
                                <p className="text-xs uppercase tracking-[0.4em] text-text-muted">
                                    {event.date}
                                </p>
                                <h3 className="mt-3 text-lg font-semibold text-text-primary">
                                    {event.title}
                                </h3>
                                <p className="mt-2 text-sm text-text-secondary">
                                    {event.description}
                                </p>
                            </div>
                            <button className="mt-4 inline-flex items-center text-sm font-semibold text-info">
                                Xem chi tiết
                            </button>
                        </article>
                    ))}
                </div>
            </section>

            <section className="space-y-6 rounded-3xl bg-surface p-6 shadow-lg">
                <header>
                    <h2 className="text-2xl font-bold text-text-primary">Kho Học liệu số</h2>
                    <p className="text-sm text-text-muted">
                        Giải pháp học tập linh hoạt: tải ngay tài liệu, video hoặc đồng bộ vào hệ
                        thống LMS.
                    </p>
                </header>
                <div className="grid gap-4 md:grid-cols-3">
                    {digitalResources.map((resource) => (
                        <article
                            key={resource.title}
                            className="space-y-2 rounded-2xl border border-border p-4"
                        >
                            <h3 className="text-lg font-semibold text-text-primary">
                                {resource.title}
                            </h3>
                            <p className="text-sm text-text-muted">{resource.detail}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="space-y-6 rounded-3xl bg-gradient-to-br from-info to-accent p-6 text-surface shadow-xl">
                <header>
                    <h2 className="text-2xl font-bold">Tư vấn & Đăng ký</h2>
                    <p className="text-sm">
                        Chuyên gia METAS sẵn sàng tư vấn, lên lộ trình theo từng độ tuổi và mục tiêu
                        tuyển sinh.
                    </p>
                </header>
                <div className="grid gap-4 md:grid-cols-3">
                    {consultingSteps.map((step) => (
                        <article key={step.title} className="space-y-2 rounded-2xl bg-white/10 p-4">
                            <h3 className="text-lg font-semibold">{step.title}</h3>
                            <p className="text-sm">{step.description}</p>
                        </article>
                    ))}
                </div>
                <div className="flex flex-col gap-3 pt-2 md:flex-row md:items-center md:justify-between">
                    <span className="text-sm font-semibold uppercase tracking-wider">
                        1900 6933
                    </span>
                    <button className="rounded-full bg-surface px-6 py-3 text-sm font-semibold text-text-primary shadow-lg transition hover:bg-white/90">
                        Đăng ký tư vấn ngay
                    </button>
                </div>
            </section>
        </div>
    );
};

export default HomeContent;
