import Card from '../Card/Card'
import './FeaturedProducts.scss'
import useFetch from '../../hooks/useFetch'

function FeaturedProducts({ type }) {

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure illo eos impedit sit amet cum voluptatem quibusdam, beatae, ex ducimus ut! Ducimus dolorum delectus perferendis provident nulla corrupti dolorem et eaque. Corporis, deleniti nisi ex ullam corrupti laudantium explicabo, assumenda quas perspiciatis officiis, obcaecati voluptatibus recusandae?</p>
            </div>
            <div className="bottom">
                {error ? <h1>Error!</h1> :
                    (loading ? <h1>Loading...</h1> :
                        data.map(item => <Card item={item} key={item.id} />)
                    )
                }
            </div>
        </div>
    )
}

export default FeaturedProducts