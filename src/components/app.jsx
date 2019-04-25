import 'babel-polyfill';
import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    height: 500px;
    width: 500px;
  }
`;
var port = chrome.runtime.connect();

class App extends Component {
    constructor() {
        super();

        this.state = {
            item: 'Supreme®/Steiff® Bear',
            color: '',
            size: '',
            method: 'paypal',
            card: '',
            CVV: '',
            mois: '01',
            year: 2018
        };

        this.itemChange = this.itemChange.bind(this);
        this.colorChange = this.colorChange.bind(this);
        this.launch = this.launch.bind(this);
        this.methodChange = this.methodChange.bind(this);
        this.cardChange = this.cardChange.bind(this);
        this.CVVChange = this.CVVChange.bind(this);
        this.yearChange = this.yearChange.bind(this);
        this.moisChange = this.moisChange.bind(this);
        this.sizeChange = this.sizeChange.bind(this);

        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
            if (request.page == 'pay') sendResponse(this.state);
        });
    }

    itemChange(e) {
        this.setState({ item: e.target.value });
    }

    colorChange(e) {
        this.setState({ color: e.target.value });
    }

    sizeChange(e) {
        this.setState({ size: e.target.value });
    }

    methodChange(e) {
        this.setState({ method: e.target.value });
    }

    cardChange(e) {
        this.setState({ card: e.target.value });
    }

    CVVChange(e) {
        this.setState({ CVV: e.target.value });
    }

    sizeChange(e) {
        this.setState({ size: e.target.value });
    }

    moisChange(e) {
        this.setState({ mois: e.target.value });
    }

    yearChange(e) {
        this.setState({ year: e.target.value });
    }

    launch() {
        //bot(this.state.item, this.state.color)
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            chrome.tabs.sendMessage(tabs[0].id, this.state, response => {
                if (response.found == false) {
                    setTimeout(this.launch, 2000);
                }
            });
        });
    }

    render() {
        return (
            <div>
                <GlobalStyle whiteColor />
                <p>
                    Item name: <br />
                    <input
                        type="text"
                        onChange={this.itemChange}
                        value={this.state.item ? this.state.item : ''}
                    />
                </p>
                <p>
                    Color: <br />
                    <input
                        type="text"
                        onChange={this.colorChange}
                        value={this.state.color ? this.state.color : ''}
                    />
                </p>
                <p>
                    Size: <br />
                    <input
                        type="text"
                        onChange={this.sizeChange}
                        value={this.state.size ? this.state.size : ''}
                    />
                </p>
                <p>
                    Méthode de payement: <br />
                    <select onChange={this.methodChange} value={this.state.method}>
                        <option value="paypal">Paypal</option>
                        <option value="master">MasterCard</option>
                    </select>
                </p>
                <p>
                    Carte de crédit: <br />
                    <input
                        type="text"
                        onChange={this.cardChange}
                        value={this.state.card ? this.state.card : ''}
                    />
                </p>
                <p>
                    CVV: <br />
                    <input
                        type="text"
                        onChange={this.CVVChange}
                        value={this.state.CVV ? this.state.CVV : ''}
                    />
                </p>
                <p>
                    Mois:
                    <input
                        type="text"
                        onChange={this.moisChange}
                        value={this.state.mois ? this.state.mois : ''}
                    />
                    Année
                    <input
                        type="text"
                        onChange={this.yearChange}
                        value={this.state.year ? this.state.year : ''}
                    />
                </p>
                <button onClick={this.launch}>Start bot</button>
            </div>
        );
    }
}

export default App;
