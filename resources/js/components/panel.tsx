import { PropsWithChildren } from "react";

type PanelProps = PropsWithChildren & {
    className?: string;
}

const Panel = ({ children, className } : PanelProps) => {
  return (
    <section className={`bg-white/60 backdrop-blur shadow-md p-6 h-full lg:p-10 ${className}`}>
        {children}
    </section>
  );
}

export default Panel;