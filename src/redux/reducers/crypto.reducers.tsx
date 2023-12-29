import * as userTypes from "../constants/crypto.types"
import { reducers } from "./type";

const initialState = {
    cryptoList: [],
    convertmessage: "",
    cryptolistmessage: "",
    amount: null
};
const CryptoReducers = (state = initialState, action: reducers) => {
    
    switch (action.type) {
        case userTypes.default.GET_CRYPTO:
            return { ...state, cryptoList: action.payload, cryptolistmessage: action.payload };
        case userTypes.default.CONVERT_CRYPTO_CURRENCY:
            return { ...state, amount: action.payload, convertmessage: action.payload };
        default: return state;
    }
}
export default CryptoReducers;