fetch('/profile.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('sidebar').innerHTML += data;
        
        fetch('/geemu/data.json').then(response => response.json()).then(data => {
            document.getElementById('game-count').innerHTML += data.played.length;
        });

        fetch('/terebi/data.json').then(response => response.json()).then(data => {
            document.getElementById('tv-count').innerHTML += data.completed.length;
        });

        fetch('/hon/data.json').then(response => response.json()).then(data => {
            document.getElementById('book-count').innerHTML += data.completed.length;
        });
    });