import React from "react";
import { MessageCircle } from "lucide-react";

const FloatingButton = () => {
    return (
        <div className="fixed bottom-6 right-6 z-50 h-12 w-12 cursor-pointer group">
            {/* Lớp nền thần kỳ - Đây là thứ sẽ mở rộng ra */}
            <div className="absolute top-0 right-0 h-full flex items-center justify-center rounded-full bg-primary shadow-slate-900/60 transition-all duration-500 ease-in-out w-12 group-hover:w-64 group-hover:px-5 group-hover:bg-primary">
                {/* Icon - Luôn cố định bên phải */}
                <MessageCircle className="h-5 w-5 shrink-0 text-white" />

                {/* Văn bản - Mờ dần và trượt vào khi hover */}
                <span className="overflow-hidden whitespace-nowrap text-sm font-semibold text-white transition-all duration-500 ease-in-out max-w-0 opacity-0 group-hover:max-w-52 group-hover:opacity-100 group-hover:ml-2">
                    Chatbot AI tư vấn 24/7
                </span>
            </div>
        </div>
    );
};

export default FloatingButton;
