fetch('/profile.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('sidebar').innerHTML += data;
        
        fetch('/game/data.json').then(response => response.json()).then(data => {
            document.getElementById('game-count').innerHTML += data.completed.length;
        });

        fetch('/anime/data.json').then(response => response.json()).then(data => {
            document.getElementById('anime-count').innerHTML += data.completed.length;
        });

        fetch('/manga/data.json').then(response => response.json()).then(data => {
            document.getElementById('manga-count').innerHTML += data.completed.length;
        });
    });