import React from "react";
import { cn } from "@/lib/utils";

export interface BoundedProps {
    as?: React.ElementType;
    children: React.ReactNode;
    className?: string;
}

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
    ({as: Comp = "section", children, className, ...restProps }, ref) => {
        return (
            <Comp
                ref={ref}
                className={cn("px-4 py-10 md:px-6 md:py-14 lg:py-16", className)}
                {...restProps}
            >
                <div className="mx-auto w-full max-w-7xl">
                    {children}
                </div>
            </Comp>
        );
    }
);

Bounded.displayName = "Bounded";

export default Bounded;