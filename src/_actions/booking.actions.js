import { bookingConstants } from '../_constants/booking.constants';
import { alertActions } from './alert.actions';
import axios from '../axios-instance';
import { history } from '../_helpers/history';

export const bookingActions = {
    getBookings,
    addBooking,
    cancelBooking,
};

function getBookings(token) {
    return dispatch => {
        dispatch(request());
        axios.get(`/bookings.json?auth=${token}`)
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

function addBooking(booking, token) {
    return dispatch => {
        dispatch(request());
        axios.post(`/bookings.json?auth=${token}`, booking)
            .then(booking => {
                    dispatch(success(booking.data));
                    history.push('/account');
                    dispatch(alertActions.success('Your booking was successful'));
                })
            .catch(error => {
                dispatch(failure(error.message));
                dispatch(alertActions.error(error.message));
            });
    };

    function request() { return { type: bookingConstants.ADD_BOOKING_REQUEST } }
    function success(booking) { return { type: bookingConstants.ADD_BOOKING_SUCCESS, booking } }
    function failure(error) { return { type: bookingConstants.ADD_BOOKING_FAILURE, error } }
}

function cancelBooking(bookingId, token) {
    return dispatch => {
        dispatch(request(bookingId));
        axios.delete(`/bookings/${bookingId}.json?auth=${token}`, bookingId)
            .then(booking => {
                dispatch(success(bookingId));
                dispatch(alertActions.success('Booking has been successfully cancelled'));
            })
            .catch(error => {
                dispatch(failure(error.message));
                dispatch(alertActions.error(error.message));
            });
    };

    function request(bookingId) { return { type: bookingConstants.CANCEL_BOOKING_REQUEST, bookingId } }
    function success(bookingId) { return { type: bookingConstants.CANCEL_BOOKING_SUCCESS, bookingId } }
    function failure(error) { return { type: bookingConstants.CANCEL_BOOKING_FAILURE, error } }
}