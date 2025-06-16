type NumberCardProps = {
    value: string | number;
    unit?: string;
    className?: string;
}
const NumberCard = (props: NumberCardProps) => {
    return (
        <div>
            <div className={`bg-white/80 p-4 h-40 border border-lime-500 rounded-lg flex items-center justify-center flex-col ${props.className}`}>
                <div className="text-5xl font-bold text-lime-500">
                    {props.value}
                </div>
                {props.unit && (
                    <p className="text-sm text-zinc-400">{props.unit}</p>
                )}
            </div>
        </div>
    );
}

export default NumberCard;