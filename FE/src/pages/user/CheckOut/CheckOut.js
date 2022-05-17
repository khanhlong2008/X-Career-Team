import React, { useEffect, useState } from 'react';
import './CheckOut.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from '../../../Components/SearchBar/SearchBar';
import Header from '../Layouts/Header/Header';
import PaypalButton from './PaypalButton';



//func Checkout nhận vào một object giỏ hàng gồm 2 phần total và 

const CheckOut = ({ cart }) => {
    const [total, setTotal] = useState(0);
    const [discounted, setDiscounted] = useState(total);
    const [promoCode,setPromocode] = useState("");
    let temp = 0;
    const count = () => {
       cart.forEach((data) => {
            temp += Number(data.unit_amount.value) * Number(data.quantity);
        })
        setTotal(temp);
        setDiscounted(total)
        console.log(cart);
    }
    
    useEffect(()=> {
        count();
    })
    const handleSubmit = (e) => {


        //  discounted có giá trị mặc định bằng total(tổng cộng)
        // Khi người dùng bấm (sử dụng) xử lý xem mã giảm giá (promoCode) có hợp lệ không đúng không!
        //Nếu đúng thì trừ tiền cập nhật lại discounted
        //Nếu sai thì không làm gì cả và lấy discounted gửi giá xuống đề paypal thanh toán
        if(promoCode === "")
        {
            alert("Mã giảm giá không hợp lệ!")
        }
        // thêm trường hợp sai và sai!

        console.log(promoCode);
        console.log(cart.description)
      }
    const handleChange = (e) => {
        setPromocode(e.target.value);
    }
    return (

        <div className="maincontainer">
            <Header />
            <div className="container">

                <div className="row">

                    <div className="col-md-8 order-md-1">

                        <form className="needs-validation">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span>Đơn hàng của bạn</span>
                                <span className="badge badge-secondary badge-pill">3</span>
                            </h4>
                            <ul className="list-group mb-3">
                                {
                                    cart.map((data) => {
                                        return (<li className="list-group-item d-flex justify-content-between lh-condensed">
                                            <div>
                                                <h6 className="my-0">{data.name}</h6>
                                                <small className="text-muted">{data.description}</small>
                                            </div>
                                            <span className="text-muted">{data.price}</span>

                                            <div>
                                                <span className="text-muted">Số lượng:</span>
                                                <strong className='amount'>{data.quantity}</strong>
                                                </div>
                                        </li>)
                                    })
                                }
                                <li className="list-group-item">
                                    <div className="d-flex justify-content-between" >
                                        <strong>Tiền hàng (Tạm tính):</strong>
                                        <span>{total}</span>
                                    </div>
                                    <div className="d-flex justify-content-between"><strong>Tổng tiền:</strong>
                                        <span>{total}</span></div>
                                </li>
                            </ul>
                            <hr className="mb-3" />
                            <h4 className="mb-3">Mã khuyến mãi</h4>
                            <form className="card p-2" >
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Promo code" onChange={handleChange}/>
                                    <div className="input-group-append">
                                        <input type="button" className="btn btn-secondary" value="Sử dụng" onClick={handleSubmit}/>
                                    </div>
                                </div>
                            </form>
                            <hr className="mb-4" />
                            <h4 className="mb-3">Thanh toán với Paypal</h4>
                            <div className='PayPalButtons'><PaypalButton
                            total = {discounted}
                             cart = {cart}/></div>
                        </form>
                    </div>
                </div>

            </div>

            )
        </div>
    );
};

export default CheckOut;