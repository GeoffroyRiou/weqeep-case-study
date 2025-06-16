import { useMemo } from "react";

type ProgressBarProps = {
    label?: string;
    unit?: string;
    value: number;
    max: number;
    className?: string;
}
const ProgressBar = (props: ProgressBarProps) => {

    const percentage = useMemo(
        () => ((props.value / props.max) * 100).toFixed(2),
        [props.value, props.max]
    );

    return (
        <div className={`grid grid-cols-3 gap-1 lg:grid-cols-4  ${props.className}`}>
            {props.label && (
                <span className="text-xs text-gray-700 font-medium capitalize">
                    {props.label}
                </span>
            )}
            <span className="text-xs text-gray-700">
                {props.value} {props.unit || ''}
            </span>
            <div className="h-5 border border-lime-500 bg-white/50 rounded-lg relative lg:col-span-2">
                <div className="bg-lime-500 h-full rounded-lg" style={{ width: `${percentage}%` }}></div>
                <span className="absolute top-1/2 left-2 -translate-y-1/2 text-xs text-zinc-600 flex gap-1">
                    {percentage}%
                </span>
            </div>
        </div>
    );
}

export default ProgressBar;