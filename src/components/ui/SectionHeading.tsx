import React from "react";

interface SectionHeadingProps {
  pill?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  pill,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClasses =
    align === "center"
      ? "text-center mx-auto items-center"
      : "text-left items-start";

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses} ${className}`}>
      {pill && (
        <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#dfedf1] text-[#18444f] border border-[#c4e0e8] mb-3">
          {pill}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1D243C] leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#3f4c7c] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
