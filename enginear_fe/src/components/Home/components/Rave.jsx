import React, { Component } from 'react'
import PropTypes from 'prop-types';
import RavePaymentModal from 'react-ravepayment';
// import './RaveScript'

export default class Rave extends Component {
    static propTypes = {
        prop: PropTypes
    }

    state = {
        key: "FLWPUBK-7224ff9f4d623d4f9f0f7ddec072bfd4-X",
        email: "foo@example.com",
        amount: 1000
    }

    callback = (response) => {
        console.log(response);

    }

    close = () => {
        console.log("Payment closed");
    }

    getReference = () => {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

        for (let i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }


    render() {
        return (
            <div>
                <RavePaymentModal
                    text="Make Payment"
                    class="payButton"
                    metadata={[{ metaname: 'Device', metavalue: 'IPhone X' }]}
                    reference={this.getReference()}
                    email={this.state.email}
                    amount={this.state.amount}
                    ravePubKey={this.state.key}
                    callback={this.callback}
                    close={this.close}
                    isProduction={true}
                    tag="button"
                />
            </div>
        )
    }
}
