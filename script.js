//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes(); // call the function to get all episodes
  let episodes = document.getElementById("root");
  episodes.innerHTML = '';
  

  //added a episode card class and classes for the card container to be described specificly and make it easy to target when working with css
  allEpisodes.map((episode) => {
    const episodeHTML = `
    <div class="episode-card"> 
    <h3 class= "title">${episode.name}<small><bold> : </bold>S0${episode.season}E0${episode.number}</small></h3>
    <img src="${episode.image.medium}" alt="${episode.name}">
    <div class="summary">${episode.summary}</div>
    <p class="link">link to the <a href="${episode._links.self.href}">Episode</a></p> 
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
