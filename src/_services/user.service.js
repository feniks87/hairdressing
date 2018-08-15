

const BASE_URL = process.env.REACT_APP_API_PATH;

export const userService = {
    login,
    logout,
    register,
    getClient,
    updateClient
};

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    };

    return fetch(`${BASE_URL}/clients`, requestOptions).then(handleResponse);
}


function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    };

    return fetch(`${BASE_URL}/clients/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user.id) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', user.id);
                localStorage.setItem('ttl', user.ttl);
                localStorage.setItem('userId', user.userId);
                localStorage.setItem('created', user.created);
            }

            return user;
        });
}

function getClient(clientId, token) {
    const requestOptions = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    };

    return fetch(`${BASE_URL}/clients/${clientId}?access_token=${token}`, requestOptions)
        .then(handleResponse);
}

function updateClient(client, token) {
    const requestOptions = {
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            phone: client.phone,
            name: client.name,  
            email: client.email,
            id: client.id
           })
    };

    return fetch(`${BASE_URL}/clients/${client.id}?access_token=${token}`, requestOptions)
        .then(handleResponse);
}

function logout(id) {
    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': id,
        }
    };

    return fetch(`${BASE_URL}/clients/logout`, requestOptions)
        .then(handleResponse)
        .then(() => {
            localStorage.removeItem('token');
            localStorage.removeItem('ttl');
            localStorage.removeItem('userId');
            localStorage.removeItem('created');
        });
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