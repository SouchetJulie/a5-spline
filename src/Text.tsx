import { FunctionComponent, PropsWithChildren, useEffect, useRef } from "react";

type TextProps = PropsWithChildren<{
  className?: string;
  color?: string
}>;

export const Text: FunctionComponent<TextProps> = ({ children, className, color = "#7c2d12" }: TextProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!entry.target.classList.contains("visible")) {
            document.documentElement.style.setProperty("--bg-color", color);
          }
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    });
    observer.observe(ref.current!);
  }, [])

  return (
    <div ref={ref} className={ "text " + className ?? "" }>
      { children }
    </div>
  );
};
