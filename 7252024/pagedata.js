document.addEventListener('DOMContentLoaded', function() {
    // Example data
    const userData = {
        username: 'enock',
        followers: 10000,
        following: 30
    };
    

    // Set the data to the HTML elements
    document.getElementById('username').textContent = userData.username;
    document.getElementById('followers').textContent = 'Followers: ' + userData.followers;
    document.getElementById('following').textContent = 'Following: ' + userData.following;
});