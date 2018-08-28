import fetch from 'cross-fetch';

const client = {
    openBrowserTab: url => {
        console.log('url!!!', url);
        return fetch('/proxy/openbrowsertab', {
            credentials: 'same-origin',
            method: 'POST', // or 'PUT'
            body: JSON.stringify({ url }), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(response => {
                // if (response.status === '401') {
                //     return;
                // }
                return Promise.resolve(response);
            }).catch(e => console.log('error => generateWebsite!!!', e))
    },
};

export default client;
