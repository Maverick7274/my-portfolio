import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import SmallGridCards from "@/components/ReuseableGrids/SmallGridCards";
import GridCards from "@/components/ReuseableGrids/GridCards";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Skills`.
 */
export type SkillsProps = SliceComponentProps<Content.SkillsSlice>;

const Skills = ({ slice }: SkillsProps): JSX.Element => {
	return (
		<Bounded
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<div className="flex flex-col justify-between gap-10 py-16">
				<div>
					<Heading
						as="h2"
						size="lg"
						className="col-start-1 dark:text-slate-300 text-blue-500"
					>
						{slice.primary.heading}
					</Heading>
				</div>
				<div className="flex flex-col items-center justify-center gap-5">
						<div>
							<Heading
								as="h2"
								size="md"
								className="col-start-1 dark:text-slate-300 text-zinc-700 text-center"
							>
								{slice.primary.sub_heading[0]?.sub_heading_content}
							</Heading>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-5 gap-y-10 gap-x-8">
							{slice.primary.top_lang.map((skill, index) => {
								return (
									<SmallGridCards
										key={index}
										image={skill.technology_image}
										techUsed={skill.technologies_used}
									/>
								);
							})}
						</div>
					</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					<div className="flex flex-col items-center justify-center gap-5">
						<div>
							<Heading
								as="h2"
								size="md"
								className="col-start-1 dark:text-slate-300 text-zinc-700 text-center"
							>
								{slice.primary.sub_heading[1]?.sub_heading_content}
							</Heading>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8">
							{slice.primary.frontend.map((skill, index) => {
								return (
									<SmallGridCards
										key={index}
										image={skill.technology_image}
										techUsed={skill.technologies_used}
									/>
								);
							})}
						</div>
					</div>
					<div className="flex flex-col items-center justify-center gap-5">
						<div>
							<Heading
								as="h2"
								size="md"
								className="col-start-1 dark:text-slate-300 text-zinc-700 text-center"
							>
								{slice.primary.sub_heading[2]?.sub_heading_content}
							</Heading>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8">
							{slice.primary.backend.map((skill, index) => {
								return (
									<SmallGridCards
										key={index}
										image={skill.technology_image}
										techUsed={skill.technologies_used}
									/>
								);
							})}
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center gap-5">
						<div>
							<Heading
								as="h2"
								size="md"
								className="col-start-1 dark:text-slate-300 text-zinc-700 text-center"
							>
								{slice.primary.sub_heading[3]?.sub_heading_content}
							</Heading>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-5 gap-y-10 gap-x-8">
							{slice.primary.devops.map((skill, index) => {
								return (
									<SmallGridCards
										key={index}
										image={skill.technology_image}
										techUsed={skill.technologies_used}
									/>
								);
							})}
						</div>
					</div>
			</div>
		</Bounded>
	);
};

export default Skills;
