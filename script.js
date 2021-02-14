function search(){
    var value = document.getElementById("homepage").value
    query = 'https://www.google.com/search?q='+value;
    window.open(query);
};

var transcript;
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
