import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import BalanceIcon from "@mui/icons-material/Balance"
import "./Product.scss"

function Product() {
    const id = useParams().id
    const [selectedImg, setSelectedImg] = useState('img')
    const [quantity, setQuantity] = useState(1)

    const { data, loading, error } = useFetch(`/products/${id}?populate=*`)

    return (
        <div className="product">
            {error ? <h1>Error!</h1> :
                loading ? <h1>Loading...</h1> :
                    <>
                        <div className="left">
                            <div className="images">
                                <img src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e => setSelectedImg('img')} />
                                <img src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={e => setSelectedImg('img2')} />
                            </div>
                            <div className="mainImg">
                                <img src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + data?.attributes[selectedImg].data?.attributes?.url} alt="" />
                            </div>
                        </div>
                        <div className="right">
                            <h1>Title</h1>
                            <span className="price">$199</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nobis non illum facilis consequatur esse autem harum delectus debitis voluptas accusamus praesentium commodi necessitatibus inventore aliquid, ex, tempore accusantium quo!</p>
                            <div className="quantity">
                                <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
                                {quantity}
                                <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                            </div>
                            <button className="add">
                                <AddShoppingCartIcon /> ADD TO CART
                            </button>
                            <div className="links">
                                <div className="item">
                                    <FavoriteBorderIcon /> ADD TO WISH LIST
                                </div>
                                <div className="item">
                                    <BalanceIcon /> ADD TO COMPARE
                                </div>
                            </div>
                            <div className="info">
                                <span>Vendor: Polo</span>
                                <span>Product Type: T-Shirt</span>
                                <span>Tag: T-Shirt, Women, Top</span>
                            </div>
                            <hr />
                            <div className="info">
                                <span>DESCRIPTION</span>
                                <hr />
                                <span>ADDITION INFORMATION</span>
                                <hr />
                                <span>FAQ</span>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default Product