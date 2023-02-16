import { Link } from "react-router-dom"
import { useState } from "react"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import './Navbar.scss'
import Cart from "../Cart/Cart";

function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className='navbar'>
            <div className="wrapper">
                <div className='left'>
                    <div className="item">
                        <img src="/img/en.png" alt="" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className="link" to="products/1">Women</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="products/2">Men</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="products/3">Children</Link>
                    </div>
                </div>
                <div className='center'>
                    <Link className="link" to="/">LAMASTORE</Link>
                </div>
                <div className='right'>
                    <div className='item'>
                        <Link className="link" to="/">Homepage</Link>
                    </div>
                    <div className='item'>
                        <Link className="link" to="/">About</Link>
                    </div>
                    <div className='item'>
                        <Link className="link" to="/">Contacts</Link>
                    </div>
                    <div className='item'>
                        <Link className="link" to="/">Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlinedIcon />
                        <FavoriteBorderIcon />
                        <div className="cartIcon" onClick={()=>setOpen(prevOpenState => !prevOpenState)}>
                            <ShoppingCartOutlinedIcon />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart/>}
        </nav>
    )
}

export default Navbar