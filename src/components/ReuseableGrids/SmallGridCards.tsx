import Heading from "@/components/Heading";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";


export default function SmallGridCards(props:any) {
    const image = props.image;
    const techUsed = props.techUsed;
	return (
		<div className="w-60 bg-slate-300 dark:bg-slate-700 rounded-xl flex flex-col items-center justify-between">
			<div className="w-60 h-40 bg-slate-600 dark:bg-slate-500 flex items-center justify-center rounded-t-xl">
				<PrismicNextImage
					field={image}
					className="w-24 h-24"
				/>
			</div>
			<div className="py-10 text-[2rem]">
				{techUsed}
			</div>
		</div>
	);
}
