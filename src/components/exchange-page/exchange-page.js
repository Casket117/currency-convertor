import { Component } from "react";
import CbrServices from "../../services/CbrServices";

import "../exchange-rates-page/exchange-rates-page.css";

class ExchangePage extends Component {

    state = {
        usd: '',
        rub: '',
        eur: '',
        firstValue: '',
        secondValue: '',
        basicCurrencyName1: 'rub',
        basicCurrencyName2: 'usd'
    }

    Currency = new CbrServices();

    getCurrencyValue = () => {
        this.Currency.getAllcurr()
            .then(res => 
                this.setState({
                usd: +res.Valute.USD.Value,
                rub: 1,
                eur: +res.Valute.EUR.Value,
            }))
    }

    onChange = (e) => {
        if (e.target.name === 'firstValue' && this.state.basicCurrencyName1 === 'rub' && this.state.basicCurrencyName2 === 'rub') {
            this.setState(() => ({
                firstValue: e.target.value,
                secondValue: e.target.value,
            }))
        } else if (e.target.name === 'secondValue' && this.state.basicCurrencyName1 === 'rub' && this.state.basicCurrencyName2 === 'rub') {
            this.setState(() => ({
                firstValue: e.target.value,
                secondValue: e.target.value 
            }))
        }
        if (e.target.name === 'firstValue' && this.state.basicCurrencyName1 === 'rub' && this.state.basicCurrencyName2 === 'usd') {
            this.setState(() => ({
                firstValue: e.target.value,
                secondValue: (e.target.value * this.state.usd).toFixed(2)
            }))
        } else if (e.target.name === 'secondValue' && this.state.basicCurrencyName1 === 'rub' && this.state.basicCurrencyName2 === 'usd') {
            this.setState(() => ({
                firstValue: (e.target.value * this.state.usd).toFixed(2),
                secondValue: e.target.value 
            }))
        }
        if (e.target.name === 'firstValue' && this.state.basicCurrencyName1 === 'rub' && this.state.basicCurrencyName2 === 'eur') {
            this.setState(() => ({
                firstValue: e.target.value,
                secondValue: (e.target.value * this.state.eur).toFixed(2)
            }))
        } else if (e.target.name === 'secondValue' && this.state.basicCurrencyName1 === 'rub' && this.state.basicCurrencyName2 === 'eur') {
            this.setState(() => ({
                firstValue: (e.target.value * this.state.eur).toFixed(2),
                secondValue: e.target.value 
            }))
        }
        if (e.target.name === 'firstValue' && this.state.basicCurrencyName1 === 'usd' && this.state.basicCurrencyName2 === 'rub') {
            this.setState(() => ({
                firstValue: e.target.value,
                secondValue: (e.target.value * this.state.usd).toFixed(2),
            }))
        } else if (e.target.name === 'secondValue' && this.state.basicCurrencyName1 === 'usd' && this.state.basicCurrencyName2 === 'rub') {
            this.setState(() => ({
                firstValue: (e.target.value / this.state.usd).toFixed(2),
                secondValue: e.target.value
            }))
        }
        if (e.target.name === 'firstValue' && this.state.basicCurrencyName1 === 'usd' && this.state.basicCurrencyName2 === 'usd') {
            this.setState(() => ({
                firstValue: e.target.value,
                secondValue: e.target.value
            }))
        } else if (e.target.name === 'secondValue' && this.state.basicCurrencyName1 === 'usd' && this.state.basicCurrencyName2 === 'usd') {
            this.setState(() => ({
                firstValue: e.target.value,
                secondValue: e.target.value 
            }))
        }
        if (e.target.name === 'firstValue' && this.state.basicCurrencyName1 === 'usd' && this.state.basicCurrencyName2 === 'eur') {
            this.setState(() => ({
                firstValue: e.target.value,
                secondValue: ((this.state.usd / this.state.eur) * e.target.value).toFixed(2)
            }))
        } else if (e.target.name === 'secondValue' && this.state.basicCurrencyName1 === 'usd' && this.state.basicCurrencyName2 === 'eur') {
            this.setState(() => ({
                firstValue: ((this.state.eur / this.state.usd) * e.target.value).toFixed(2),
                secondValue: e.target.value 
            }))
        }
        if (e.target.name === 'firstValue' && this.state.basicCurrencyName1 === 'eur' && this.state.basicCurrencyName2 === 'rub') {
            this.setState(() => ({
                firstValue: e.target.value,
                secondValue: (e.target.value * this.state.eur).toFixed(2),
            }))
        } else if (e.target.name === 'secondValue' && this.state.basicCurrencyName1 === 'eur' && this.state.basicCurrencyName2 === 'rub') {
            this.setState(() => ({
                firstValue: (e.target.value / this.state.eur).toFixed(2),
                secondValue: e.target.value
            }))
        }
        if (e.target.name === 'firstValue' && this.state.basicCurrencyName1 === 'eur' && this.state.basicCurrencyName2 === 'eur') {
            this.setState(() => ({
                firstValue: e.target.value,
                secondValue: e.target.value
            }))
        } else if (e.target.name === 'secondValue' && this.state.basicCurrencyName1 === 'eur' && this.state.basicCurrencyName2 === 'eur') {
            this.setState(() => ({
                firstValue: e.target.value,
                secondValue: e.target.value 
            }))
        }
        if (e.target.name === 'firstValue' && this.state.basicCurrencyName1 === 'eur' && this.state.basicCurrencyName2 === 'usd') {
            this.setState(() => ({
                firstValue: e.target.value,
                secondValue: ((this.state.eur / this.state.usd) * e.target.value).toFixed(2)
            }))
        } else if (e.target.name === 'secondValue' && this.state.basicCurrencyName1 === 'eur' && this.state.basicCurrencyName2 === 'usd') {
            this.setState(() => ({
                firstValue: ((this.state.usd / this.state.eur) * e.target.value).toFixed(2),
                secondValue: e.target.value 
            }))
        }
    }

    onValueChange = (e) => {
        this.setState(() => ({
            firstValue: '',
            secondValue: '',
            basicCurrencyName1: e.target.name
        }))
    }

    onValueChange2 = (e) => {
        this.setState(() => ({
            firstValue: '',
            secondValue: '',
            basicCurrencyName2: e.target.name
        }))
    }

    render() {
        const {usd, rub, eur, firstValue, secondValue, basicCurrencyName1, basicCurrencyName2} = this.state;
        

        if (rub === '' && usd === '' && eur === '') {
            this.getCurrencyValue();
        }

        return (
            <div>
                <div>
                    <div className="dropdown">
                        <button className="btn">{basicCurrencyName1}</button>
                        <div className="dropdown-content">
                            <button onClick={this.onValueChange} name='rub' className="valute">RUB</button>
                            <button onClick={this.onValueChange} name='usd' className="valute">USD</button>
                            <button onClick={this.onValueChange} name='eur' className="valute">EUR</button>
                        </div>
                    </div>
                    <input type='number' name='firstValue' onChange={this.onChange} value={firstValue}/>
                </div>
                <div className="top">
                    <div className="dropdown">
                        <button className="btn">{basicCurrencyName2}</button>
                        <div className="dropdown-content">
                            <button onClick={this.onValueChange2} name='rub' className="valute">RUB</button>
                            <button onClick={this.onValueChange2} name='usd' className="valute">USD</button>
                            <button onClick={this.onValueChange2} name='eur' className="valute">EUR</button>
                        </div>
                    </div>
                    <input type='number' name='secondValue' onChange={this.onChange} value={secondValue}/>
                </div>
    
            </div>
        )
    }
}

export {ExchangePage};