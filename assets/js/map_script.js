let langList = ["en", "es", "fr"];
let countryList = ["Br", "Sp", "Fr"];

let input = "Hello World!";

let map = tt.map({
    container: 'map',
    key: 'UidCozvRt9CII6OELF37fl3Z07e2PyGh',
    center: { lat: 58, lng: 0 },
    zoom: 3,
    style: 'tomtom://vector/1/basic-main'
});

let coordinates = { Br: [-0.009184, 51.51279], Sp: [-3.703790, 40.416775], Fr: [2.3488, 48.85341] };
let markerHeight = 0, markerRadius = 10, linearOffset = 25;
let popupOffsets = {
    'top': [0, 0],
    'top-left': [0, 0],
    'top-right': [0, 0],
    'bottom': [0, -markerHeight],
    'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
    'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
    'left': [markerRadius, (markerHeight - markerRadius) * -1],
    'right': [-markerRadius, (markerHeight - markerRadius) * -1]
};

map.on('load', function () {
    map.setLanguage("en-US");
});

$("#translate").click(function () {
    input = $("#userInput").val();
    for (let i = 0; i < langList.length; i++) {
        if (langList[i] === "en") {
            let marker = new tt.Marker().setLngLat(coordinates["Br"]).addTo(map);
            let popup = new tt.Popup({ offset: popupOffsets, closeButton: false, className: "marker" }).setHTML(input);
            marker.setPopup(popup).togglePopup();
            continue;
        }

        let tar = langList[i];
        let settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate?source=en&target=" + tar + "&input=" + input,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "systran-systran-platform-for-language-processing-v1.p.rapidapi.com",
                "x-rapidapi-key": "93a3b6aa67mshcc551909c5a2a60p176b4cjsn24b1dd1fd651"
            }
        }
        $.ajax(settings).done(function (response) {
            let marker = new tt.Marker().setLngLat(coordinates[countryList[i]]).addTo(map);
            let popup = new tt.Popup({ offset: popupOffsets, closeButton: false, className: "marker" }).setHTML(response.outputs[0].output);
            marker.setPopup(popup).togglePopup();

        });
    }
});


