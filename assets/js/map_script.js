// testing translation api: 

// set language list (es = English, es:Spanish, fr:French, de:German, uk:Ukranian,  ) 
let langList = ["en", "es", "fr"];
let countryList = ["Br", "Sp", "Fr"];
let translated = {};

// translate the text given the source & target languages
for (let i=0; i< langList.length; i++){
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
            "target": langList[i]
        }
    }
    $.ajax(settings).done(function (response) {
        translated[countryList[i]]= response.data.translations[0].translatedText;
    });

}

// testing Maps api: https://developer.tomtom.com/
// API key: UidCozvRt9CII6OELF37fl3Z07e2PyGh 
// *2500 free transactions per day

let map = tt.map({
    container: 'map',
    key: 'UidCozvRt9CII6OELF37fl3Z07e2PyGh',
    center: { lat: 58, lng: 0 },
    zoom: 2,
    style: 'tomtom://vector/1/basic-main'
});

let coordinates = { Br: [-0.009184, 51.51279], Sp: [-3.703790, 40.416775], Fr: [2.3488, 48.85341] };
let markerHeight = 0, markerRadius = 10, linearOffset = 25;
let popupOffsets = {
 'top': [0, 0],
  'top-left': [0,0],
  'top-right': [0,0],
  'bottom': [0, -markerHeight],
  'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
  'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
  'left': [markerRadius, (markerHeight - markerRadius) * -1],
  'right': [-markerRadius, (markerHeight - markerRadius) * -1]
  };

map.on('load', function () {
    map.setLanguage("en-US");
    for (let country of countryList){
        let marker = new tt.Marker().setLngLat(coordinates[country]).addTo(map);
        let popup = new tt.Popup({ offset: popupOffsets, closeButton: false }).setHTML(translated[country]);
        marker.setPopup(popup).togglePopup();
    }
});

