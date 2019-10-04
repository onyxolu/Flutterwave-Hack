import React, {Component} from 'react';
import axios from 'axios';



class Api extends Component {
    state = {

    }

    componentDidMount() {

        const url = 'http://enginear.test/api/user';

        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }

        axios.get(url, config);
        // fetch('http://enginear.test/api/user')
        // .then((data)=> {
        //     console.log(data); xi
        // })
    }

    render () {
        return(
            <div>

            </div>
        );
    }
}

export default Api;
