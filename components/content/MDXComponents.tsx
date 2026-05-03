import type { MDXComponents } from "mdx/types";
import NextLink from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children, ...rest }) => {
      const isExternal = href?.startsWith("http");
      if (isExternal) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
            {children}
          </a>
        );
      }
      return (
        <NextLink href={href ?? "#"} {...rest}>
          {children}
        </NextLink>
      );
    },
    ...components,
  };
}
