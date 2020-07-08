import React, { Component } from 'react';
import Header from './Header';
import Carousel from './Carousel';
import SmartPhoneList from './SmartPhoneList';
import LaptopList from './LaptopList';
import Promotion from './Promotion';

class Index extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <SmartPhoneList />
                <LaptopList />
                <Promotion />
            </div>
        );
    }
}

export default Index;