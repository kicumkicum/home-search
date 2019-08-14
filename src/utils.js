import {Points, Direction} from "./data/trains";

console.log({Points, Direction});

export const apiKey = `5ce5a642-c15c-4814-9517-9947d1fc0f2e`;

const fetchGeo = (query, apiKey) => {
  const url = `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&format=json&geocode=${query.replace(` `, `+`)}`;
  return fetch(url).then((response) => response.json());
};

export const fetchGeoByPoint = (point, apiKey) => {
  return fetchGeo(point, apiKey)
    .then((response) => {
      const items = response.response['GeoObjectCollection']['featureMember'];
      const trainPoints = items.filter((it) => {
        return `railway` === it[`GeoObject`][`metaDataProperty`][`GeocoderMetaData`][`kind`];
      });

      console.log({response: trainPoints});

      return trainPoints;
    })
    .catch(console.error);
};

export const fetchGeoByDirection = (direction, apiKey) => {
  const names = Points[direction];

  return Promise.all(
    names.map((it) => fetchGeoByPoint(it, apiKey))
  )
    .then((points) => {
      console.log(`------`);
      console.log({points});
    })
};
