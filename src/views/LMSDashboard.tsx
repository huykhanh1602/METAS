import React from "react";
import { BookOpen, ClipboardList, CalendarDays, BellRing } from "lucide-react";

const quickLinks = [
    { label: "Khóa học", description: "Quản lý tất cả khóa học đang học", icon: BookOpen },
    { label: "Bài tập", description: "Theo dõi tiến độ ôn luyện", icon: ClipboardList },
    { label: "Lịch học", description: "Lịch học cá nhân và thông báo", icon: CalendarDays },
];

const enrolledCourses = [
    {
        title: "Luyện Toán logic theo chuẩn Singapore",
        progress: 78,
        nextSession: "Cập nhật 09:00 - 09/05",
        badge: "Lớp 5",
    },
    {
        title: "Học sâu AI tư duy số",
        progress: 54,
        nextSession: "Cập nhật 14:00 - 11/05",
        badge: "Kỹ năng số",
    },
    {
        title: "Đọc hiểu & viết luận tiếng Anh",
        progress: 92,
        nextSession: "Cập nhật 17:30 - 12/05",
        badge: "Lớp 6",
    },
];

const dashboardNotifications = [
    {
        title: "Giáo viên gửi phản hồi",
        detail: "Anh Hiếu đã chỉnh sửa bài toán kỳ vọng",
    },
    {
        title: "Lịch học mới",
        detail: "Bổ sung giờ tham vấn 1-1 cho AI Math",
    },
];

const LMSDashboard = () => {
    return (
        <section className="container mx-auto space-y-8 px-4 py-10 sm:px-6 lg:px-8">
            <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.4em] text-info">Quản lý đào tạo</p>
                <h1 className="text-3xl font-bold text-text-primary md:text-4xl">
                    Dashboard người học
                </h1>
                <p className="text-sm text-text-muted">
                    Theo dõi kế hoạch học tập, hoàn thành bài tập, và lịch học trong một không gian
                    trực quan, đồng bộ với METAS LMS.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[280px,1fr]">
                <aside className="space-y-4 rounded-3xl border border-border bg-surface p-4 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
                        Thanh điều hướng
                    </p>
                    <div className="space-y-3">
                        {quickLinks.map((link) => (
                            <div
                                key={link.label}
                                className="flex items-start gap-3 rounded-2xl border border-border-light bg-surface-soft px-3 py-3"
                            >
                                <link.icon className="h-6 w-6 text-accent" />
                                <div>
                                    <p className="text-sm font-semibold text-text-primary">
                                        {link.label}
                                    </p>
                                    <p className="text-xs text-text-muted">{link.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl bg-gradient-to-r from-accent to-accent-dark p-4 text-sm font-semibold text-white">
                        <p className="text-xs uppercase tracking-[0.3em]">Đăng ký nhanh</p>
                        <p className="mt-2 text-base">Luôn có cố vấn học tập hỗ trợ từng tuần.</p>
                    </div>
                </aside>

                <div className="space-y-6">
                    <section className="space-y-4 rounded-3xl border border-border bg-surface p-6 shadow-lg">
                        <header className="flex items-center justify-between">
                            <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
                                    Khóa học đang tham gia
                                </p>
                                <h2 className="text-xl font-bold text-text-primary">
                                    Tiến độ cá nhân
                                </h2>
                            </div>
                            <span className="rounded-full border border-info/50 px-3 py-1 text-xs font-semibold text-info">
                                03 khóa
                            </span>
                        </header>
                        <div className="space-y-4">
                            {enrolledCourses.map((course) => (
                                <article
                                    key={course.title}
                                    className="space-y-3 rounded-2xl border border-border-light bg-surface p-4"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="rounded-full bg-surface-soft px-3 py-1 text-xs font-semibold text-text-secondary">
                                            {course.badge}
                                        </span>
                                        <p className="text-xs text-text-muted">
                                            {course.nextSession}
                                        </p>
                                    </div>
                                    <h3 className="text-lg font-semibold text-text-primary">
                                        {course.title}
                                    </h3>
                                    <div className="space-y-1">
                                        <div className="flex items-center justify-between text-xs font-semibold text-text-muted">
                                            <span>Tiến độ</span>
                                            <span>{course.progress}%</span>
                                        </div>
                                        <div className="h-2 rounded-full bg-surface-soft">
                                            <div
                                                className="h-full rounded-full bg-accent"
                                                style={{ width: `${course.progress}%` }}
                                            />
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="flex flex-col gap-4 lg:flex-row">
                        <div className="flex-1 rounded-3xl border border-border bg-surface p-6 shadow-lg">
                            <header className="flex items-center justify-between">
                                <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
                                    Thông báo
                                </p>
                                <span className="text-xs font-semibold text-info">
                                    Cập nhật mới
                                </span>
                            </header>
                            <div className="mt-4 space-y-3">
                                {dashboardNotifications.map((note) => (
                                    <article
                                        key={note.title}
                                        className="space-y-1 rounded-2xl border border-border-light bg-surface-soft p-4"
                                    >
                                        <div className="flex items-center gap-2">
                                            <BellRing className="h-5 w-5 text-info" />
                                            <p className="text-sm font-semibold text-text-primary">
                                                {note.title}
                                            </p>
                                        </div>
                                        <p className="text-sm text-text-muted">{note.detail}</p>
                                    </article>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 rounded-3xl border border-border bg-gradient-to-br from-info to-accent p-6 text-white shadow-xl">
                            <p className="text-xs uppercase tracking-[0.3em]">Lịch học</p>
                            <p className="mt-3 text-xl font-semibold">Thứ sáu, 10/05</p>
                            <ul className="mt-4 space-y-3 text-sm">
                                <li className="flex items-center justify-between">
                                    <span>09:00 - 10:30</span>
                                    <span className="text-xs font-semibold text-white/80">
                                        AI Math
                                    </span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span>14:00 - 15:30</span>
                                    <span className="text-xs font-semibold text-white/80">
                                        Tự học
                                    </span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span>17:30 - 19:00</span>
                                    <span className="text-xs font-semibold text-white/80">
                                        Đọc hiểu
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default LMSDashboard;
