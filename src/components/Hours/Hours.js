import React, {Component} from 'react';
import { connect } from 'react-redux';
import HourItem from '../Hours/HourItem/HourItem'


class Hours extends Component {
    render(){
        const hours = this.props.hours.filter(e => e.locationId === this.props.locationId);
        if (!hours) { return null; }

        return (
            <div>

                {hours.map(hourItem =>
                    <HourItem
                        day={hourItem.day}
                        startTime={`${hourItem.startHour}.${hourItem.startMinutes === 0 ? '00' : hourItem.startMinutes}`}
                        finishTime={`${hourItem.finishHour}.${hourItem.finishMinutes === 0 ? '00' : hourItem.finishMinutes}`}
                        key={hourItem.id}/>
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