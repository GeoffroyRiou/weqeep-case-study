import { PropsWithChildren } from "react";

type PanelProps = PropsWithChildren & {
    className?: string;
}

const Panel : React.FC<PanelProps> = ({ children, className }) => {
  return (
    <section className={`bg-white/80 backdrop-blur shadow-md rounded-lg p-6 h-full lg:p-10 ${className}`}>
        {children}
    </section>
  );
}

export default Panel;