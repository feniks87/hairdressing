import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { alert } from './alert.reducer';
import { servicesInfo } from './servicesInfo.reducer';
import { team } from './team.reducer';
import { contactsInfo } from './contact.reducer';
import { workingHours } from './hours.reducer';
import { bookingInfo } from './booking.reducer';
import { userInfo } from './user.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    alert,
    servicesInfo,
    team,
    contactsInfo,
    workingHours,
    bookingInfo,
    userInfo,
});

export default rootReducer;