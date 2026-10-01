intervalId = null;

self.onmessage = function(e) {
    if (e.data.action === 'start') {
        let timeLeft = e.data.time;
        
        intervalId = setInterval(() => {
            timeLeft--;
            // Send the updated time back to the main page
            self.postMessage({ action: 'tick', timeLeft: timeLeft });
            
            if (timeLeft <= 0) {
                clearInterval(intervalId);
                self.postMessage({ action: 'expired' });
            }
        }, 1000);
    } else if (e.data.action === 'stop') {
        clearInterval(intervalId);
    }
};