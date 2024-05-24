"use client";

import Bounded from "@/components/Bounded";
import React, { useRef, useState } from "react";
import { Content } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Heading from "@/components/Heading";

export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

const PrismicList = ({ slice }: ProjectsProps): JSX.Element => {
	const components = useRef<HTMLDivElement>(null);

	return (
        // table format
		<div className="py-16">
			{slice.primary.project_details.map((project, index) => {
				return (
                    <div key={index} className="grid grid-cols-3 gap-4 my-10 py-6 px-2 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700">
                        <div className="col-span-1 gap-5">
                            <PrismicNextImage
                                field={project.project_image}
                                className="h-60 w-full object-cover rounded-xl"
                            />
                        </div>
                        <div className="col-span-2">
                            <Heading as="h3" size="md" className="text-blue-500 dark:text-slate-300">
                                {project.project_title}
                            </Heading>
                            <div className="prose prose-lg dark:text-slate-300 text-black">
                                <PrismicRichText field={project.project_description} />
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <PrismicNextLink
                                    field={project.project_live_url}
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Try now →
                                </PrismicNextLink>
                                <PrismicNextLink
                                    field={project.project_github_repo}
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    GitHub Repo
                                </PrismicNextLink>
                            </div>
                        </div>
                    </div>
				);
			})}
		</div>
	);
};

export default PrismicList;
