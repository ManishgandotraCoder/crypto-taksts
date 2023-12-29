import React from "react"
import './currency-convertor.css'
import { currencyConvertorType } from "./currency-convertor.type"
const Input = React.lazy(() => import("../../components/input/input"));
const Select = React.lazy(() => import("../../components/select/select"));
const Button = React.lazy(() => import("../../components/button/button"));

const CurrencyConvertorContainerComponent = ({ submit, handleSubmit, formvalues, changeValues, cryptoList, amount }: currencyConvertorType) => {
    const currencyList = [
        { name: "US Dollar", id: "usd" },
        { name: "Japanese Yen", id: "jpy" },
        { name: "Euro", id: "eur" },
        { name: "Bitcoin", id: "btc" },
        { name: "Etherium", id: "eth" },
        { name: "Binance Coin", id: "bnb" },

    ]

    return (
        <div className="signupSection">

            <form noValidate onSubmit={(e) => handleSubmit(e)} className="signupForm" name="signupform">
                <h2>Crypto Conversion</h2>
                <ul className="noBullet">
                    <li>
                        <Select value={formvalues.Crypto} name={'Crypto'} arr={cryptoList} submit={submit} changeValues={changeValues} />
                    </li>
                    <li>
                        <Input value={formvalues.Amount} title={'Amount'} submit={submit} type={'number'} changeValues={changeValues} />
                    </li>
                    <li>
                        <Select value={formvalues.Currency} name={'Currency'} arr={currencyList} submit={submit} changeValues={changeValues} />
                    </li>
                    <li id="center-btn">
                        <Button handleSubmit={handleSubmit} />
                    </li>
                    <li>
                        {submit && formvalues.Amount
                            && formvalues.Crypto
                            && formvalues.Currency && <span>{formvalues.Amount} {formvalues.Crypto} costs {amount} {formvalues.Currency}'s</span>}
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default CurrencyConvertorContainerComponent;