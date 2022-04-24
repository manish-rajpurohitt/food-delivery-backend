

const VALID_STATES_DELIVERY = ["RIDER_INITIATED", "RIDER_ASSIGNED", "RIDER_REACHED_SOURCE", "RIDER_PICKED_UP", "RIDER_REACHED_DESTINATION", "RIDER_DELIVERED"];
const VALID_STATES_PAYMENT = ["PAYMENT_INITIATED", "PAYMENT_PROCESSING", "PAYMET_SUCCESS"];
const VALID_STATES_ORDER = ["ORDER_INITIATED", "ORDER_REQUESTED", "ORDER_ACCEPTED", "ORDER_PROCESSING", "ORDER_DELIVERED"];


const verifyDeliveryState = (state, mode) => {
    
    switch (mode) {
        case "DELIVERY":
            return VALID_STATES_DELIVERY.includes(state) ? true : false;
            break;
        case "ORDER":
            return VALID_STATES_ORDER.includes(state) ? true : false;
            break;
        case "PAYMENT":
            return VALID_STATES_PAYMENT.includes(state)? true : false;
            break; 
        default:
            return false;
            break;
    }
}

module.exports = verifyDeliveryState;