import * as cryptoApi from "../apis/crypto.apis"
import * as cryptoTypes from "../constants/crypto.types"

export const cryptoList = async () => {
    const response = await cryptoApi.cryptoList()
    return {
        type: cryptoTypes.default.GET_CRYPTO,
        payload: response?.data
    }
}
export const cryptoConversion = async (currency: String, coin: String, amount: Number) => {
    const response = await cryptoApi.cryptoConversion(currency, coin, amount)
    return {
        type: cryptoTypes.default.CONVERT_CRYPTO_CURRENCY,
        payload: response.data
    }
}

