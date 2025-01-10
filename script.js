//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes(); // call the function to get all episodes
  let episodes = document.getElementById("root");
  episodes.innerHTML = '';
  
  allEpisodes.map((episode) => {
    const episodeHTML = `
    <div class="episode">
    <h3>${episode.name}</h3>
    <p class="season-episode"><strong>-S0${episode.season}E0${episode.number}</strong></P>
    <img src="${episode.image.medium}" alt="${episode.name}">
    <div class="summary">${episode.summary}</div>
    </div>
    `;

    episodes.innerHTML += episodeHTML;
  });
  makePageForEpisodes(allEpisodes);

}



function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent ;
}

window.onload = setup;
