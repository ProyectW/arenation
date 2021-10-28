export default function SearchResultsHeader(props) {
    return (
        <>
            <div className="px-8 py-8 sm:px-16 flex flex-col w-full">
                <span className="text-sm font-medium">{`${props.filter.resultCount} resultados encontrados`}</span>
                <h1>
                    Arenas{" "}
                    {props.filter.sportFiler
                        ? "de " + props.filter.sportFilter
                        : "Deportivos"}
                </h1>
            </div>
        </>
    );
}
