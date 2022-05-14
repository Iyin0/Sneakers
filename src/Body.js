import Minus from './ecommerce-product-page-main/images/icon-minus.svg';
import Plus from './ecommerce-product-page-main/images/icon-plus.svg';
import CustomCart from './CustomeCart';
import { useState } from 'react';
import CustomClose from './CustomClose';
import CustomPrevious from './CustomPrevious';
import CustomNext from './CustomNext';
import { useDispatch } from 'react-redux';
import { add_cart, add_pic, add_title, add_price } from './reducers/cartSlice';

const Body = () => {
    
    const merch = [
        {
            store_name: "SNEAKER COMPANY",
            store_merch: "Fall Limited Edition Sneakers",
            merch_description: "These low-profile sneakers are you perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
            merch_price: 125.00.toFixed(2),
            merch_discount: 50,
            merch_original: 250.00.toFixed(2),
            merch_img: [
                require("./ecommerce-product-page-main/images/image-product-1.jpg"),
                require("./ecommerce-product-page-main/images/image-product-2.jpg"),
                require("./ecommerce-product-page-main/images/image-product-3.jpg"),
                require("./ecommerce-product-page-main/images/image-product-4.jpg")
            ],
            merch_thumbnail: [
                require("./ecommerce-product-page-main/images/image-product-1-thumbnail.jpg"),
                require("./ecommerce-product-page-main/images/image-product-2-thumbnail.jpg"),
                require("./ecommerce-product-page-main/images/image-product-3-thumbnail.jpg"),
                require("./ecommerce-product-page-main/images/image-product-4-thumbnail.jpg")
            ]
        }
    ]

    const [close, setClose] = useState("hsl(0, 0%, 100%)");
    const [state, setState] = useState(false);
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0)
    const imgLength = merch[0].merch_img.length;
    const update_Cart = useDispatch();

    const nextSlide = () => {
        setCurrent(current === imgLength - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? imgLength - 1 : current - 1);
    };

    const increaseItem = () => {
        setCount(count + 1)
    };

    const decreaseItem = () => {
        setCount(count === 0 ? 0 : count - 1)
    };
    
    return ( 
        <div className="body">
            <div className="left-body">
                <div className="big-img-slider">
                    {merch[0].merch_img.map((image, index) => (
                        <div className={index === current ? 'slide-active' : 'slide'} key={index} >
                            {index === current && (
                                <img src={image}alt="" className="big-img" />
                            )}
                        </div>
                    ))}
                    <div className="change-img">
                        <button className="previous" onClick={() => prevSlide()}><CustomPrevious/></button>
                        <button className="next" onClick={() => nextSlide()}><CustomNext/></button>
                    </div>
                </div>
                <div className="small-img">
                    {merch[0].merch_thumbnail.map((img, index) => (
                        <button className={index === current ? 'current-img' : 'just-img'} key={index} onClick={() => {setState(true); setClose("hsl(0, 0%, 100%)"); setCurrent(index)}}>
                            <img src={img} alt=""/>
                        </button>
                    ))}
                </div>
            </div>
            <div className="right-body">
                <h3 className="store-name">{merch[0].store_name}</h3>
                <div className="store-merch">{merch[0].store_merch}</div>
                <h3 className="merch-description">{merch[0].merch_description}</h3>
                <div className="merch-new">
                    <h2 className="merch-price">${(merch[0].merch_original * (merch[0].merch_discount/100)).toFixed(2)}</h2>
                    <h2 className="merch-discount">{merch[0].merch_discount}%</h2>
                    <div className='price-wrapper-small'>
                        <h2 className="merch-origin-small">${merch[0].merch_original}</h2>
                        <div className="price-slash-small"></div>
                    </div>
                </div>
                <div className='price-wrapper'>
                    <h2 className="merch-origin">${merch[0].merch_original}</h2>
                    <div className="price-slash"></div>
                </div>
                <div className="counter">
                    <div className="counter-cont">
                        <button className="minus" onClick={() => decreaseItem()}><img src={Minus} alt=""/></button>
                        <div className="amount">{count}</div>
                        <button className="plus" onClick={() => increaseItem()}><img src={Plus} alt=""/></button>
                    </div>
                    <button className='add-to-cart' onClick={() => {update_Cart(add_cart(count)); 
                                           update_Cart(add_pic(merch[0].merch_thumbnail[0])); 
                                           update_Cart(add_title(merch[0].store_merch)); 
                                           update_Cart(add_price(merch[0].merch_price))
                                           }}>
                        <CustomCart className="custom-cart" fill={"white"}/>
                        <span>Add to cart</span>
                    </button>
                </div>
            </div>
            {state ? (
                <div className="over-body">
                    <button className="close-body" onClick={() => {setState(false); setCurrent(0)}} onMouseEnter={() => setClose("hsl(26, 100%, 55%)")} onMouseLeave={() => setClose("hsl(0, 0%, 100%)")}>
                        <CustomClose  fill={close} />
                    </button>
                    <div className="img-container">
                        <div className="img-slider">
                            {merch[0].merch_img.map((image, index) => (
                                <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                                    {index === current && (
                                        <img src={image} alt="" className="big-img-over" />
                                    )}
                                </div>
                            ))}
                            <div className="change-img-over">
                                <button className="previous" onClick={() => prevSlide()}><CustomPrevious/></button>
                                <button className="next" onClick={() => nextSlide()}><CustomNext/></button>
                            </div>
                        </div>
                        <div className="small-img-over">
                            {merch[0].merch_thumbnail.map((img, index) => (
                                <button className={index === current ? 'current-img' : 'just-img'} key={index} onClick={() => setCurrent(index)}>
                                    <img src={img} alt=""/>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (null)}
        </div>
     );
}
 
export default Body;