import React from "react";
import { Star, Filter } from "lucide-react";

const courses = [
    {
        title: "AI Explorers",
        level: "Lớp 4 - 5",
        skill: "Kỹ năng số",
        rating: 5,
        description: "Khóa học làm chủ trí tuệ nhân tạo với các dự án mini và bài tập tư duy.",
    },
    {
        title: "STEAM Olympiad",
        level: "Lớp 6 - 7",
        skill: "Kỹ năng ứng dụng",
        rating: 4,
        description: "Rèn luyện phản xạ giải quyết vấn đề nhanh và kỹ năng thuyết trình khoa học.",
    },
    {
        title: "Coding Foundations",
        level: "Lớp 1 - 3",
        skill: "Kỹ năng số",
        rating: 5,
        description: "Làm chủ logic lập trình qua robot, game và hoạt động trải nghiệm.",
    },
    {
        title: "AI Math Tournament",
        level: "Lớp 5 - 6",
        skill: "AI",
        rating: 4,
        description: "Luyện thi toán kết hợp AI prediction để tăng độ chính xác của bài giải.",
    },
];

const filterBadges = ["Lớp 1", "Lớp 2", "Lớp 3", "Kỹ năng số", "AI"];

const CoursesOverview = () => {
    return (
        <section className="container mx-auto space-y-8 px-4 py-10 sm:px-6 lg:px-8">
            <header className="space-y-2">
                <p className="text-xs uppercase tracking-[0.4em] text-info">Giới thiệu khóa học</p>
                <h1 className="text-3xl font-bold text-text-primary md:text-4xl">
                    Danh mục khóa học
                </h1>
                <p className="text-sm text-text-muted">
                    Lọc theo khối lớp & kỹ năng để tối ưu lộ trình học tập cho từng học viên.
                </p>
            </header>

            <div className="grid gap-6 lg:grid-cols-[260px,1fr]">
                <aside className="space-y-4 rounded-3xl border border-border bg-surface p-4 shadow-sm">
                    <div className="flex items-center gap-2 text-sm font-semibold text-text-primary">
                        <Filter className="h-4 w-4 text-info" />
                        <span>Bộ lọc</span>
                    </div>
                    <div className="space-y-3">
                        {filterBadges.map((filter) => (
                            <button
                                key={filter}
                                className="flex w-full items-center justify-between rounded-2xl border border-border-light px-4 py-2 text-sm font-semibold text-text-secondary transition hover:border-info hover:text-info"
                            >
                                <span>{filter}</span>
                                <span className="text-xs text-text-muted">4</span>
                            </button>
                        ))}
                    </div>
                </aside>

                <div className="space-y-6">
                    <div className="rounded-3xl bg-gradient-to-r from-info to-accent p-6 text-white shadow-lg">
                        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                            <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-white/80">
                                    Ưu đãi dành cho học viên mới
                                </p>
                                <h2 className="text-2xl font-bold">
                                    Tặng 3 buổi học thử & voucher 15%
                                </h2>
                                <p className="text-sm text-white/80">
                                    Đăng ký trước 15/05 để nhận lộ trình cá nhân hóa và mentor 1:1.
                                </p>
                            </div>
                            <button className="rounded-full border border-white/60 px-6 py-2 text-sm font-semibold">
                                Đăng ký ngay
                            </button>
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {courses.map((course) => (
                            <article
                                key={course.title}
                                className="flex h-full flex-col rounded-3xl border border-border bg-surface p-5 shadow-lg"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="rounded-full bg-surface-soft px-3 py-1 text-xs font-semibold text-text-secondary">
                                        {course.level}
                                    </span>
                                    <span className="text-xs font-semibold text-accent">
                                        {course.skill}
                                    </span>
                                </div>
                                <h3 className="mt-3 text-xl font-semibold text-text-primary">
                                    {course.title}
                                </h3>
                                <p className="mt-2 text-sm text-text-muted">{course.description}</p>
                                <div className="mt-4 flex items-center gap-1 text-sm text-text-muted">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <Star
                                            key={index}
                                            className={
                                                index < course.rating
                                                    ? "h-4 w-4 text-accent"
                                                    : "h-4 w-4 text-border"
                                            }
                                        />
                                    ))}
                                </div>
                                <button className="mt-6 rounded-2xl bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-primary-dark">
                                    Đăng ký ngay
                                </button>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursesOverview;
