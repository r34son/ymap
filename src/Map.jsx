import React from 'react'
import { YMaps, Map } from 'react-yandex-maps';

export default () => (
  <YMaps>
    <Map width="100vw" height="100vh" defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
  </YMaps>
)
