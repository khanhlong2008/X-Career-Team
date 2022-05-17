import React, {useState} from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
const PaypalButton = (props) => {
  
  const {total,cart} = props;
  const [paidFor,setPaidFor] = useState(false);
  const[error,setError] = useState(null)
  const handleApprove = (orderID) => {
    setPaidFor(true);
  }
  if(paidFor){
    alert("Cảm ơn bạn đã mua hàng!");
  }
  if(error ===  true)
  {
    alert("Thanh toán thật bại!")
  }

  return (
    <PayPalScriptProvider>
      <PayPalButtons
      onClick={(data,action) => {
        const hasAlreadyBoughtCourse = false;
        if(hasAlreadyBoughtCourse)
        {
            setError("Bạn đã mua sản phẩm này rồi!");
            return action.reject();
        }
        else{
          return action.resolve();
        }
      }}
       createOrder={(data, actions) => {
         
        return actions.order.create({
          purchase_units: [{

            amount: {
              value: total,
              breakdown: {
                item_total: {
                    currency_code: "USD",
                    value: total,
                }
            }
            },
            items: cart,
          },
        ],
        });
      }}
      onApprove={async(data,action) => {
        const order = await action.order.capture();
        console.log(order);
        handleApprove(data.orderID);
      }} 
      onCancel={() => {

      }}
      onError={(error)=>{
        setError(error);
        console.log("Lỗi:",error);

      }}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalButton;