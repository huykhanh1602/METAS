export type PageId = "main" | "lms" | "courses" | "news" | "library" | "consulting";

export const navItems: { label: string; id: PageId }[] = [
    { label: "Trang chủ", id: "main" },
    { label: "Quản lý Đào tạo (LMS)", id: "lms" },
    { label: "Giới thiệu khóa học", id: "courses" },
    { label: "Tin tức & Sự kiện", id: "news" },
    { label: "Kho Học liệu số", id: "library" },
    { label: "Tư vấn & Đăng ký", id: "consulting" },
];
