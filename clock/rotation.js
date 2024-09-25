(function() {
    function updateClock() {
        var now = new Date();
        
        // Calculate degrees
        //var hourDeg = (now.getHours() % 12) / 12 * 360 + now.getMinutes() / 60 * 30;
        var hourDeg = (now.getHours()) / 24 * 360 + now.getMinutes() / 60 * 15; // im going to make it 24 hour instead
        var minuteDeg = now.getMinutes() / 60 * 360 + now.getSeconds() / 60 * 6;
        var secondDeg = now.getSeconds() / 60 * 360;

        // Update styles dynamically for each clock hand
        document.querySelector('.clockhour').style.transform = 'rotate(' + hourDeg + 'deg)';
        document.querySelector('.clockminute').style.transform = 'rotate(' + minuteDeg + 'deg)';
        document.querySelector('.clocksecond').style.transform = 'rotate(' + secondDeg + 'deg)';
    }

    // Call updateClock every second
    setInterval(updateClock, 1000);

    // Initialize the clock immediately
    updateClock();
})();