const getRandomIndexes = (max, count) => {
    const indexes = [];
    while (indexes.length < count) {
      const randomIndex = Math.floor(Math.random() * max);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }
    return indexes;
  };
  
  fetchData()
    .then((charactersArray) => {
      const randomIndexes = getRandomIndexes(charactersArray.length, 10);
      randomIndexes.forEach((randomIndex) => {
        const character = charactersArray[randomIndex];
        const characterImage = searchCharacterImage(
          character,
          charactersArray
        );
        printRow(character, tbody, characterImage);
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
//Alternativa
const getRandomIndex = (array, usedIndexes) => {
    let randomIndex = Math.floor(Math.random() * array.length);
  
    while (usedIndexes.includes(randomIndex))
      randomIndex = Math.floor(Math.random() * array.length);
  
    return randomIndex;
  };
  