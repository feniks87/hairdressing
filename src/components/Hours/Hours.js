import React, {Component} from 'react';
import { connect } from 'react-redux';
import HourItem from '../Hours/HourItem/HourItem'
import { hoursActions } from '../../_actions/hours.actions';


class Hours extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(hoursActions.getWorkingHours(this.props.locationId));
    }

    render(){
        const hours = this.props.hours.filter(e => e.locationId === this.props.locationId);
        if (!hours) { return null; }

        return (
            <div>

                {hours.map(hourItem =>
                    <HourItem day={hourItem.day} startTime={hourItem.startTime} finishTime={hourItem.finishTime} key={hourItem.id}/>
                )}
            </div>
        );

    }
}



function mapStateToProps(state) {
    const { hours, fetching } = state.workingHours;
    return {
        hours: hours,
        fetching: fetching,
    };
}

const connectedHours = connect(mapStateToProps)(Hours);

export { connectedHours as Hours };