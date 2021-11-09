import React, { Component } from 'react';
import {useNavigate} from 'react-router-dom';

class HistorySample extends Component {
        
    // go back
    handleGoBack = () => {
        this.props.history.goBack();
    };

    // go Home
    handleGoHome = () => {
        this.props.history.push("/");
    }
    componentDidMount() {
        this.unblock = this.props.history.block('정말 나가겠습니까?');
    }

    componentWillUnmount () {
        if(this.unblock) {
            this.unblock();
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.handleGoBack}>뒤로</button>
                <button onClick={this.handleGoHome}>홈으로</button>
            </div>
        );
    }
}

export default HistorySample;