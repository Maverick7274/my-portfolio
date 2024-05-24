"use client";

import Bounded from "@/components/Bounded";
import React, { useRef, useState } from "react";
import { Content } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Heading from "@/components/Heading";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

const PrismicCard = ({ slice }: ProjectsProps): JSX.Element => {
	const components = useRef<HTMLDivElement>(null);

	return (
		<div className="grid md:grid-cols-2 grid-cols-1">
			{slice.primary.project_details.map((project, index) => {
				return (
					<CardContainer key={index} className="">
						<CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-950 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
							<CardItem
								translateZ="50"
								className="text-xl font-bold text-neutral-600 dark:text-white"
							>
								{project.project_title}
							</CardItem>
							<CardItem
								as="p"
								translateZ="60"
								className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
							>
								{project.project_tagline}
							</CardItem>
							<CardItem translateZ="100" className="w-full mt-4">
								<PrismicNextImage
									field={project.project_image}
									height="1000"
									width="1000"
									className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
								/>
							</CardItem>
							<div className="flex justify-between items-center mt-20">
								<CardItem
									translateZ={20}
									as={PrismicNextLink}
									field={project.project_live_url}
									className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
								>
									Try now →
								</CardItem>
								<CardItem
									translateZ={20}
									as={PrismicNextLink}
									className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
									field={project.project_github_repo}
								>
									GitHub Repo
								</CardItem>
							</div>
						</CardBody>
					</CardContainer>
				);
			})}
		</div>
	);
};

export default PrismicCard;
