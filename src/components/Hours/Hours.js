import React, {Component} from 'react';
import HourItem from '../Hours/HourItem/HourItem'

const PATH_HOURS = process.env.REACT_APP_API_PATH || 'http://localhost:3000/api';

class Hours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationId: props.locationId,
            result: null,
        };
        console.log( props);
        this.setHours = this.setHours.bind(this);
    }

    setHours(result) {
        this.setState({ result });
    }

    componentDidMount() {
        fetch(`${PATH_HOURS}/contacts/${this.state.locationId}/getHours`)
            .then(response => response.json())
            .then(result => this.setHours(result))
            .catch(error => console.log(error));
    }

    render(){
        const result = this.state.result;
        console.log(this.state.locationId);
        console.log(result);
        if (!result) { return null; }

        return (
            <div>

                {result.workingHours.map(hourItem =>
                    <HourItem day={hourItem.day} startTime={hourItem.startTime} finishTime={hourItem.finishTime}/>
                )}
            </div>
        );

    }
}



export default Hours;