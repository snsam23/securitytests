const fetch = require('node-fetch');

// Simulate making 1000 API requests in a tight loop
for (let i = 0; i < 1000; i++) {
    fetch('https://api.github.com/users/octocat')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
