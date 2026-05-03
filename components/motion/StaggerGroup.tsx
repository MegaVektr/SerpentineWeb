"use client";

import { Children, cloneElement, isValidElement } from "react";
import { Reveal } from "@/components/motion/Reveal";

export function StaggerGroup({
  children,
  step = 60,
  baseDelay = 0,
}: {
  children: React.ReactNode;
  step?: number;
  baseDelay?: number;
}) {
  return (
    <>
      {Children.map(children, (child, i) => {
        const delay = baseDelay + i * step;
        if (isValidElement(child) && child.type === Reveal) {
          return cloneElement(child as React.ReactElement<{ delay?: number }>, {
            delay,
          });
        }
        return <Reveal delay={delay}>{child}</Reveal>;
      })}
    </>
  );
}
