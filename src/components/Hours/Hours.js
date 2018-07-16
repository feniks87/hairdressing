import React, {Component} from 'react';

const PATH_HOURS = 'http://localhost:3000/api/hours';

class Hours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: null,
        };

        this.setHours = this.setHours.bind(this);
    }

    setHours(result) {
        this.setState({ result });
    }

    componentDidMount() {
        fetch(`${PATH_HOURS}`)
            .then(response => response.json())
            .then(result => this.setHours(result))
            .catch(error => console.log(error));
    }
}
    render(){

    return (
        <p className="text-center"> {props.weekDay} : {props.hours}</p>
    );

    }
}



export default hours;