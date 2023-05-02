//your code here
//your code here
const bandNames = ["The Beatles", "Led Zeppelin", "Pink Floyd", "The Who", "The Rolling Stones", "AC/DC", "Queen"];

// Remove articles ('a', 'an', 'the') from the beginning of each band name
const removeArticles = (name) => name.replace(/^(a|an|the)\s+/i, '');

// Sort band names in lexicographic order (ignoring articles)
const sortedBandNames = bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Add sorted band names to the HTML list
const bandList = document.getElementById('band');
sortedBandNames.forEach(name => {
  const listItem = document.createElement('li');
  listItem.textContent = name;
  bandList.appendChild(listItem);
});








	