"use client";

import React, { useRef } from "react";
import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import PrismicButton from "@/components/PrismicButton";
import { PrismicNextImage } from "@prismicio/next";
import Avatar from "@/components/Avatar";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
	const components = useRef<HTMLDivElement>(null);

	return (
		<Bounded
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			ref={components}
		>
			<div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
				<Heading
					as="h2"
					size="lg"
					className="col-start-1 dark:text-slate-300 text-blue-700"
				>
					{slice.primary.heading}
				</Heading>
				<div className="prose prose-lg dark:text-slate-300 text-black col-start-1">
					<PrismicRichText field={slice.primary.description} />
				</div>
				<PrismicButton
					label={slice.primary.button_label}
					linkField={slice.primary.button_link}
				/>

				<Avatar
					image={slice.primary.avatar}
					className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
				/>
			</div>
		</Bounded>
	);
};

export default About;
