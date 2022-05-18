import { Component } from "react";
import CbrServices from "../../services/CbrServices";
import "./exchange-rates-page.css";

class ExchangeRatesPage extends Component {

    state = {
        usd: '',
        rub: '',
        eur: '',
    }

    Currency = new CbrServices();

    getUSD = () => {
        this.Currency.getAllcurr()
            .then(res => 
                this.setState({
                rub: 'RUB: ' + (res.Valute.USD.Value).toFixed(4),
                usd: '',
                eur: 'EUR: ' + (res.Valute.USD.Value / res.Valute.EUR.Value).toFixed(4)
            }))
    }

    getEUR = () => {
        this.Currency.getAllcurr()
            .then(res => 
                this.setState({
                usd: 'USD: ' + (res.Valute.EUR.Value / res.Valute.USD.Value).toFixed(4),
                rub: 'RUB: ' + (res.Valute.EUR.Value).toFixed(4),
                eur: ''
            }))
    }

    getRUB = () => {
        this.Currency.getAllcurr()
            .then(res => 
                this.setState({
                usd: 'USD: ' + res.Valute.USD.Value,
                rub: '',
                eur: 'EUR: ' + res.Valute.EUR.Value,
            }))
    }

    render() {
        const {usd, rub, eur} = this.state;

        let basicCurrencyChangeRUB = '',
            basicCurrencyChangeUSD = '',
            basicCurrencyChangeEUR = '',
            basicCurrencyName;

        
        if (usd === '') {
            basicCurrencyChangeUSD += 'none';
            basicCurrencyName = 'USD';
        }
        if (eur === '') {
            basicCurrencyChangeEUR += 'none';
            basicCurrencyName = 'EUR';
        }
        if (rub === '') {
            basicCurrencyChangeRUB += 'none';
            basicCurrencyName = 'RUB';
        }
        if (rub === '' && usd === '' && eur === '') {
            this.getRUB();
        }
        
        return (
            <div>
                <div className="dropdown">
                    <button className="btn">{basicCurrencyName}</button>
                    <div className="dropdown-content">
                        <button className="valute" onClick={this.getRUB}>RUB</button>
                        <button className="valute" onClick={this.getUSD}>USD</button>
                        <button className="valute" onClick={this.getEUR}>EUR</button>
                    </div>
                </div>
                <input className={basicCurrencyChangeRUB} type="text" readOnly="readonly" name='rub' value={rub}/>
                <input className={basicCurrencyChangeUSD} type="text" readOnly="readonly" name='usd' value={usd}/>
                <input className={basicCurrencyChangeEUR} type="text" readOnly="readonly" name='eur' value={eur}/>
            </div>
        )
    }
}
    

export {ExchangeRatesPage};