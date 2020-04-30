// testing translation api: 

// set language list (es = English, es:Spanish, fr:French, de:German, uk:Ukranian,  ) 

let langList = ["en", "es", "fr", "de", "uk"];

// create one randomIndex from (0,... langList.length-1).
let randomIndex = Math.floor(Math.random()*langList.length); 

// translate the text given the source & target languages
let settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://google-translate1.p.rapidapi.com/language/translate/v2",
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "google-translate1.p.rapidapi.com",
		"x-rapidapi-key": "93a3b6aa67mshcc551909c5a2a60p176b4cjsn24b1dd1fd651",
		"content-type": "application/x-www-form-urlencoded"
	},
	"data": {
		"q": "Hello, world!",
		"target": langList[randomIndex]
	}
}

$.ajax(settings).done(function (response) {
    console.log("translate to: "+ langList[randomIndex]);
    console.log(response.data.translations[0].translatedText);
    console.log(response)
});



// testing Maps api: https://developer.tomtom.com/
// API key: UidCozvRt9CII6OELF37fl3Z07e2PyGh 
// *2500 free transactions per day


