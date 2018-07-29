

const BASE_URL = process.env.REACT_APP_API_PATH;

export const teamService = {
    getTeam
};

function getTeam() {
    const requestOptions = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        }
    };
    
    return fetch(`${BASE_URL}/stylists`, requestOptions).then(handleResponse);
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