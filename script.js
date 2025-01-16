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

//Drop down function
function setup() {
  const allEpisodes = getAllEpisodes(); // here i am fetshing all the episodes
  const dropdown = document.getElementById("showDropDown");

  // Populate dropdown
  dropdown.innerHTML = '<option value="all">All Episodes</option>' +
    allEpisodes.map((episode) => {
      const code = `S${String(episode.season).padStart(2, "0")}E${String(episode.number).padStart(2, "0")}`;
      return `<option value="${code}">${code} - ${episode.name}</option>`;
    }).join(''); //This where i am populating the drop down with the required format,i used map() to iterate over the episode array and execute the episode select
                 // i also used the join  to allow the strings chosen by map to be joined into a single string without any parameters, the episode season and the episode number string.
  
  dropdown.addEventListener("change", () => {//This is the event listener for the drop down, 
    const selected = dropdown.value;
    const episodesToShow = selected === "all"
      ? allEpisodes
      : allEpisodes.filter((ep) => `S${String(ep.season).padStart(2, "0")}E${String(ep.number).padStart(2, "0")}` === selected);
    displayEpisodes(episodesToShow);
  });

  displayEpisodes(allEpisodes); // Show all episodes by default
}

 

 
//search functionality
const input = document.querySelector("#q");

if (input) {

  input.addEventListener("input", function () {
    const searchTerm = input.value.toLowerCase();

    const allEpisodes = getAllEpisodes();

    if(!allEpisodes || allEpisodes.length === 0) {
      console.error("No episodes found.");
      return;
    }


    const filteredEpisodes = allEpisodes.filter((episode) => {

      const formattedString = `S0${episode.season}E0${episode.number} - ${episode.name}`.toLowerCase();

      return formattedString.includes(searchTerm);
    });

    displayEpisodes(filteredEpisodes);
  });
}

// dropdown

 
//what i did in the search functiolanlity was: 
//i selected the input element id "q";
//I used an if stament to check if the input element exist in the DOM
//Added an Event listner
//I called back the the getAllEpisode Function to get a list of all episodes.
//I check if the list of episodes is empty or undefined.
//Filtered my episodes according to the requiremnts. 
// I called back the display epidoes function to sho only filtered episodes 

window.onload = setup; // Call setup when the window loads