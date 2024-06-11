"use client";

import Bounded from "@/components/Bounded";
import React, { useRef, useState } from "react";
import { Content } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Heading from "@/components/Heading";
import FormatDate from "@/components/FormatDate";

/**
 * Props for `Experience`.
 */
export type ExperienceProps = SliceComponentProps<Content.ExperienceSlice>;

/**
 * Component for "Experience" Slices.
 */
const Experience = ({ slice }: ExperienceProps): JSX.Element => {
	const components = useRef<HTMLDivElement>(null);

	const [org, setOrg] = useState(0);

	const handleOrg = (index: number) => {
		setOrg(index);
	};

	return (
		<Bounded
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			ref={components}
		>
			<div>
				<div>
					<Heading
						as="h2"
						size="md"
						className="col-start-1 dark:text-slate-300 text-blue-500"
					>
						{slice.primary.heading}
					</Heading>
				</div>
				<div>
					<div className="flex md:flex-row flex-col justify-between w-full gap-5 py-16">
						<div className="grid md:grid-flow-row grid-flow-col items-center gap-5">
							{slice.primary.organizations.map(
								(organization, index) => {
									return (
										<div
											onClick={() => handleOrg(index)}
											className={`py-5 px-2 flex items-center gap-7 rounded-md md:text-xl text-sm font-extrabold hover:bg-slate-500 hover:text-white dark:hover:bg-slate-700 hover:cursor-pointer text-right ${org === index ? "bg-gray-300 dark:bg-slate-700 text-black dark:text-white" : "bg-none dark:text-white text-black"}`}
											key={index}
										>
											<div className="rounded-full p-2 bg-gray-200 dark:bg-slate-800 flex items-center justify-center">
												<PrismicNextImage
													field={
														organization.organization_logo
													}
													className="md:w-10 w-6 md:h-10 h-6 object-cover"
												/>
											</div>
											<p className="">
												{organization.organization_name}
											</p>
										</div>
									);
								}
							)}
						</div>
						<div className="flex flex-col gap-5 dark:bg-slate-900 bg-slate-200 rounded-xl">
							<div className="p-10 bg-slate-100 rounded-t-xl border">
								<Heading
									as="h3"
									size="sm"
									className="col-start-1 dark:text-slate-700 text-blue-500"
								>
									<span className="block leading-none tracking-tighter">
									{
										slice.primary.organizations[org]
											?.job_title
									}
									</span>
									{" "}
									@{" "}
									<PrismicNextLink
										className="text-blue-700 hover:text-blue-900 hover:underline"
										field={
											slice.primary.organizations[org]
												?.organization_website_link
										}
									>
										{
											slice.primary.organizations[org]
												?.organization_name
										}
									</PrismicNextLink>
								</Heading>
							</div>
							<div className="flex justify-between items-center w-full px-10">
								<div className="p-5">
									<p>
										{
											slice.primary.organizations[org]
												?.job_type
										}
									</p>
								</div>
								<div className="p-5">
                                    <span className="">
                                        <FormatDate dateString={slice.primary.organizations[org]?.start_of_experience} />
                                    </span>
                                    {" - "}
                                    <span className="">
                                        {
                                            slice.primary.organizations[org]?.currently_working === true ? "Present" : <FormatDate dateString={slice.primary.organizations[org]?.end_of_experience} />
                                        }
                                    </span>
                                </div>
							</div>
							<div className="flex flex-col w-full p-5 items-center justify-between">
								<div className="prose prose-sm dark:text-slate-300 text-black col-start-1">
									<PrismicRichText
										field={
											slice.primary.organizations[org]
												?.job_description
										}
									/>
								</div>
							</div>
						</div>
					</div>
					<div></div>
				</div>
			</div>
		</Bounded>
	);
};

export default Experience;
