import _helperaxios from "../../constants/axios.helper"

function cryptoList() {
    return _helperaxios('/crypto', {}, 'GET')
}
function cryptoConversion(currency: String, coin: String, amount: Number) {
    return _helperaxios(`/crypto/conversion?currency=${currency}&coin=${coin}&amount=${amount}`, {}, 'GET')
}

export {
    cryptoList,
    cryptoConversion,
}