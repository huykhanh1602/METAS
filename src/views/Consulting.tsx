import React from "react";
import { MapPin, Phone, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "METAS tư vấn thế nào cho phụ huynh mới?",
        answer: "Chuyên gia sẽ gọi lại trong 24h, đề xuất lộ trình tách riêng cho từng khối lớp và mục tiêu tuyển sinh.",
    },
    {
        question: "Các phương thức thanh toán có hỗ trợ trả góp không?",
        answer: "Có, thanh toán linh hoạt theo giai đoạn, tích hợp qua cổng ngân hàng nội địa và MOMO.",
    },
    {
        question: "Làm sao để đặt lịch tham vấn trực tiếp?",
        answer: "Chọn khung giờ trống qua form đăng ký, sau đó cố vấn sẽ xác nhận trong 4h làm việc.",
    },
];

const Consulting = () => {
    return (
        <section className="container mx-auto space-y-8 px-4 py-10 sm:px-6 lg:px-8">
            <header className="space-y-2">
                <p className="text-xs uppercase tracking-[0.4em] text-info">Tư vấn & Đăng ký</p>
                <h1 className="text-3xl font-bold text-text-primary md:text-4xl">
                    Đăng ký tư vấn cho phụ huynh
                </h1>
                <p className="text-sm text-text-muted">
                    Gặp cố vấn METAS để xây dựng lộ trình học tập, hỗ trợ tài chính và giải đáp mọi
                    băn khoăn.
                </p>
            </header>

            <div className="grid gap-6 lg:grid-cols-2">
                <form className="space-y-4 rounded-3xl border border-border bg-surface p-6 shadow-lg">
                    <div>
                        <label className="text-xs uppercase tracking-[0.3em] text-text-muted">
                            Họ tên
                        </label>
                        <input
                            type="text"
                            className="mt-2 w-full rounded-2xl border border-border px-4 py-3 text-sm"
                            placeholder="Nguyễn Văn A"
                        />
                    </div>
                    <div>
                        <label className="text-xs uppercase tracking-[0.3em] text-text-muted">
                            Số điện thoại
                        </label>
                        <input
                            type="tel"
                            className="mt-2 w-full rounded-2xl border border-border px-4 py-3 text-sm"
                            placeholder="(+84) 912 345 678"
                        />
                    </div>
                    <div>
                        <label className="text-xs uppercase tracking-[0.3em] text-text-muted">
                            Khóa học quan tâm
                        </label>
                        <select className="mt-2 w-full rounded-2xl border border-border px-4 py-3 text-sm">
                            <option>Chọn ngành</option>
                            <option>AI Math</option>
                            <option>STEAM</option>
                            <option>Kỹ năng số</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-xs uppercase tracking-[0.3em] text-text-muted">
                            Lời nhắn
                        </label>
                        <textarea
                            className="mt-2 w-full rounded-2xl border border-border px-4 py-3 text-sm"
                            placeholder="Tôi muốn tư vấn về lộ trình lớp 6..."
                            rows={4}
                        />
                    </div>
                    <button className="w-full rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-lg">
                        Gửi yêu cầu tư vấn
                    </button>
                </form>

                <div className="space-y-6">
                    <div className="rounded-3xl border border-border bg-gradient-to-br from-info to-accent p-6 text-white shadow-xl">
                        <p className="text-xs uppercase tracking-[0.3em] text-white/80">
                            Liên hệ nhanh
                        </p>
                        <div className="mt-3 space-y-2 text-sm font-semibold">
                            <p className="flex items-center gap-2">
                                <Phone className="h-4 w-4" /> Hotline 1900 6933
                            </p>
                            <p className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" /> Tầng 4, Tòa nhà 252 Nguyễn Thị Định
                            </p>
                        </div>
                    </div>
                    <div className="rounded-3xl border border-border bg-surface p-6 shadow-lg">
                        <p className="text-xs uppercase tracking-[0.3em] text-text-muted">Bản đồ</p>
                        <div className="mt-3 aspect-[4/3] rounded-2xl bg-surface-soft">
                            <iframe
                                title="METAS Learning map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.632!2d105.7519!3d21.0094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9c1334987f%3AMETAS!2sMETAS+Learning!5e0!3m2!1sen!2s!4v1686182300000"
                                className="h-full w-full rounded-2xl"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-4 rounded-3xl border border-border bg-surface p-6 shadow-lg">
                <div className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-info" />
                    <h2 className="text-xl font-semibold text-text-primary">FAQ</h2>
                </div>
                <div className="space-y-3">
                    {faqs.map((faq) => (
                        <article
                            key={faq.question}
                            className="rounded-2xl border border-border-light bg-surface-soft p-4"
                        >
                            <p className="text-sm font-semibold text-text-primary">
                                {faq.question}
                            </p>
                            <p className="text-sm text-text-muted">{faq.answer}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Consulting;
