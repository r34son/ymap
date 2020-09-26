import React from 'react'
import {
  YMaps,
  Map as YMap,
  FullscreenControl,
  ZoomControl,
  SearchControl,
  RouteButton,
  TypeSelector,
  TrafficControl,
  GeolocationControl,
  Placemark,
  Clusterer,
} from 'react-yandex-maps';
import cfu_logo from './logos/cfuv.png'

const PLACES = [{
  geometry: [44.936479, 34.134633],
  properties: {
    iconContent: `<img src=${cfu_logo} width="18" alt="CFU"/>`,
    iconCaption: 'КФУ',
    hintContent: 'Крымский федеральный университет имени В. И. Вернадского',
    balloonContentHeader: 'Крымский федеральный университет имени В. И. Вернадского',
    balloonContentBody: `Российский федеральный университет в Симферополе. Создан в 2014 году,
    включив в себя восемь академий и институтов, пять колледжей и центров, 11 филиалов
    по всему Крыму и 7 научных организаций. Крупнейшее высшее учебное заведение Республики Крым.
    В настоящее время находящийся в стадии переформирования из бывших вузов в отдельную организацию федерального значения.`,
    balloonContentFooter: 'Приемная комиссия \n +7 (3652) 51-65-65',
  },
},
{
  geometry: [44.96432132, 34.09785423],
  properties: {
    iconCaption: 'Гагаринский парк',
    balloonContentHeader: 'Гагаринский парк',
    balloonContentBody: `Самый большой городской парк на территории Крыма, открытый в 1960-х гг.
    На протяжении многих десятилетий он был любимым местом для прогулок у жителей Симферополя.
    Здесь в изобилии растут крымские сосны, платаны, буки, акации, каштаны, тополи и ивы.
    В центральной части парка есть два небольших озера, где обитает утиная стая.
    Главная прогулочная улица парка – Аллея Славы приводит к мемориалу «Вечный огонь».`,
  },
  options: {
    preset: 'islands#redDotIcon',
  }
},
{
  geometry: [44.94203792, 34.13129601],
  properties: {
    iconCaption: 'Салгирка',
    balloonContentHeader: 'Ботанический сад им. Н. В. Багрова',
    balloonContentBody: `Парк Салги́рка — один из крупнейших парков Симферополя.
    Название происходит от имени реки Салгир, на берегах которой первоначально парк был разбит.
    Площадь парка составляет около 42 га. На территории находятся архитектурные постройки XVIII—XIX веков,
    а также представлены несколько вековых дубов, росших когда-то по всей долине р. Салгир.
    Там же растёт двухсотлетний лондонский платан, посаженный П. С. Палласом.
    Остальная, более молодая, растительность высаживалась при реконструкциях парка
    в различные годы: берёза, клен, сосна крымская, ель обыкновенная, ливанский кедр и др.`,
  },
  options: {
    preset: 'islands#dotIcon',
  }
},
{
  geometry: [44.95607938, 34.10984939],
  properties: {
    iconCaption: 'Детский парк',
    balloonContentHeader: 'Симферо́польский Де́тский парк',
    balloonContentBody: `Симферо́польский Де́тский парк — парк в центре Симферополя,
    изначально проектировавшийся как парк для детей. Парк имеет интересную историю
    и является одним из самых посещаемых парков города благодаря массовым мероприятиям,
    которые проводятся на территории парка. Ограничен центральным проспектом Кирова,
    улицами Киевской и Шмидта. На территории парка расположился городской зоопарк (зооуголок).
    Основной вход в парк расположен на проспекте Кирова, дополнительные — на улице Шмидта.`,
  },
  options: {
    preset: 'islands#circleDotIcon',
  },
}];

const Map = () => (
  <YMaps query={{ apikey: '6baf7596-be36-4cef-9109-852aa6630b53' }}>
    <YMap
      defaultState={{
        center: [44.95, 34.1],
        zoom: 14,
      }}
      options={{ fullscreenZIndex: 0, exitFullscreenByEsc: false }}
      modules={["templateLayoutFactory", "layout.ImageWithContent"]}
    >
      <SearchControl options={{ provider: 'yandex#search' }} />
      <RouteButton />
      <GeolocationControl />
      <TrafficControl />
      <ZoomControl />
      <TypeSelector />
      <FullscreenControl
        options={{ visible: false }}
        instanceRef={ref => ref && ref.enterFullscreen()}
      />
      <Clusterer
        options={{
          preset: 'islands#invertedVioletClusterIcons',
          groupByCoordinates: false,
        }}
      >
        {PLACES.map(({ geometry, properties, options }) => <Placemark
          geometry={geometry}
          properties={properties}
          options={options}
          modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
        />)}</Clusterer>
    </YMap>
  </YMaps >
)

export default Map;
