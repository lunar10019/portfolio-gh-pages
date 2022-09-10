import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

import styles from "./map.module.scss";

const MapComponent = () => (
  <YMaps>
    <Map
      className={styles.map}
      defaultState={{ center: [45.523064, -122.676483], zoom: 9 }}
    >
      <Placemark geometry={[45.523064, -122.676483]} />
    </Map>
  </YMaps>
);

export default MapComponent;
