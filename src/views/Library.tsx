import React from "react";
import { FileText, Video, Zap } from "lucide-react";

const categories = [
    { label: "Video bài giảng", icon: Video },
    { label: "File PDF", icon: FileText },
    { label: "Bài tập trắc nghiệm", icon: Zap },
];

const documents = [
    {
        title: "Bộ đề AI Math",
        type: "PDF",
        size: "4.2MB",
        updated: "12/05/2026",
    },
    {
        title: "Video hướng dẫn Robotics",
        type: "Video",
        size: "1h 30m",
        updated: "08/05/2026",
    },
    {
        title: "Bài tập trắc nghiệm STEAM",
        type: "Quiz",
        size: "32 câu",
        updated: "05/05/2026",
    },
];

const Library = () => {
    return (
        <section className="container mx-auto space-y-8 px-4 py-10 sm:px-6 lg:px-8">
            <header className="space-y-2">
                <p className="text-xs uppercase tracking-[0.4em] text-info">Kho học liệu số</p>
                <h1 className="text-3xl font-bold text-text-primary md:text-4xl">
                    Thư viện tài liệu
                </h1>
                <p className="text-sm text-text-muted">
                    Tìm kiếm nhanh các tài liệu video, PDF và bài tập thách thức. Hệ thống tải xuống
                    một chạm, phân loại rõ ràng.
                </p>
            </header>

            <div className="space-y-6 rounded-3xl border border-border bg-surface p-6 shadow-lg">
                <div className="space-y-3">
                    <input
                        type="search"
                        placeholder="Tìm tài liệu, khóa học, môn học..."
                        className="w-full rounded-2xl border border-border px-4 py-3 text-sm font-medium focus:border-info focus:outline-none"
                    />
                    <div className="flex flex-wrap gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.label}
                                className="flex items-center gap-2 rounded-2xl border border-border px-3 py-2 text-sm font-semibold text-text-secondary"
                            >
                                <category.icon className="h-4 w-4 text-accent" />
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    {documents.map((doc) => (
                        <article
                            key={doc.title}
                            className="flex flex-col gap-3 rounded-3xl border border-border-light bg-surface p-4 sm:flex-row sm:items-center sm:justify-between"
                        >
                            <div>
                                <h3 className="text-lg font-semibold text-text-primary">
                                    {doc.title}
                                </h3>
                                <p className="text-sm text-text-muted">
                                    {doc.type} · {doc.size} · Cập nhật {doc.updated}
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 text-xs text-text-muted">
                                <span>
                                    {doc.type === "Video" ? "Phát trực tuyến" : "Tải xuống"}
                                </span>
                                <button className="rounded-full border border-accent px-4 py-2 text-xs font-semibold text-accent">
                                    Tải xuống
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="flex items-center justify-between text-xs font-semibold text-text-secondary">
                    <span>Trang 1/5</span>
                    <div className="flex items-center gap-2">
                        <button className="rounded-full border border-border px-3 py-1">
                            Trước
                        </button>
                        <button className="rounded-full border border-border px-3 py-1">
                            Tiếp
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Library;
