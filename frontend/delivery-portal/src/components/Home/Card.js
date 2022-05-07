import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import "./Card.css";
import AcceptOrder from './AcceptOrder';
import ChangeOrderStatus from './ChangeOrderStatus';
import Button from '@mui/material/Button';
import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/delivery"
function Card() {

  const sampleOrder = 
    [
      {
          "customerDetails": {
              "email": "manishcustomer@gmail.com",
              "city": "Nellore",
              "currentLocation": {
                  "latitude": 12.74,
                  "longitude": 77.25
              },
              "customerAddress": {
                  "addressLine1": "Santhapet",
                  "addressLine2": "Railway station",
                  "cityOrDistrict": "Nellore",
                  "country": "India",
                  "landmark": "railway",
                  "pincode": 524001,
                  "state": "Andhra Pradesh",
                  "_id": "62650a6b04e5b9c51c21f136"
              },
              "customerName": "Manish Customer",
              "customerPhoneNumber": 8297997256
          },
          "restaurantDetails": {
              "restaurantName": "Maharani Restaurant",
              "address": {
                  "addressLine1": "Kamati Street",
                  "addressLine2": "Chinna Bazar",
                  "cityOrDistrict": "Nellore",
                  "country": "India",
                  "landmark": "Chinna Bazar",
                  "pincode": 524001,
                  "state": "Andhra Pradesh",
                  "_id": "62657703f5ef3c65f56a1a4b"
              },
              "city": "Nellore",
              "pan": "DFNPPPPPP3",
              "restaurantLocation": {
                  "latitude": 12.94,
                  "longitude": 77.64
              },
              "restaurantPhoneNumber": 8612320936,
              "restaurantType": "North Indian/ Chinese"
          },
          "_id": "626578c6043a464c535ca243",
          "city": "Nellore",
          "orderSummary": [
              {
                  "productDetails": {
                      "foodName": "paneeer fried Rice 2",
                      "category": {
                          "categoryName": "Noodless",
                          "addedOn": "2022-04-24T16:16:18.863Z",
                          "_id": "626577d61d6658fb5f1ad96c"
                      },
                      "ingredients": [
                          "Masala",
                          "Noodles",
                          "carrot"
                      ],
                      "price": 350,
                      "discount": "20",
                      "isAvailableForDelivery": true,
                      "isVegetarian": true,
                      "image": "https://imageurl",
                      "ratings": 5,
                      "isTaxRequired": true,
                      "taxInPercentage": 50,
                      "addedOn": "2022-04-24T16:16:18.863Z",
                      "updatedOn": "2022-04-24T16:16:18.863Z",
                      "_id": "626577d61d6658fb5f1ad96b"
                  },
                  "quantity": 5
              },
              {
                  "productDetails": {
                      "foodName": "paneeer fried Rice 3",
                      "category": {
                          "categoryName": "Noodless",
                          "addedOn": "2022-04-24T16:16:18.863Z",
                          "_id": "626578061d6658fb5f1ad983"
                      },
                      "price": 150,
                      "discount": "20",
                      "image": "https://imageurl",
                      "ratings": 5,
                      "isTaxRequired": true,
                      "taxInPercentage": 50,
                      "addedOn": "2022-04-24T16:16:18.863Z",
                      "updatedOn": "2022-04-24T16:16:18.863Z",
                      "_id": "626578061d6658fb5f1ad982"
                  },
                  "quantity": 2
              }
          ],
          "instructions": "Hello Instructions",
          "totalPrice": 2050,
          "orderStatus": "ORDER_ACCEPTED",
          "deliveryStatus": "RIDER_INITIATED",
          "paymentStatus": "PAYMENT_SUCCESS",
          "orderStatusChangeHistory": [
              {
                  "state": "ORDER_INITIATED",
                  "changedOn": "2022-04-24T16:08:50.558Z",
                  "_id": "626578c6043a464c535ca244"
              },
              {
                  "state": "ORDER_ACCEPTED",
                  "changedOn": "2022-04-24T16:28:15.225Z",
                  "_id": "62657a9f29657a18489411ca"
              }
          ],
          "isPrepaid": true,
          "isRiderAssigned": false,
          "riderDetails":{
            "_id": "12345"
          }
          }
  ]

  const newOrder = 
  [
    {
        "customerDetails": {
            "email": "manishcustomer@gmail.com",
            "city": "Nellore",
            "currentLocation": {
                "latitude": 12.74,
                "longitude": 77.25
            },
            "customerAddress": {
                "addressLine1": "Santhapet",
                "addressLine2": "Railway station",
                "cityOrDistrict": "Nellore",
                "country": "India",
                "landmark": "railway",
                "pincode": 524001,
                "state": "Andhra Pradesh",
                "_id": "62650a6b04e5b9c51c21f136"
            },
            "customerName": "Manish Customer",
            "customerPhoneNumber": 8297997256
        },
        "restaurantDetails": {
            "restaurantName": "Maharani Restaurant",
            "address": {
                "addressLine1": "Kamati Street",
                "addressLine2": "Chinna Bazar",
                "cityOrDistrict": "Nellore",
                "country": "India",
                "landmark": "Chinna Bazar",
                "pincode": 524001,
                "state": "Andhra Pradesh",
                "_id": "62657703f5ef3c65f56a1a4b"
            },
            "city": "Nellore",
            "pan": "DFNPPPPPP3",
            "restaurantLocation": {
                "latitude": 12.94,
                "longitude": 77.64
            },
            "restaurantPhoneNumber": 8612320936,
            "restaurantType": "North Indian/ Chinese"
        },
        "_id": "626578c6043a464c535ca243",
        "city": "Nellore",
        "orderSummary": [
            {
                "productDetails": {
                    "foodName": "paneeer fried Rice 2",
                    "category": {
                        "categoryName": "Noodless",
                        "addedOn": "2022-04-24T16:16:18.863Z",
                        "_id": "626577d61d6658fb5f1ad96c"
                    },
                    "ingredients": [
                        "Masala",
                        "Noodles",
                        "carrot"
                    ],
                    "price": 350,
                    "discount": "20",
                    "isAvailableForDelivery": true,
                    "isVegetarian": true,
                    "image": "https://imageurl",
                    "ratings": 5,
                    "isTaxRequired": true,
                    "taxInPercentage": 50,
                    "addedOn": "2022-04-24T16:16:18.863Z",
                    "updatedOn": "2022-04-24T16:16:18.863Z",
                    "_id": "626577d61d6658fb5f1ad96b"
                },
                "quantity": 5
            },
            {
                "productDetails": {
                    "foodName": "paneeer fried Rice 3",
                    "category": {
                        "categoryName": "Noodless",
                        "addedOn": "2022-04-24T16:16:18.863Z",
                        "_id": "626578061d6658fb5f1ad983"
                    },
                    "price": 150,
                    "discount": "20",
                    "image": "https://imageurl",
                    "ratings": 5,
                    "isTaxRequired": true,
                    "taxInPercentage": 50,
                    "addedOn": "2022-04-24T16:16:18.863Z",
                    "updatedOn": "2022-04-24T16:16:18.863Z",
                    "_id": "626578061d6658fb5f1ad982"
                },
                "quantity": 2
            }
        ],
        "instructions": "Hello Instructions",
        "totalPrice": 2050,
        "orderStatus": "ORDER_ACCEPTED",
        "deliveryStatus": "RIDER_INITIATED",
        "paymentStatus": "PAYMENT_SUCCESS",
        "orderStatusChangeHistory": [
            {
                "state": "ORDER_INITIATED",
                "changedOn": "2022-04-24T16:08:50.558Z",
                "_id": "626578c6043a464c535ca244"
            },
            {
                "state": "ORDER_ACCEPTED",
                "changedOn": "2022-04-24T16:28:15.225Z",
                "_id": "62657a9f29657a18489411ca"
            }
        ],
        "isPrepaid": true,
        "isRiderAssigned": true,
        "riderDetails":{
          "_id": "6273d2cd7fd00f1c0ee4c603"
        }
        }
]
   const [allOrders, updateAllOrders] = React.useState([]);
   const [userId, setUserId] = React.useState("");
   const [isAcceptedOrder, updateIsAcceptedOrder] = React.useState(false);
    const [order, setOrder] = React.useState(sampleOrder[0]);
  React.useEffect( ()=>{

    async function fetchUser(){
        let config = {
            headers: {
                authorization: "Bearer "+localStorage.getItem("auth"),
            }
          }
        await axios.get(BASE_URL+"/getRiderDetails", config).then(res=>{
            setUserId(res.data.data._id);
            if(res.data.data._id === order.riderDetails._id){
                updateIsAcceptedOrder(true);
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    fetchUser();
  }, [order])

  const handleAcceptOrder = async (id) => {
    let config = {
        headers: {
            authorization: "Bearer "+localStorage.getItem("auth"),
        }
      }
      
      let data = {
        'orderId': id
      };
      setOrder(newOrder[0]);
    //   await axios.post(BASE_URL+"/orders/acceptOrderDelivery",data, config ).then(response => {
    //       if(response.data.success === "true"){
    //         setOrder(response.data.data);
    //         console.log(response.data.data)
    //       }
    //   }).catch(err=>{
    //       console.log(err);
    //   })
  }

  const updateDeliveryStatus = async (state, orderId) => {
    let config = {
        headers: {
            authorization: "Bearer "+localStorage.getItem("auth"),
        }
      }
    //   await axios.post(BASE_URL+"/orders/updateOrderDeliveryStatus",{state: state, orderId: orderId}, config ).then(response=>{
    //       setOrder(response.data.data);
    //   }).catch(err=>{
    //       console.log(err)
    //   });
    setOrder({...order, deliveryStatus:state})
  }
  return (
    <React.Fragment>
        <div className='cards'>
        <Box sx={{ padding:"1px",  bgcolor: '#cfe8fc', width:'100%', height: '100%' }} >
            <div className='order'>
                <div className='order-id'>Order Id : {order._id}</div>
                <div className='restaurant-details'>
                    <h3>Restaurant Details :</h3>
                    <h4>{order.restaurantDetails.restaurantName}</h4>
                    <p>{order.restaurantDetails.address.addressLine1}</p>
                    <p>{order.restaurantDetails.address.addressLine2}</p>
                    <p>{order.restaurantDetails.address.landmark}</p>
                    <h5>Ph: <span>{order.restaurantDetails.restaurantPhoneNumber}</span></h5>
                </div>
                <div className='restaurant-details'>
                    <h3>Customer Details :</h3>
                    <h4>{order.customerDetails.customerName}</h4>
                    <p>{order.customerDetails.customerAddress.addressLine1}</p>
                    <p>{order.customerDetails.customerAddress.addressLine2}</p>
                    <p>{order.customerDetails.customerAddress.landmark}</p>
                    <h5>Ph: <span>{order.customerDetails.customerPhoneNumber}</span></h5>
                </div>
                <div className='payment-status'>
                    <h4>Payment Status : <span>{order.isPrepaid? "PREPAID" : "COD"}</span></h4>
                </div>
                <div className='payment-status'>
                    <h4>Items : <span>{order.orderSummary.length}</span></h4>
                </div>
                {isAcceptedOrder?
                <ChangeOrderStatus order={order} updateDeliveryStatus={updateDeliveryStatus}/> :
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={()=>handleAcceptOrder(order._id)}
                  >
                      Accept Order
                  </Button>  

                }
                    
                  
            </div>
        </Box>
        </div>
      
  </React.Fragment>
  )
}

export default Card