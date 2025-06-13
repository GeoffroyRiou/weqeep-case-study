
const NumberCard = (props: {
    value: string | number;
    unit?: string;
    className?: string;
}) => {
    return (
        <div>
            <div className={`bg-white p-4 size-40 rounded-full shadow-md flex items-center justify-center flex-col ${props.className}`}>
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