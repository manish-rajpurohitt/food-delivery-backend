import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card  from './Card.js';

function Home() {

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
          "isRiderAssigned": false
          }
  ]
   const [allOrders, updateAllOrders] = React.useState([]);

  React.useEffect(()=>{
    
  }, [])
  return (
    <React.Fragment>
    <Container fixed>
      <Box sx={{ bgcolor: '#cfe8fc', width:'100%', height: '100vh' }} >
        <Card/>
      </Box>


    </Container>
  </React.Fragment>
  )
}

export default Home