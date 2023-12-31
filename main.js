document.addEventListener("DOMContentLoaded", function () {
    const username = "thiagodourado87"; 

   
    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
            
            document.querySelector(".profile-name").textContent = data.name || data.login;
            document.querySelector(".profile-username").textContent = `@${data.login}`;
            document.querySelector(".profile-avatar").src = data.avatar_url;
            document.querySelector("#repos-count").textContent = data.public_repos;
            document.querySelector("#followers-count").textContent = data.followers;
            document.querySelector("#following-count").textContent = data.following;
            document.querySelector(".profile-link").href = data.html_url;
        })
        .catch(error => {
            console.error("Erro ao buscar dados:", error);
            
        });
});

