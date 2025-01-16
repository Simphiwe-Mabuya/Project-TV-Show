function setup() {
  const allEpisodes = getAllEpisodes(); // Call the function to get all episodes
  displayEpisodes(allEpisodes); // Display all episodes initially
}

// Function to display episodes
function displayEpisodes(episodes) {
  const episodesContainer = document.getElementById("root");
  episodesContainer.innerHTML = ''; // Clear previous content

  episodes.forEach((episode) => {
      const episodeHTML = `
          <div class="episode-card"> 
              <h3 class="title">${episode.name}<small><bold> : </bold>S0${episode.season}E0${episode.number}</small></h3>
              <img src="${episode.image.medium}" alt="${episode.name}">
              <div class="summary">${episode.summary}</div>
              <p class="link">Click to watch <a href="${episode._links.self.href}">Episode</a></p> 
          </div>
      `;

      episodesContainer.innerHTML += episodeHTML; // Append the episode HTML
  });
}

const input = document.querySelector("#q");

if (input) {
  input.addEventListener("input", function () {
    const searchTerm = input.ariaValueMax.toLowerCase();

    const allEpisodes = getAllEpisodes();



  }
}
 


window.onload = setup; // Call setup when the window loads