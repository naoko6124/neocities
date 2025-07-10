fetch('./profile.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('sidebar').innerHTML += data;
        
        fetch('./game.json').then(response => response.json()).then(data => {
            document.getElementById('game-count').innerHTML += data.completed.length;
        });

        fetch('./vn.json').then(response => response.json()).then(data => {
            document.getElementById('vn-count').innerHTML += data.completed.length;
        });

        fetch('./anime.json').then(response => response.json()).then(data => {
            document.getElementById('anime-count').innerHTML += data.completed.length;
        });

        fetch('./manga.json').then(response => response.json()).then(data => {
            document.getElementById('manga-count').innerHTML += data.completed.length;
        });
    });