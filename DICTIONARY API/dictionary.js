// get all words 
// let UrL = 'https://api.dictionaryapi.dev/api/v2/entries/en/<word>'
// fetch(UrL)
// .then((data) => {
//     data.json().then(res => {
//         console.log(res);
//     })
// })
// let UrL = 'https://api.dictionaryapi.dev/api/v2/entries/en/<word>'
// fetch(UrL).then(async (data)=>{
//     console.log(await data.json());
// })
// let UrL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
// let UrL = "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
// fetch(UrL)
//     .then((data) => {
//         return data.json()
//     })
//     .then((res) => {
//         console.log(res);
//         let getWord = "";

//         // result = inpWord;

//         res.map((inputData) => {
//             getWord = `<div style="display: flex;justify-content: center;">
//             <div id="word">
//               <div style="display: flex;flex-direction: column;" id="wordy">
//                 <h1>${inputData.word}</h1>
//                 <h4>/${inputData.phonetics[2].text}/</h4>
//               </div>
//                <img src="./playvoice.png" alt="playsound image" style="height: 50px;width: 50px;">
//             </div>
//           </div>



//           <div id="coverrr">
//             <div class="cardd">
//               <div class="cardbody">
//                 <h1 class="cardtitle">${inputData.meanings[0].partOfSpeech}</h1>
//                 <h2>Meaning</h2>`
//             inputData.meanings[0].definitions.map((definition) => {
//                 getWord += `<p class="cardtext">${definition.definition}`
//             });
//             getWord += `<div><div><div>`;

//             `div id="coverrr">
//                 <div class="cardd">
//                     <div class="cardbody">
//                         <h1 class="cardtitle">${inputData.meanings[0].partOfSpeech}</h1>
//                         <h2>Meaning</h2>`
//             inputData.meanings[1].definitions.map((definition) => {
//                 getWord += `<p class="cardtext">${definition.definition}`
//             });
//             getWord += `<div><div><div>`;
//         });
//         `div id="coverrr">
//                 <div class="cardd">
//                     <div class="cardbody">
//                         <h1 class="cardtitle">${inputData.meanings[1].partOfSpeech}</h1>
//                         <h2>Meaning</h2>`
//                         inputData.meanings[2].definitions.map((definition) => {
//                             getWord += `<p class="cardtext">${definition.definition[1]}`
//                         });
//                         getWord += `<div><div><div>`;

//         document.getElementById("wordd").innerHTML = getWord;
//     })
//     .catch((errr) => {
//         console.log(errr);
//     });
let UrL = "https://api.dictionaryapi.dev/api/v2/entries/en/hello";
fetch(UrL)
    .then((data) => {
        return data.json();
    })
    .then((res) => {
        console.log(res);
        result = res
        let getWord = "";
        res.map((inputData) => {
            getWord += `<div style="display: flex;justify-content: center;">
                <div id="word">
                    <div style="display: flex;flex-direction: column;" id="wordy">
                        <h1>${inputData.word}</h1>
                        <h4>${inputData.phonetics[0].text}</h4>
                    </div>
                    <img src="./icons8-sound-48.png" onclick="playAudio('${inputData.phonetics[0].audio}')"  alt="playsound image" style="height: 50px;width: 50px;">
                </div>
            </div>`;

            inputData.meanings.map((meaning) => {
                getWord += `<div id="coverrr">
                    <div class="cardd">
                        <div class="cardbody">
                            <h1 class="cardtitle">${meaning.partOfSpeech}</h1>
                            <h2>Meaning</h2>`;
                meaning.definitions.map((definition) => {
                    getWord += `<p class="cardtext">${definition.definition}</p>`;
                });
                getWord += `</div></div></div>`;
            });
        });
        document.getElementById("wordd").innerHTML = getWord;
    })
    .catch((err) => {
        console.log(err);
    });


        function playAudio(audioUrl) {
            console.log('blah blahblah blah yeah yeah');
            const audio = new Audio(audioUrl);
            audio.play();
        }

    //     function dislaySearchedWord(result) {
    //         const searchKeyword = document.getElementById('search').ariaValueMax.toLowerCase();
    //         const filteredWords = result.filter(inputData =>
    //             inputData.word.toLowerCase().includes(searchKeyword)
    //    );
    //    let getWord = "";

    //     res.map((inputData) => {
    //         getWord += `<div style="display: flex;justify-content: center;">
    //             <div id="word">
    //                 <div style="display: flex;flex-direction: column;" id="wordy">
    //                     <h1>${inputData.word}</h1>
    //                     <h4>${inputData.phonetics[1].text}</h4>
    //                 </div>
    //                 <img src="./playvoice.png" onclick="playAudio('${inputData.phonetics[1].audio}')"  alt="playsound image" style="height: 50px;width: 50px;">
    //             </div>
    //         </div>`;

    //         inputData.meanings.map((meaning) => {
    //             getWord += `<div id="coverrr">
    //                 <div class="cardd">
    //                     <div class="cardbody">
    //                         <h1 class="cardtitle">${meaning.partOfSpeech}</h1>
    //                         <h2>Meaning</h2>`;
    //             meaning.definitions.map((definition) => {
    //                 getWord += `<p class="cardtext">${definition.definition}</p>`;
    //             });
    //             getWord += `</div></div></div>`;
    //         });
    //     });
    //     document.getElementById("wordd").innerHTML = getWord;
    // }
    function toggle() {
        document.getElementById('moon-logo').style.display = 'none';
        document.getElementById('bright-logo').style.display = 'block';
        document.body.classList.toggle('dark-mode');
    }
    
    function toggle2() {
        document.getElementById('bright-logo').style.display = 'none';
        document.getElementById('moon-logo').style.display = 'block';
        document.body.classList.toggle('light-mode');
    }
    
    function changeFont(fontFamily) {
  document.body.style.fontFamily = fontFamily;
}


// const searchKeyword = document.querySelector('#search')
// // console.log(searchKeyword)
// console.log(searchKeyword);
// searchKeyword.addEventListener('input',() => {
//     console.log('input')
//     // displaySearchItem2(result);
// })

// function displaySearchedWord2(result) {
//     const searchyKeyword = document.getElementById('search').value.toLowerCase();
//     const filteredWords = result.filter(inputData => inputData.word.toLowerCase().includes(searchyKeyword));

//     let getWord = '';

//     filteredWords.map(inputData => {
//         getWord += `<div style="display: flex;justify-content: center;">
//             <div id="word">
//                 <div style="display: flex;flex-direction: column;" id="wordy">
//                     <h1>${inputData.word}</h1>`;
                    
//         if (inputData.phonetics.length > 0) {
//             getWord += `<h4>${inputData.phonetics[1].text}</h4>`;
//         }
        
//         getWord += `</div>
//                 <img src="./playvoice.png" onclick="playAudio('${inputData.phonetics[1].audio}')" alt="playsound image" style="height: 50px;width: 50px;">
//             </div>
//         </div>`;
        
//         inputData.meanings.map(meaning => {
//             getWord += `<div id="coverrr">
//                 <div class="cardd">
//                     <div class="cardbody">
//                         <h1 class="cardtitle">${meaning.partOfSpeech}</h1>
//                         <h2>Meaning</h2>`;
                        
//             meaning.definitions.map(definition => {
//                 getWord += `<p class="cardtext">${definition.definition}</p>`;
//             });
            
//             getWord += `</div></div></div>`;
//         });
//     });

//     document.getElementById("wordd").innerHTML = getWord;
// }


function search() {
    const searchKeyWord = document.getElementById('search');
    const searchword = searchKeyWord.value.toLowerCase();
    
    let Url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchword}`
    fetch(Url)
    .then((sdata)=>{
        return sdata.json();
    })
    .then((sdata)=>{
        console.log('searched');
        displaySearchedWord(sdata);
        // localStorage.setItem('lastSearchedWord', searchword);
    })
}

function displaySearchedWord(result) {
    // const word = document.getElementById("wordd");
    // word.style.display = "none";
    let getWord = '';
    
    result.map(inputData => {
        getWord += `<div style="display: flex;justify-content: center;">
            <div id="word">
                <div style="display: flex;flex-direction: column;" id="wordy">
                    <h1>${inputData.word}</h1>
                    <h4>${inputData.phonetics[0].text}</h4>
                </div>
                <img src="./icons8-sound-48.png" onclick="playAudio('${inputData.phonetics[0].audio}')" alt="playsound image" style="height: 50px;width: 50px;background-color:white;padding:3px;">
            </div>
        </div>`;
        
        inputData.meanings.map(meaning => {
            getWord += `<div id="coverrr">
                <div class="cardd">
                    <div class="cardbody">
                        <h1 class="cardtitle">${meaning.partOfSpeech}</h1>
                        <h2>Meaning</h2>`;
            
            meaning.definitions.map(definition => {
                getWord += `<p class="cardtext">${definition.definition}</p>`;
            });
            
            getWord += `</div></div></div>`;
        });
    });

    document.getElementById("wordd").innerHTML = getWord;
}

// function retrieveLastSearchedWord() {
//     // Retrieve the last searched word from localStorage
//     const lastSearchedWord = localStorage.getItem('lastSearchedWord');
//     if (lastSearchedWord) {
//         // Perform search with the retrieved word
//         document.getElementById('search').value = lastSearchedWord;
//         search();
//     } else {
//         // Handle case where there is no previously searched word
//         console.log("No previously searched word found.");
//     }
// }

// Call this function when the book icon is clicked
// document.querySelector('#topnav img').addEventListener('click', retrieveLastSearchedWord);
    // function dislaySearchedWord(result) {
//     const getWord = result.map(inputData=>
//         `<div style="display: flex;justify-content: center;">
//                 <div id="word">
//                     <div style="display: flex;flex-direction: column;" id="wordy">
//                         <h1>${inputData.word}</h1>
//                         <h4>${inputData.phonetics[1].text}</h4>
//                     </div>
//                     <img src="./playvoice.png" onclick="playAudio('${inputData.phonetics[1].audio}')"  alt="playsound image" style="height: 50px;width: 50px;">
//                 </div>
//             </div>`;
//             inputData.meanings.map((meaning) => {
//                 getWord += `<div id="coverrr">
//                     <div class="cardd">
//                         <div class="cardbody">
//                             <h1 class="cardtitle">${meaning.partOfSpeech}</h1>
//                             <h2>Meaning</h2>`;
//                 meaning.definitions.map((definition) => {
//                     getWord += `<p class="cardtext">${definition.definition}</p>`;
//                 });
//                 getWord += `</div></div></div>`;
//             });
// ).join('');
// document.getElementById("wordd").innerHTML = getWord;
// }
    
