import useFetch from "../../hooks/useFetch"
import Card from "../Card/Card"
import "./List.scss"

function List({ catId, maxPrice, sort, subCats }) {

const { data, loading, error } = useFetch(`/products?populate=*&[filters][categories][id]=${catId}${subCats.map(item => `&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`)

    return (
        <div className="list">
            {error ? <h1>Error!</h1> :
                loading ? <h1>Loading...</h1> :
                    data?.map(item => (
                        <Card item={item} key={item.id} />
                    ))}
        </div>
    )
}

export default List