export interface currencyConvertorType {
    formvalues: {
        Amount: number,
        Currency: string,
        Crypto: string
    },
    changeValues: Function,
    submit: boolean,
    handleSubmit: Function,
    cryptoList: [{
        id: string,
        name: string
    }],
    amount: string
}
export interface cryptoReducerType {
    crypto: {
        cryptoList: [{
            id: string,
            name: string
        }]
        amount: string
    }

}