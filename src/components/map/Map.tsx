import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { YMaps, Map, Placemark } from "react-yandex-maps";
import { State } from "../../store/types";
import styles from "./map.module.scss";

const API_KEY = process.env.REACT_APP_API_KEY;

const MapComponent = () => {
  const [coordinates, setCoordinates] = useState([45.523064, -122.676483]);

  const address = useSelector((state: State) => state.address);

  useEffect(() => {
    const url = `https://geocode-maps.yandex.ru/1.x/?apikey=e5dcb57a-d690-4620-a9a7-a2d590073fef&lang=ru_RU&format=json&geocode=${address}`;

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        const api =
          data.response.GeoObjectCollection.featureMember[0].GeoObject.Point;
        const currentCoordinates = api.pos
          .replace(/ /g, ",")
          .split(",")
          .reverse()
          .map((item: string) => Number(item));

        setCoordinates(currentCoordinates);
      });
  }, [address]);

  return (
    <YMaps>
      <Map
        className={styles.map}
        state={{ center: coordinates, zoom: 9 }}
        defaultState={{ center: coordinates, zoom: 9 }}
      >
        <Placemark geometry={coordinates} />
      </Map>
    </YMaps>
  );
};

export default MapComponent;
