import Logo from './ecommerce-product-page-main/images/logo.svg';
import Del from './ecommerce-product-page-main/images/icon-delete.svg';
import CustomCart from './CustomeCart';
import Menu from './ecommerce-product-page-main/images/icon-menu.svg';
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { remove_cart } from './reducers/cartSlice';
import CustomClose from './CustomClose';


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
                            <div className="delete" onClick={() => remove_Cart(remove_cart())}><img src={Del} alt=""/></div>
                        </div>
                        <button onClick={() => console.log(all)}>Checkout</button>
                    </div>
    }

    return ( 
        <div className="navbar">
            <div className="logo-container">
                <img src={Menu} alt="" className='menu' onClick={() => setMenu(true)}/>
                <img src={Logo} alt="" className='logo' />
            </div>
            {menu ? (
                <div className='other-set'>
                    <div className="small-other">
                        <div className='small-other-cont'>
                            <div className="cust-close" onClick={() => setMenu(false)}><CustomClose  fill={'grey'} /></div>
                            <div className="other-items">
                                <div>Collections</div>
                                <div>Men</div>
                                <div>Women</div>
                                <div>About</div>
                                <div>Contact</div>
                            </div>
                        </div>
                    </div>
                    <div className="others-list"></div>
                </div>
            ) : (
                <div className='others'>
                    <div>Collections</div>
                    <div>Men</div>
                    <div>Women</div>
                    <div>About</div>
                    <div>Contact</div>
                </div>
            )}
            <div className="right-nav">
                <div className='cart' onClick={() => setCart((prev) => !prev)}>
                    <CustomCart/>
                    {quantity ? (
                        <div className="quantity">{quantity}</div>
                    ): (<div className="quantity-emp"></div>)}
                </div>
                { cart ? (
                    <div>{content}</div>
                ) : (null)}
                <div className="profile-img"><img src={require("./ecommerce-product-page-main/images/image-avatar.png")} alt=""  className='avatar'/></div>
            </div>
        </div>
     );
}
 
export default Navbar;