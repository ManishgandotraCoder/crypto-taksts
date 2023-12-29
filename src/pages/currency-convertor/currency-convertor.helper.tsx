import React, { useEffect, useState } from "react"
import CurrencyconvertorComponentContainer from "./currency-convertor.container"
import { useDispatch, useSelector } from "react-redux"
import { cryptoList , cryptoConversion} from "../../redux/actions/crypto.actions"
import { cryptoReducerType } from "./currency-convertor.type"
const CurrencyconvertorComponentHelper = () => {
    const [formvalues, setFormvalues] = useState({
        Currency: 'usd',
        Crypto: '',
        Amount: 1
    })
    const [submit, setSubmit] = useState(false)
    const dispatch = useDispatch()
    const crypto = useSelector((item: cryptoReducerType)=> item.crypto)
    useEffect(() => {
        getData()
    }, [])
    const getData = async() => {
        dispatch(await cryptoList())
    }
    const handleSubmit = async(event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault();
        setSubmit(true)
        if (formvalues.Crypto , formvalues.Currency , formvalues.Amount){
            dispatch(await cryptoConversion(formvalues.Crypto , formvalues.Currency , formvalues.Amount))
        }
    }
    const changeValues = (id: string, event: React.SyntheticEvent<EventTarget>) => {
        setFormvalues({ ...formvalues, [id]: event })
    }

    return (<CurrencyconvertorComponentContainer amount ={crypto.amount} cryptoList = {crypto.cryptoList} handleSubmit={handleSubmit} submit={submit} formvalues={formvalues} changeValues={changeValues} />)
}
export default CurrencyconvertorComponentHelper