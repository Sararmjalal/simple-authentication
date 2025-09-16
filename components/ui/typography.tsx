"use client"

/**
* Reimplementation of the shadcn/ui Typography examples (from
* https://ui.shadcn.com/docs/components/typography). This file exports small
* semantic components that mirror the utility-class usage shown in the docs.
*
* Note: This is intentionally minimal — each export is a tiny wrapper around a
* semantic element with the same Tailwind utility classes used in the docs.
*/

type ChildrenProps = React.PropsWithChildren<{}>;

export function TypographyH1({ children }: ChildrenProps) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
      {children}
    </h1>
  );
}

export function TypographyH2({ children }: ChildrenProps) {
  return (
    <h2 className="mt-10 scroll-m-20 border-b text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      {children}
    </h2>
  );
}


export function TypographyH3({ children }: ChildrenProps) {
  return (
    <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}

export function TypographyH4({ children }: ChildrenProps) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
}

export function TypographyP({ children }: ChildrenProps) {
  return <p className="leading-7">{children}</p>;
}

export function TypographyBlockquote({ children }: ChildrenProps) {
  return <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>;
}

export function TypographyList({ children }: ChildrenProps) {
  return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>;
}

export function TypographyInlineCode({ children }: ChildrenProps) {
  return (
    <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
}