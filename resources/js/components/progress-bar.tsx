
type ProgressBarProps = {
    label?: string;
    unit?: string;
    value: number;
    max: number;
    className?: string;
}
const ProgressBar = (props: ProgressBarProps) => {
    
    const percentage = (props.value / props.max) * 100;

    return (
        <div className={`flex flex-col  ${props.className}`}>
            {props.label && (
                <div className="text-xs text-gray-700 mb-1 capitalize">
                    {props.label}
                </div>
            )}
            <div className="bg-zinc-200 rounded-lg w-full relative">
                <div className="bg-lime-500 h-5 rounded-lg" style={{ width: `${percentage}%` }}></div>
                <span className="absolute top-1/2 left-2 -translate-y-1/2 text-xs text-zinc-600 flex gap-1">
                    {props.value} {props.unit || ''}
                </span>
            </div>
        </div>
    );
}

export default ProgressBar;