import { PrismicNextLink } from "@prismicio/next";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import clsx from "clsx";
import { KeyTextField, LinkField } from "@prismicio/client";

type ButtonProps = {
	linkField: LinkField;
	label: KeyTextField;
	showIcon?: boolean;
	className?: string;
};

export default function Button({
	linkField,
	label,
	showIcon = true,
	className,
}: ButtonProps) {
	return (
		<PrismicNextLink
            target="_blank"
			field={linkField}
			className={clsx(
				"group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105 hover:text-white",
				className
			)}
		>
			<span
				className={clsx(
					"absolute inset-0 z-0 h-full translate-y-9 dark:bg-blue-300 bg-blue-700 transition-transform duration-300 ease-in-out group-hover:translate-y-0"
				)}
			/>
			<span className="relative flex items-center justify-center gap-2 dark:text-black">
				{label}{" "}
				{showIcon && <MdArrowOutward className="inline-block" />}
			</span>
		</PrismicNextLink>
	);
}
