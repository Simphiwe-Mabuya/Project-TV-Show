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

const input = document.document.querySelector("#q");
input.addEventListener("Keyup", function () {
  const searchTerm = input.value.tolowercase(); //getting the search term and ensuring that it is case sensisitive 
  const allEpisodes = getAllEpisodes(); //fetching all episodes
  const filteredEpisodes = allEpisodes.filter(episode => { //filtering the episode array and ensuring that they match the one typed
    const formattedString = `0${episode.season}E0${episode.number} - ${episode.name}`.toLocaleLowerCase(); //formated the strings for each epidoes to match the "S01E01 - Winter is Coming" requirement. am really not sure how this works but i saw it in a youtube video i was working with to this tasks. i am still trying to understand it
    return formattedString.includes(searchTerm); //checking if the searched passwords match teh
  });
  displayEpisodes(filteredEpisodes); //Showing filltered episodes 
});

 

 
   
 

  

window.onload = setup;
