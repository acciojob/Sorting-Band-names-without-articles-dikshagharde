//your code here

//your code here
const bandNames = [
        "The Beatles",
        "Led Zeppelin",
        "The Rolling Stones",
        "Radiohead",
        "Pink Floyd",
        "The Who",
        "The Doors",
      ];

      // Function to strip articles from band names
      const stripArticles = (name) => {
        // Define an array of articles to remove
        const articles = ["the", "a", "an"];

        // Split the name into words
        const words = name.split(" ");

        // Filter out any articles
        const filteredWords = words.filter((word) => !articles.includes(word.toLowerCase()));

        // Join the remaining words and return the result
        return filteredWords.join(" ");
      };

      // Sort the band names without articles
      const sortedBands = bandNames.sort((a, b) => stripArticles(a) > stripArticles(b) ? 1 : -1);

      // Get the unordered list element and add each band name as a list item
      const bandList = document.getElementById("band");
      sortedBands.forEach((band) => {
        const listItem = document.createElement("li");
        listItem.textContent = band;
        bandList.appendChild(listItem);
      });