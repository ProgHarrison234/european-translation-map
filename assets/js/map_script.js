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


map.on('load', function () {
    map.setLanguage("en-US");
    let coordinates = { Br: [-0.009184, 51.51279], Sp: [-3.703790, 40.416775], Fr: [2.3488, 48.85341] };
    let marker = new tt.Marker().setLngLat(coordinates.Sp).addTo(map);
    let popupOffsets = {
        top: [0, 0],
        bottom: [0, -70],
        'bottom-right': [0, -70],
        'bottom-left': [0, -70],
        left: [25, -35],
        right: [-25, -35]
    }

    let popup = new tt.Popup({ offset: popupOffsets }).setHTML("Here is Madrid");
    marker.setPopup(popup).togglePopup();
});

