const Feature = ol.Feature;
const Map = ol.Map;
const Point = ol.geom.Point;
const TileJSON = ol.source.TileJSON;
const VectorSource = ol.source.Vector;
const View = ol.View;
const Icon = ol.style.Icon;
const Style = ol.style.Style;
const TileLayer = ol.layer.Tile;
const VectorLayer = ol.layer.Vector;
const Overlay = ol.Overlay;
const fromLonLat = ol.proj.fromLonLat;
const popupElem = document.getElementById('popup');

// I will replace it into MySQL db in the future
//fetch('https://rsx.aww.xyz/world.php')
//  .then(response => response.json())
//  .then(result => console.log(result))

let places = [
  {
    name: "Babruysk",
    description: "Родной город",
    coords: [29.185, 53.15],
    icon: {
      color: 'red',
      imgSize: [20, 20],
      src: 'data/dot.svg',
    },
    picture: './img/babruysk.jpg'
  },
  {
    name: "Zgierz",
    description: "Маленький городок недалеко от Лодзи. Можно доехать на трамвае.",
    coords: [19.41, 51.86],
    icon: {
      color: 'red',
      imgSize: [20, 20],
      src: 'data/dot.svg',
    },
    picture: './img/zgierz.jpg'
  },
  {
    name: "Łódź",
    description: "Текущий город.",
    coords: [19.455, 51.76],
    icon: {
      color: 'red',
      imgSize: [20, 20],
      src: 'data/dot.svg',
    },
    picture: './img/lodz.jpg'
  },
  {
    name: "Warszawa",
    description: "Классный и современный мегаполис.",
    coords: [21, 52.235],
    icon: {
      color: 'red',
      imgSize: [20, 20],
      src: 'data/dot.svg',
    },
    picture: './img/warszawa.jpg'
  },
  {
    name: "Kyiv",
    description: "Жил здесь около месяца, когда Артём приглашал в гости. Очень классный город.",
    coords: [30.545, 50.447],
    icon: {
      color: 'red',
      imgSize: [20, 20],
      src: 'data/dot.svg',
    },
    picture: './img/kyiv.jpg'
  }
]

let features = [];

function addPlaces(places) {
  places.forEach(place => {
    const placeFeature = new Feature({
      geometry: new Point(fromLonLat(place.coords)),
      name: place.name,
      description: place.description,
      picture: place.picture
    })
    placeFeature.setStyle(
      new Style({
        image: new Icon(place.icon)
      })
    )
    features.push(placeFeature)
  });
  
}

// Обещаю больше так не делать и вызывать функции уже после инициализации всего скрипта
addPlaces(places);

const vectorSource = new VectorSource({
  features: features
});

const vectorLayer = new VectorLayer({
  source: vectorSource
});

const rasterLayer = new TileLayer({
  source: new TileJSON({
    url: 'https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json?secure=1',
    crossOrigin: ''
  })
});

const map = new Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    }),
    vectorLayer,
  ],
  target: document.getElementById('map'),
  view: new View({
    center: fromLonLat([2.896372, 44.6024]),
    zoom: 3,
  })
});

const popup = new Overlay({
  element: popupElem,
  positioning: 'bottom-center',
  stopEvent: false,
});

map.addOverlay(popup);

// display popup on click
map.on('click', function (evt) {
  $(popupElem).popover('dispose');
  const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
    return feature;
  });
  if (feature) {
    popup.setPosition(evt.coordinate);
    $(popupElem).popover({
      placement: 'top',
      html: true,
      content: show(feature),
    });
    $(popupElem).popover('show');
  } else {
    $(popupElem).popover('dispose');
  }
});

map.on('pointermove', function (e) {
  const pixel = map.getEventPixel(e.originalEvent);
  const hit = map.hasFeatureAtPixel(pixel);
  map.getTarget().style.cursor = hit ? 'pointer' : '';
});

// Close the popup when the map is moved
map.on('movestart', function () {
  $(popupElem).popover('dispose');
});

function show(feature) {
  const name = feature.get("name");
  const desc = feature.get("description");
  const img = feature.get("picture");
  const popup = "<div>Город: " + name + "</div><div>Заметка: " + desc + "</div><img src='" + img + "' class='photo'>";
  return popup;
}