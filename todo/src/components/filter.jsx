
const Filter = () => {
    return (
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className="filter-options">
                <p>Status:</p>
                <select>
                    <option value="All">Todas</option>
                    <option value="Complete">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem Alfabética:</p>
                <button>Asc</button>
                <button>Desc</button>
            </div>
        </div>
    )
}

export default Filter;