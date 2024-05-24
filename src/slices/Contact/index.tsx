"use client";

import { useRef } from "react";
import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact = ({ slice }: ContactProps): JSX.Element => {
	const components = useRef<HTMLDivElement>(null);

	return (
		<Bounded
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			ref={components}
		>
			<div className="grid md:grid-cols-2 grid-cols-1 gap-16 w-full">
				<div>
					<Heading
						as="h1"
						size="lg"
						className="col-start-1 dark:text-slate-300 text-blue-700"
					>
						Contact Me
					</Heading>
          <div className="prose prose-lg dark:text-slate-300 text-black col-start-1">
            <PrismicRichText field={slice.primary.contact_description} />
          </div>
				</div>

				<div className="w-full flex items-center justify-center">
					<form className="w-full flex flex-col gap-6">
						<div className="flex flex-col">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								id="name"
								name="name"
								className="border-2 border-gray-200 dark:border-slate-900 dark:bg-slate-800 dark:text-slate-300 text-black p-2 rounded-md"
							/>
						</div>
						<div className="flex flex-col">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								className="border-2 border-gray-200 dark:border-slate-900 dark:bg-slate-800 dark:text-slate-300 text-black p-2 rounded-md"
							/>
						</div>
						<div className="flex flex-col">
							<label htmlFor="message">Message</label>
							<textarea
								id="message"
								name="message"
								className="border-2 border-gray-200 dark:border-slate-900 dark:bg-slate-800 dark:text-slate-300 text-black p-2 rounded-md"
							/>
						</div>
						<div className="grid justify-end py-4">
              <Button type="submit">Submit</Button>
            </div>
					</form>
				</div>
				<div className="">
					<Heading
						as="h2"
						size="sm"
						className="col-start-1 dark:text-slate-300 text-blue-700"
					>
						My Details
					</Heading>
					<div className="prose prose-lg dark:text-slate-300 text-black col-start-1">
						<p className="prose prose-lg dark:text-slate-300 text-black col-start-1">
							<b>Email Address</b>
							{` `}: {slice.primary.mail_id}
						</p>
						<p className="prose prose-lg dark:text-slate-300 text-black col-start-1">
							<b>Work Address</b>
							{` `}: {slice.primary.work_address}
						</p>
					</div>
				</div>
			</div>
		</Bounded>
	);
};

export default Contact;
