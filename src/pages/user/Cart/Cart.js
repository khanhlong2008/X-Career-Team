import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Cart.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react';
import { AllCheckerCheckbox, Checkbox, CheckboxGroup } from '@createnl/grouped-checkboxes';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeItem } from '../../../Redux/Reducer/Cart';
function Cart() {
    //const {data} = props;
    const data = useSelector((state) => (state["cart"]));
    const [picked, setPicked] = useState([]);
    const dispatch = useDispatch();
    const [checked,setChecked] = useState([]);
    const[total,setTotal] = useState(0);
    const handleChange = (e) => {

        if (e.target.checked)
        // do whatever you want with isChecked value
        {
            setPicked([...picked, data.items[e.target.value]])
            console.log(picked);
        }
        else {

            const temp = picked.filter((item) => {
                return item !== data.items[e.target.value];
            })
            setPicked(temp);
            console.log(picked);

        }

    }
    const handleCheckAll = (e) => {

        if (e.target.checked)
        // do whatever you want with isChecked value
        {
            if(isNaN(picked))
            {
                setPicked(data.items);
                console.log(data.items)
            }
            else{
                setPicked([]);
                setPicked(data.items);
            }
        }
        else {

            setPicked([]);
            console.log(picked);
        }

    }
    
    
    return (
        <div className="maincontainer">
            <div className="container">
                <div className="row">

                    <div className="col-9 order-md-2 mb-4">

                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span>Giỏ hàng của bạn</span>
                            <span className="badge badge-secondary badge-pill">3</span>
                        </h4>
                        <CheckboxGroup>
                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex flex-row   d-flex align-items-center border-start-0 border-end-0">
                                    <AllCheckerCheckbox type="checkbox" id="checkAll" onChange={(e) => handleCheckAll(e)}/>  {/*khi bấm nút này thì nhét toàn bộ dữ liệu giỏ hàng từ redux vào state picked để vào trang thanh toán}*/}
                                <label htmlFor="checkAll" className='label'>Chọn tất cả</label>
                                </li>
                                {data.items.map((data,index) => {
                                    return (
                                        <li className="list-group-item d-flex flex-row   d-flex align-items-center border-start-0 border-end-0" key = {index}>
                                            <div className='d-flex  col-9 justify-content-start align-items-center' >

                                                <Checkbox type="checkbox" id="productCheckBox" value={index} onChange={(e) => handleChange(e)} />
                                                <label htmlFor="productCheckBox" className='label'>
                                                    <div className="d-flex justify-content-center">
                                                        <div className='flex-column align-items-center'>
                                                            <img src={data.img} alt="" className='image' />
                                                            <h6 className="my-0">{data.title}</h6>
                                                            <small className="text-muted">Thêm miêu tả ở đây</small>
                                                        </div>
                                                    </div>
                                                </label>


                                            </div>

                                            <div className='col-3 d-flex flex-row justify-content-center price'>
                                                <span className="d-flex align-items-center price">{data.price}</span>
                                                <button className='delete' onClick={() => {dispatch(removeItem(index))}}><FontAwesomeIcon icon={faTrashCan} id='icon' className='d-flex align-items-center' /></button>

                                            </div>
                                        </li>
                                    );
                                })}

                            </ul>
                        </CheckboxGroup>
                    </div>
                    <div className="col-md-3 order-md-2 mb-4 align-self-start">
                        <div className="card p-2">
                            <div className="input-group d-flex flex-column">

                                <div>


                                    <div className='checkout'>
                                        <h5>Thông tin đơn hàng</h5>
                                        <div className='d-flex flex-row col-12 '>
                                            <span className='d-flex justify-content-start col-6'>Tạm tính:</span>
                                            <span className='d-flex justify-content-center col-6'>{data.totalamount}</span>
                                        </div>
                                        <div>
                                            <span className='d-flex justify-content-start col-6'>Phí giao hàng:</span>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-secondary  col-12">
                                        Xác nhận giỏ hàng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        </div>
    );
}

export default Cart;