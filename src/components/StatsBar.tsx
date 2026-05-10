import React from "react";

const stats = [
    "Hệ thống LMS thông minh",
    "Chatbot AI tư vấn 24/7",
    "Thanh toán online tiện lợi",
    "Báo cáo tiến độ trực quan",
];

const StatsBar = () => {
    return (
        <div className="mx-auto my-10 max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-info to-success px-4 py-6 text-xs font-semibold uppercase tracking-[0.3em] text-surface sm:px-8 sm:text-sm">
            <div className="flex flex-wrap items-center justify-center gap-6">
                {stats.map((item) => (
                    <span key={item} className="whitespace-nowrap">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default StatsBar;
