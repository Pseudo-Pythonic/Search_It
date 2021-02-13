function search(){
    var value = document.getElementById("homepage").value
    query = 'https://www.google.com/search?q='+value;
    window.open(query);
};

var transcript;

const mainMenu = document.querySelector('.mainMenu');
    const closeMenu = document.querySelector('.closeMenu');
    const openMenu = document.querySelector('.openMenu');

    openMenu.addEventListener('click',show);
    closeMenu.addEventListener('click',close);

    function show(){
      mainMenu.style.display = 'flex';
      mainMenu.style.top = '0';
    }
    function close(){
      mainMenu.style.top = '-100%';
    }

function Speech(){
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    recognition.onstart = function() {
        console.log("We are listening. Try speaking into the microphone.");
    };
    
    recognition.onspeechend = function() {
        recognition.stop();
    }
    recognition.onresult = function(event) {
        transcript = event.results[0][0].transcript;
        query2 = "https://www.google.com/search?q="+transcript;
        window.open(query2);
    };
    recognition.start();
    }