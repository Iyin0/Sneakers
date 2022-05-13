import Logo from './ecommerce-product-page-main/images/logo.svg';
import Del from './ecommerce-product-page-main/images/icon-delete.svg';
import CustomCart from './CustomeCart';
import Menu from './ecommerce-product-page-main/images/icon-menu.svg';
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { remove_cart } from './reducers/cartSlice';
import CustomClose from './CustomClose';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const all = useSelector((state) => state.quantity)
    const quantity = all.quantity;
    const picture = all.picture;
    const title = all.title;
    const price = all.price;
    const remove_Cart = useDispatch();
    const [cart, setCart] = useState(false);
    const [menu, setMenu] = useState(false);
    let content;

    if (quantity < 1 ) {
        content = <div className="cart-container">
                        <div className='cart-header'>Cart</div>
                        <div className="empty-cart">Your cart is empty.</div>
                    </div>
    }
    else {
        content = <div className="cart-container">
                        <div className='cart-header'>Cart</div>
                        <div className="filled-cart">
                            <img className='cart-img' src={picture} alt="" />
                            <div className="cart-detail">
                                <div className='cart-desc'>{title}</div>
                                <div className='price-det'>
                                    <div>${price}</div>
                                    <div>x  {quantity}</div>
                                    <div>${(price * quantity).toFixed(2)}</div>
                                </div>
                            </div>
                            <button className="delete" onClick={() => remove_Cart(remove_cart())}><img src={Del} alt=""/></button>
                        </div>
                        <button className='checkout' onClick={() => console.log(all)}>Checkout</button>
                    </div>
    }

    return ( 
        <div className="navbar">
            <div className="logo-container">
                <button className='menu' onClick={() => setMenu(true)}><img src={Menu} alt="" /></button>
                <Link to='/sneakers'><img src={Logo} alt="" className='logo' /></Link>
            </div>
            <div className='others'>
                <Link to='/sneakers' className='others-list'>Collections</Link>
                <Link to='/sneakers' className='others-list'>Men</Link>
                <Link to='/sneakers' className='others-list'>Women</Link>
                <Link to='/sneakers' className='others-list'>About</Link>
                <Link to='/sneakers' className='others-list'>Contact</Link>
            </div>
            {menu ? (
                <div className='other-set'>
                    <div className="small-other">
                        <div className='small-other-cont'>
                            <button className="cust-close" onClick={() => setMenu(false)}><CustomClose  fill={'grey'} /></button>
                            <div className="other-items">
                                <Link to='/sneakers' className='other-item'>Collections</Link>
                                <Link to='/sneakers' className='other-item'>Men</Link>
                                <Link to='/sneakers' className='other-item'>Women</Link>
                                <Link to='/sneakers' className='other-item'>About</Link>
                                <Link to='/sneakers' className='other-item'>Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className="empty-side"></div>
                </div>
            ) : (null)}
            <div className="right-nav">
                <button className='cart' onClick={() => setCart((prev) => !prev)}>
                    <CustomCart/>
                    {quantity ? (
                        <div className="quantity">{quantity}</div>
                    ): (<div className="quantity-emp"></div>)}
                </button>
                { cart ? (
                    <div>{content}</div>
                ) : (null)}
                <Link to='/sneakers' className="profile-img"><img src={require("./ecommerce-product-page-main/images/image-avatar.png")} alt=""  className='avatar'/></Link>
            </div>
        </div>
     );
}
 
export default Navbar;