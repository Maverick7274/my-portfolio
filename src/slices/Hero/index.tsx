"use client";
import React, { useEffect, useRef } from "react";
import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
import Bounded from "@/components/Bounded";
import { Button } from "@/components/ui/button";
import { WavyBackground } from "@/components/ui/wavy-background";
// import { Vortex } from "@/components/ui/vortex";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
	const components = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let ctx = gsap.context(() => {
			const tl = gsap.timeline();

			// tl.fromTo(".welcome", {
			// 	scale: 0,
			// 	opacity: 0,
			// }, {
			// 	scale: 1,
			// 	opacity: 1,
			// 	duration:2.5,
			// 	ease: "bounce.inOut",
			// })

			tl.fromTo(
				".name-animation",
				{
					x: -100,
					opacity: 0,
					rotate: -10,
				},
				{
					x: 0,
					opacity: 1,
					rotate: 0,
					stagger: {
						each: 0.1,
						from: "random",
					},
					duration: 1,
					ease: "back.out(2)",
				}
			);

			tl.fromTo(
				".job-title",
				{
					y: 20,
					opacity: 0,
					scale: 1.2,
				},
				{
					y: 0,
					opacity: 1,
					duration: 1,
					delay: 0.5,
					scale: 1,
					ease: "back.out(1.7)",
				}
			);

			tl.fromTo(
				".tag-line",
				{
					y: 20,
					opacity: 0,
					scale: 1.2,
				},
				{
					y: 0,
					opacity: 1,
					duration: 1,
					delay: 0.5,
					scale: 1,
					ease: "back.out(1.7)",
				}
			);
		}, components);
		return () => ctx.revert();
	}, []);

	const renderLetters = (name: KeyTextField, key: string) => {
		if (!name) return;
		return name.split("").map((letter, index) => (
			<span
				key={key + index}
				className={`name-animation name-animation-${key} inline-block opacity-0`}
			>
				{letter}
			</span>
		));
	};

	return (
		<WavyBackground>
			<Bounded
				data-slice-type={slice.slice_type}
				data-slice-variation={slice.variation}
				ref={components}
			>
				<div className="min-h-[70vh] grid md:grid-cols-2 grid-cols-1 items-center">
					<div className="md:row-start-1 col-start-1 relative">
						<h6 className="job-title block bg-gradient-to-tr dark:from-yellow-500 from-blue-200 dark:via-yellow-200 via-blue-900 dark:to-yellow-200 to-blue-500 bg-clip-text text-sm font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-xl">
							{slice.primary.job_title}
						</h6>
						<h1
							className="mb-8 text-[clamp(3rem,15vmin,20rem)] font-extrabold leading-none tracking-tighter"
							aria-label={
								slice.primary.first_name +
								" " +
								slice.primary.last_name
							}
						>
							<span className="block dark:text-slate-300 text-gray-700">
								{renderLetters(
									slice.primary.first_name,
									"first"
								)}
							</span>{" "}
							<span className="block -mt-[.2em] dark:text-slate-100">
								{renderLetters(slice.primary.last_name, "last")}
							</span>
						</h1>
						<p className="tag-line text-[1.5rem] opacity-0">
							{slice.primary.tag_line}
						</p>
					</div>
					<div></div>
				</div>
			</Bounded>
		</WavyBackground>
	);
};

export default Hero;
