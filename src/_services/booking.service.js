

const BASE_URL = process.env.REACT_APP_API_PATH;

export const bookingService = {
    getBookings,
    addBooking,
    cancelBooking,
};

function getBookings() {
    const requestOptions = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        }
    };

    return fetch(`${BASE_URL}/bookings`, requestOptions).then(handleResponse);
}

function addBooking(booking) {
    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(booking)
    };

    return fetch(`${BASE_URL}/bookings`, requestOptions).then(handleResponse);
}

function cancelBooking(bookingId) {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
        },
    };

    return fetch(`${BASE_URL}/bookings/${bookingId}`, requestOptions).then(handleResponse);
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                //logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}