export type Choice = {
    label: string;
    value: string;
}
const ChoicesToggle = ({
    choices,
    value,
    onChange,
}: {
    choices: Choice[];
    value: string;
    onChange: (value: string) => void;
}) => {
    return (
        <div className="flex items-center space-x-4">
            {choices.map((choice) => (
                <button
                    type="button"
                    key={choice.value}
                    className={`p-2 rounded-lg text-sm transition-colors cursor-pointer ${value === choice.value ? 'bg-lime-500 text-white' : ' bg-white text-zinc-600 opacity-60'}`}
                    onClick={() => onChange(choice.value)}
                >
                    {choice.label}
                </button>
            ))}
        </div>
    );
}

export default ChoicesToggle