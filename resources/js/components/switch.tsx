

type SwitchProps = {
    checked: boolean;
    onChange: (checked: boolean) => void;
    className?: string;
}
const Switch = (props: SwitchProps) => {
    return (
        <label className={`inline-flex items-center cursor-pointer ${props.className}`}>
            <input
                type="checkbox"
                className="sr-only peer"
                checked={props.checked}
                onChange={(e) => props.onChange(e.target.checked)}
            />
            <div className="relative w-11 h-6 bg-white border border-lime-400 rounded-full transition-colors duration-200 ease-in-out">
                <span
                    className={`absolute left-1 top-1/2 -translate-y-1/2 w-4 h-4 bg-lime-500 rounded-full transition-transform duration-200 ease-in-out ${
                        props.checked ? 'translate-x-full' : ''
                    }`}
                ></span>
            </div>
        </label>
    );
}

export default Switch;