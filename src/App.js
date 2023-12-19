import MainPage from "./Pages/MainPage";

const cities = [
  { position: [51.7592, 19.4550], content: 'Łódź', country: "Poland", type: "City" },
  { position: [50.0647, 19.9450], content: 'Kraków', country: "Poland", type: "City" },
  { position: [52.4064, 16.9252], content: 'Poznań', country: "Poland", type: "City" },
  { position: [51.1079, 17.0385], content: 'Wrocław', country: "Poland", type: "City" },
  { position: [49.2984, 19.9594], content: 'Zakopane', country: "Poland", type: "City" },
  { position: [52.2297, 21.0122], content: 'Warszawa', country: "Poland", type: "City" },
  { position: [51.8544, 19.4183], content: 'Zgierz', country: "Poland", type: "City" },
  { position: [51.2277, 6.7735], content: 'Düsseldorf', country: "Germany", type: "City" },
  { position: [56.9496, 24.1052], content: 'Riga', country: "Latvia", type: "City" },
  { position: [53.9045, 27.5615], content: 'Менск', country: "Belarus", type: "City" },
  { position: [53.8990, 30.3352], content: 'Магілёў', country: "Belarus", type: "City" },
  { position: [52.4345, 30.9754], content: 'Гомель', country: "Belarus", type: "City" },
  { position: [53.1484, 29.2340], content: 'Бабруйск', country: "Belarus", type: "City" },
  { position: [50.4501, 30.5234], content: 'Kyiv', country: "Ukraine", type: "City" },
  { position: [49.8397, 24.0297], content: 'Lviv', country: "Ukraine", type: "City" },
  { position: [46.115, 32.913], content: 'Skadovs\'k', country: "Ukraine", type: "City" },
  { position: [57.6261, 39.8845], content: 'Yaroslavl', country: "Russia", type: "City" },
  { position: [54.1961, 37.6184], content: 'Tula', country: "Russia", type: "City" },
  { position: [55.7558, 37.6176], content: 'Moscow', country: "Russia", type: "City" },
  { position: [52.6535, 41.8745], content: 'Rasskazovo', country: "Russia", type: "City" },
];

const places = [
  { position: [49.7128530790908, 20.649739508662243], content: 'Lake Rożnów', country: "Poland", type: "Place" },
  { position: [49.71779334643454, 19.194256861531414], content: 'Lake Żywiec', country: "Poland", type: "Place" },
  { position: [49.31767051661225, 20.108098905707465], content: 'Niebieska Dolina', country: "Poland", type: "Place" },
  { position: [51.61860410530405, 19.535296279326765], content: 'Młynek Tuszyn', country: "Poland", type: "Place" },
  { position: [50.034540322327125, 19.181083484400457], content: 'Auschwitz-Birkenau', country: "Poland", type: "Place" },
  { position: [46.018, 32.95], content: 'Dzharylhach Island', country: "Ukraine", type: "Place" },
  { position: [48.9966, 23.9309], content: 'The Carpathian Mountains', country: "Ukraine", type: "Place" },
  { position: [53.4511, 26.4676], content: 'Мірскі замак', country: "Belarus", type: "Place" },
  { position: [53.2261, 26.6782], content: 'Нясві́жскі замак', country: "Belarus", type: "Place" },
]

export default function App() {
  return <MainPage cities={cities} places={places} />
}
