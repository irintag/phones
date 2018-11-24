import React from 'react';
import ReactDOM from 'react-dom';
import Phone from '../shop/phones';
import '../css/phones.less';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            arrows_display: '',
        }
    }

    age(phone) {
        this.setState({
            phone: phone,
            arrows_display: 'block'
        });

    }

    render() {
        return (
            <div className="box">
                <PhoneList age={this.age.bind(this)}/>
                <Details arrows={this.state.arrows_display}

                         phone={this.state.phone} />
            </div>
        )
    }
}

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: '',
            count: 0,
            arg: this.props
        }
    }

    arrowClick(num) {
        console.log('this.state.count', this.state.count);
        console.log('this.state.imageUrl', this.state.imageUrl);
        let url ;
        if(this.state.imageUrl === '') {
            url = this.props.phone.imageUrl;
        }
        else {
            url = this.state.imageUrl;
        }
        let count = this.state.count;
        let new_count = parseInt(count) + num;
        url = url.replace(count+'.jpg',new_count +'.jpg');
        this.setState({
            imageUrl: url,
            count: new_count
        });
    }

    render() {
        let phone = this.props.phone;
        let url;
        if (this.state.imageUrl === '') {
            url = phone.imageUrl;
        }
        else {
            url = this.state.imageUrl;
        }
        return (
            <div className="phone_details">
                <h3>{phone.name}</h3>
                <span>{phone.id}</span>
                <div>
                    <img src={url}/>
                   {/* <Arrows
                            leftClick={this.arrowClick.bind(this, -1)}
                            rightClick={this.arrowClick.bind(this, 1)}
                            display={this.props.arrows} />*/}
                </div>
                <p>{phone.snippet}</p>
            </div>
        )
    }
}

class Arrows extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{display: this.props.display}} className="arrows">
                <div onClick={this.props.leftClick}
                     className="arrow-left">

                </div>
                <div onClick={this.props.rightClick}
                     className="arrow-right">

                </div>
            </div>
        )
    }
}


class PhoneList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elem: '',
        }
    }

    render() {
        const phone_list = Phone().map((phone) => {
            return <li onClick={this.props.age.bind(null, phone)}
                       key={phone.age}>
                <h5>{phone.id}</h5>
                <img src={phone.imageUrl}/>
            </li>
        });
        return (
            <div className="phone_list">
                <ul className="list">
                    {phone_list}
                </ul>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#phone')
);
