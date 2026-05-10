import React from "react";
import { ArrowRight } from "lucide-react";

interface CardProps {
    badge: string;
    title: string;
    description: string;
    actionLabel: string;
    image?: string;
    accent?: string;
}

const Card: React.FC<CardProps> = ({ badge, title, description, actionLabel, image, accent }) => {
    const buttonClass =
        "mt-5 inline-flex w-full items-center justify-between rounded-2xl px-4 py-2 text-sm font-semibold text-white shadow text-white";

    return (
        <article className="flex h-full flex-col rounded-3xl bg-surface p-4 shadow-lg transition hover:shadow-xl">
            <div className="relative mb-4 h-40 overflow-hidden rounded-2xl bg-surface-soft">
                <img
                    src={image ?? "/sample.jpg"}
                    alt={title}
                    className="h-full w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full border border-border bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-text-secondary">
                    {badge}
                </span>
            </div>
            <div className="flex-1">
                <h3 className="text-lg font-bold text-text-primary">{title}</h3>
                <p className="mt-2 text-sm text-text-muted">{description}</p>
            </div>
            <button className={buttonClass}>
                <span>{actionLabel}</span>
                <ArrowRight className="ml-2 h-4 w-4" />
            </button>
        </article>
    );
};

export default Card;
