//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  let episodes = document.getElementById("root");
  episodes.innerHTML = '';
  
  allEpisodes.forEach((episode) => {
    const episodeHTML = `
    <div class="episode">
    <h3>${episode.name}</h3>
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
