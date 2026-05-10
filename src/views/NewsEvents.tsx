import React from "react";
import { Calendar } from "lucide-react";

const featuredPost = {
    title: "METAS Learning mở rộng phòng lab AI",
    date: "10/05/2026",
    summary:
        "Khám phá không gian luyện tập AI mới với phòng lab ảo, mentor công nghệ và thư viện mã nguồn mở.",
    image: "/slide2.jpg",
};

const posts = [
    {
        title: "Sự kiện STEM tháng 6",
        date: "25/06/2026",
        summary: "Chuỗi trải nghiệm kỹ thuật số sở hữu mentor và phản hồi từ chuyên gia quốc tế.",
    },
    {
        title: "Chương trình thực tập sư phạm",
        date: "15/07/2026",
        summary: "Hợp tác cùng các trường đại học, cung cấp học bổng và tài trợ thiết bị.",
    },
    {
        title: "Bản tin Lập trình Robot",
        date: "03/08/2026",
        summary: "Chia sẻ hướng dẫn dự án, repo mẫu và vòng thi đua trí tuệ nhân tạo.",
    },
];

const popularNews = [
    "METAS nhận giải Sáng tạo giáo dục",
    "Kỷ niệm 5 năm hành trình học sinh đạt giải quốc tế",
    "Thông báo tuyển dụng mentor AI",
];

const NewsEvents = () => {
    return (
        <section className="container mx-auto space-y-8 px-4 py-10 sm:px-6 lg:px-8">
            <header className="space-y-2">
                <p className="text-xs uppercase tracking-[0.4em] text-info">Tin tức & sự kiện</p>
                <h1 className="text-3xl font-bold text-text-primary md:text-4xl">
                    Blog giáo dục METAS
                </h1>
                <p className="text-sm text-text-muted">
                    Cập nhật nhanh các sự kiện, chương trình đào tạo, hội thảo STEM và thông tin
                    tuyển dụng.
                </p>
            </header>

            <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
                <div className="space-y-6">
                    <article className="overflow-hidden rounded-3xl border border-border bg-surface shadow-lg">
                        <img
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            className="h-64 w-full object-cover"
                        />
                        <div className="space-y-3 p-6">
                            <p className="flex items-center gap-2 text-xs font-semibold text-info">
                                <Calendar className="h-4 w-4" />
                                <span>{featuredPost.date}</span>
                            </p>
                            <h2 className="text-2xl font-bold text-text-primary">
                                {featuredPost.title}
                            </h2>
                            <p className="text-sm text-text-muted">{featuredPost.summary}</p>
                        </div>
                    </article>
                    <div className="grid gap-4 md:grid-cols-2">
                        {posts.map((post) => (
                            <article
                                key={post.title}
                                className="space-y-2 rounded-3xl border border-border bg-surface p-5 shadow-lg"
                            >
                                <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
                                    {post.date}
                                </p>
                                <h3 className="text-lg font-semibold text-text-primary">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-text-muted">{post.summary}</p>
                            </article>
                        ))}
                    </div>
                </div>
                <aside className="space-y-6 rounded-3xl border border-border bg-surface p-6 shadow-sm">
                    <div>
                        <h3 className="text-xs uppercase tracking-[0.3em] text-text-muted">
                            Xem nhiều nhất
                        </h3>
                        <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                            {popularNews.map((item) => (
                                <li
                                    key={item}
                                    className="rounded-2xl border border-border-soft px-4 py-3"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
                            Theo dõi METAS
                        </p>
                        <div className="flex gap-3 text-info">
                            <span className="rounded-full border border-info px-3 py-1 text-xs font-semibold">
                                Facebook
                            </span>
                            <span className="rounded-full border border-info px-3 py-1 text-xs font-semibold">
                                YouTube
                            </span>
                            <span className="rounded-full border border-info px-3 py-1 text-xs font-semibold">
                                Linkedin
                            </span>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default NewsEvents;
