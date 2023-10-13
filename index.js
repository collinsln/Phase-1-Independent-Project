
function getData() {
    const url1 = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
    const searchTerm = document.getElementById("wordInput").value;
  
    const url = url1 + searchTerm.toLowerCase(); // Combine all the API elements
    
    console.log(url);
  
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
  
        // Check if data is an array and has at least one entry
        if (Array.isArray(data) && data.length > 0) {
          const entry = data[0];
        //   for (const key in entry){console.log(key);}
  
          const notebook = document.getElementById('displayArray');
          notebook.innerHTML = 
          `
          <h3 class="word">
          <p> ${entry.word}</p>
          </h3>
          <button onclick="playSound()"></button>

            
            <p>${data[0].meanings[0].partOfSpeech}
            </p>

            <p>${data[0].phonetic}
            </p>
            <p>${data[0].meanings[0].definitions[0].definition}
            <p> <strong>synonyms</strong>:${data[0].meanings[0].synonyms}
            `;
        } else {
          console.log('No valid API response');
        }
      })
      .catch(error => {
        console.error('Error in API request:', error.message);
      });

    sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
  console.log(sound);
  
  }
  
  // Get the button part from HTML
  const btn1 = document.getElementById("searchTab");
  
  btn1.addEventListener('click', getData);
  

  function playSound(){
    sound.play();
  }
  
  // function backFunction(){
  //   history.back();
  // }
  
  // const back=document.getElementById("back");
  // forward.addEventListener("onclick",backFunction);


  // function forwardFunction(){
  //   history.forward();
  // }
  // const forward=document.getElementById("forward");
  // forward.addEventListener("onclick",backFunction);
  const inputs = [];

  const inputHandler = (event) => {
    const inputValue = event.target.value;
    inputs.push(inputValue);
  };
  
  // Add the input handler to the input field
  const inputField = document.querySelector('wordInput');
  inputField.addEventListener('input', inputHandler);
  
  // Display the history of inputs
  const historyButton = document.querySelector('#history-button');
  historyButton.addEventListener('click', () => {
    const historyList = document.querySelector('#history-list');
    historyList.innerHTML =
    `<ul>${historyList}</ul>
    <ul>${historyList}</ul>
    <ul>${historyList}</ul>
    `});
    