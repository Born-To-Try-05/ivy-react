import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Shop.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { forwardRef, useEffect, useState } from "react";
import ShopProduct from "../ShopProduct";

export const arrShop = [];

function Shop(props, ref) {
    const [pseudoArr, setPseudoArr] = useState([]);

    const closeShop = () => {
        ref.current.classList.remove("open");
    };

    useEffect(() => {
        console.log(arrShop);
    }, [arrShop]);

    return (
        <div className="shopping" id="shopping" ref={ref}>
            <div className="top-shop">
                <h3>
                    Giỏ hàng<span className="number-cart">{arrShop.length}</span>
                </h3>
            </div>
            <div className="main-shop" id="main-shop">
                {arrShop.length === 0 ? (
                    <span>Bạn chưa có sản phẩm nào</span>
                ) : (
                    arrShop.map((item) => {
                        return <h1>cong</h1>;
                    })
                )}
            </div>
            <div className="bottom-shop">
                <div className="total-price">
                    Tổng cộng: <strong id="total">0đ</strong>
                </div>
                <div className="box-action">
                    <div className="box-title">Thanh toán</div>
                </div>
            </div>
            <div className="close-shop" id="close" onClick={closeShop}>
                <FontAwesomeIcon icon={faXmark} />
            </div>
        </div>
    );
}

export default forwardRef(Shop);