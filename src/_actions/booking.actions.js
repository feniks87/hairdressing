import { bookingConstants } from '../_constants/booking.constants';
import { bookingService } from '../_services/booking.service';
import { alertActions } from './alert.actions';
import axios from '../axios-instance';

import { history } from '../_helpers/history';

export const bookingActions = {
    getBookings,
    addBooking,
    cancelBooking,
};

function getBookings() {
    return dispatch => {
        dispatch(request());

        axios.get('/bookings.json')
            .then(bookings => {
                const fetchedBookings = [];
                for (let key in bookings.data) {
                    fetchedBookings.push( {
                        ...bookings.data[key],
                        id: key
                    });
                }
                dispatch(success(fetchedBookings));
            })
            .catch(error => {
                    dispatch(failure(error.toString()));
            });
    };

    function request() { return { type: bookingConstants.FETCH_BOOKINGS_REQUEST } }
    function success(bookings) { return { type: bookingConstants.FETCH_BOOKINGS_SUCCESS, bookings } }
    function failure(error) { return { type: bookingConstants.FETCH_BOOKINGS_FAILURE, error } }
}

function addBooking(booking) {
    return dispatch => {
        dispatch(request());
        axios.post('/bookings.json', booking)
            .then(booking => {
                    dispatch(success(booking));
                    dispatch(alertActions.success('Your booking was successful!'));
                    history.push('/account');
                })
            .catch(error => {
                dispatch(failure(error.message));
                dispatch(alertActions.error(error.toString()));
            });
    };

    function request() { return { type: bookingConstants.ADD_BOOKING_REQUEST } }
    function success(booking) { return { type: bookingConstants.ADD_BOOKING_SUCCESS, booking } }
    function failure(error) { return { type: bookingConstants.ADD_BOOKING_FAILURE, error } }
}

function cancelBooking(bookingId) {
    return dispatch => {
        dispatch(request(bookingId));

        bookingService.addBooking(bookingId)
            .then(canceled => {
                    dispatch(success(bookingId));
                    dispatch(alertActions.success('Booking canceled successfully'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(bookingId) { return { type: bookingConstants.CANCEL_BOOKING_REQUEST, bookingId } }
    function success(bookingId) { return { type: bookingConstants.CANCEL_BOOKING_SUCCESS, bookingId } }
    function failure(error) { return { type: bookingConstants.CANCEL_BOOKING_FAILURE, error } }
}