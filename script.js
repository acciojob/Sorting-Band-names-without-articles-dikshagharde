//your code here

let touristSpots=['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
function removeArticles(touristSpots) {
//   words = touristSpots.split(" ");
//   if(words.length <= 1) return touristSpots;
//   if( words[0] == 'a' || words[0] == 'the' || words[0] == 'an' )
//     return words.splice(1).join(" ");
//   return touristSpots;
// }
	for (const article of articles) {
    if (touristSpots.toLowerCase().startsWith(article)) {
      return touristSpots.slice(article.length).trim();
    }
  }
  return touristSpots.trim();
}
const sortedBandNames = bandNames.sort((a, b) => removeArticle(a) > removeArticle(b) ? 1 : -1);

// create the HTML list
let htmlList = '<ul id="band">';
sortedBandNames.forEach(name => {
  htmlList += `<li>${name}</li>`;
});
htmlList += '</ul>';

console.log(htmlList);






	