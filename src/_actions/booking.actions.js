import { bookingConstants } from '../_constants/booking.constants';
import { bookingService } from '../_services/booking.service';
import { alertActions } from './alert.actions';

export const bookingActions = {
    getBookings,
    addBooking,
    cancelBooking,
};

function getBookings() {
    return dispatch => {
        dispatch(request());

        bookingService.getBookings()
            .then(bookings => {
                    console.log(bookings);
                    dispatch(success(bookings));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request() { return { type: bookingConstants.FETCH_BOOKINGS_REQUEST } }
    function success(bookings) { return { type: bookingConstants.FETCH_BOOKINGS_SUCCESS, bookings } }
    function failure(error) { return { type: bookingConstants.FETCH_BOOKINGS_FAILURE, error } }
}

function addBooking(booking) {
    return dispatch => {
        dispatch(request(booking));

        bookingService.addBooking(booking)
            .then(booking => {
                    console.log('Booking successful');
                    console.log(booking);
                    dispatch(success(booking));
                    dispatch(alertActions.success('Booking successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(booking) { return { type: bookingConstants.ADD_BOOKING_REQUEST, booking } }
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