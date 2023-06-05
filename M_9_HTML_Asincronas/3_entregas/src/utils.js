    
const createCharacterRow = (character) => {
    const element = document.createElement("div");
  
    const avatar = createAvatar(character);
    element.appendChild(avatar);
  
    const link = createRowText(character);
    element.appendChild(link);
  
    element.className = "character-row";
  
    return element;
  };
  
  const createAvatar = (character) => {
    const element = document.createElement("img");
    element.width = 150;
    element.className = "thumbnail";
    element.src = character.image;
  
    return element;
  };
  
  const createRowText = (character) => {
    const element = document.createElement("span");
    element.append(character.name);
  
    return element;
  };
  
  const createAvatarDetail = (character) => {
    const element = document.createElement("img");
    element.width = 350;
    element.src = character.image;
  
    return element;
  };
  
  const showCharacter = (character) => {
    console.log("character", character);
    const characterDetail = document.getElementById("character-detail");
  
    characterDetail.innerHTML = "";
    characterDetail.appendChild(createAvatarDetail(character));
    characterDetail.appendChild(createParagraph("Name: " + character.name));
    characterDetail.appendChild(createParagraph("Status: " + character.status));
    characterDetail.appendChild(createParagraph("Species: " + character.species));
    // Añado el genero(Tipo string)
    characterDetail.appendChild(createParagraph("Gender: " + character.gender));
    // Para obtener los números de los episodios(Tipo array)
    const episodeNumbers = character.episode.map((episode) => {
        const episodeParts = episode.split("/");
        return episodeParts[episodeParts.length - 1];
      });
    if (episodeNumbers.length > 10) {
        characterDetail.appendChild(createParagraph("The ten first episode: " + episodeNumbers.slice(0, 10).join(", ")))
    } else {characterDetail.appendChild(createParagraph("All the episode Numbers: " + episodeNumbers.join(", ")));};
    
  };
  
  const createParagraph = (text) => {
    const element = document.createElement("p");
    element.append(text);
    return element;
  };
  
  export { createCharacterRow, showCharacter };
