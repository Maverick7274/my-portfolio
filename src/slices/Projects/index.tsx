"use client";

import Bounded from "@/components/Bounded";
import React, { useRef, useState } from "react";
import { Content } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Heading from "@/components/Heading";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import PrismicCard from "./Card";
import PrismicList from "./List";

/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects = ({ slice }: ProjectsProps): JSX.Element => {
	const components = useRef<HTMLDivElement>(null);

	const [view, setView] = useState("grid");

	const handleView = () => {
		if (view === "grid") {
			return (
				<PrismicCard slice={slice} index={0} slices={[]} context={undefined} />
			)
		} else {
			return <PrismicList slice={slice} index={0} slices={[]} context={undefined} />;
		}

		// Save view selected by user to local storage
	};

	return (
		<Bounded
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			ref={components}
		>
			<div className="py-10">
				<div className="flex md:flex-row flex-col items-center justify-between gap-6">
					<Heading
						as="h2"
						size="lg"
						className="col-start-1 dark:text-slate-300 text-blue-500"
					>
						{slice.primary.heading}
					</Heading>
					<div className="flex items-center justify-center gap-5">
						<div>View by:</div>
						<div className="flex items-center justify-center gap-5">
							<button
								onClick={() => setView("grid")}
								className={`hover:text-blue-500 p-4 ${
									view === "grid" && "text-blue-700 dark:text-blue-500 rounded border"
								}`}
							>
								<svg
									width="15"
									height="15"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12.5 2H8V7H13V2.5C13 2.22386 12.7761 2 12.5 2ZM13 8H8V13H12.5C12.7761 13 13 12.7761 13 12.5V8ZM7 7V2H2.5C2.22386 2 2 2.22386 2 2.5V7H7ZM2 8V12.5C2 12.7761 2.22386 13 2.5 13H7V8H2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5Z"
										fill="currentColor"
										fill-rule="evenodd"
										clip-rule="evenodd"
									></path>
								</svg>
							</button>
							<button
								onClick={() => setView("list")}
								className={`hover:text-blue-500 p-4 ${
									view === "list" && "text-blue-700 dark:text-blue-500 rounded border"
								}`}
							>
								<svg
									width="15"
									height="15"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1.5 5.25C1.91421 5.25 2.25 4.91421 2.25 4.5C2.25 4.08579 1.91421 3.75 1.5 3.75C1.08579 3.75 0.75 4.08579 0.75 4.5C0.75 4.91421 1.08579 5.25 1.5 5.25ZM4 4.5C4 4.22386 4.22386 4 4.5 4H13.5C13.7761 4 14 4.22386 14 4.5C14 4.77614 13.7761 5 13.5 5H4.5C4.22386 5 4 4.77614 4 4.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H13.5C13.7761 8 14 7.77614 14 7.5C14 7.22386 13.7761 7 13.5 7H4.5ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H13.5C13.7761 11 14 10.7761 14 10.5C14 10.2239 13.7761 10 13.5 10H4.5ZM2.25 7.5C2.25 7.91421 1.91421 8.25 1.5 8.25C1.08579 8.25 0.75 7.91421 0.75 7.5C0.75 7.08579 1.08579 6.75 1.5 6.75C1.91421 6.75 2.25 7.08579 2.25 7.5ZM1.5 11.25C1.91421 11.25 2.25 10.9142 2.25 10.5C2.25 10.0858 1.91421 9.75 1.5 9.75C1.08579 9.75 0.75 10.0858 0.75 10.5C0.75 10.9142 1.08579 11.25 1.5 11.25Z"
										fill="currentColor"
										fill-rule="evenodd"
										clip-rule="evenodd"
									></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
				{
					handleView()
				}
			</div>
		</Bounded>
	);
};

export default Projects;
