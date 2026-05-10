import React from "react";

const courses = ["Toán lớp 1", "Toán lớp 2", "Bồi dưỡng kỹ năng số", "Kỹ năng ứng dụng AI"];

const Sidebar = () => {
    return (
        <aside className="flex h-full flex-col rounded-3xl border border-border bg-surface p-5 shadow-sm shadow-border-muted">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-text-muted">
                Các khóa học
            </div>
            <ul className="space-y-3">
                {courses.map((course) => (
                    <li
                        key={course}
                        className="flex items-center justify-between rounded-2xl border border-border-light bg-surface-soft px-4 py-3 text-sm font-medium text-text-secondary"
                    >
                        <span>{course}</span>
                        <span className="h-2 w-2 rounded-full bg-info" />
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
