
const BASE_URL = process.env.REACT_APP_API_PATH;

export const contactService = {
    getContacts,
    getWorkingHours,
};

function getContacts() {
    const requestOptions = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        }
    };
    
    return fetch(`${BASE_URL}/contacts`, requestOptions).then(handleResponse);
}

function getWorkingHours(id) {
    const requestOptions = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        }
    };
    
    return fetch(`${BASE_URL}/contacts/${id}/getHours`, requestOptions).then(handleResponse);
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