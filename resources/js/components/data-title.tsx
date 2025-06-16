const DataTitle = (props: { title: string; subtitle?: string }) => {
    return (
        <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">{props.title}</h1>
            {props.subtitle && <p className="text-gray-500">{props.subtitle}</p>}
        </div>
    );
}

export default DataTitle;