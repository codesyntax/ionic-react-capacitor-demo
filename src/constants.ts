
export interface layerProps {
    title: string;
    image: string;
    id: string;
    attribution: string;
    url: string;
    layers?: string;
    format?: string;
    transparent?: boolean;
    version?: string;
    wms?: boolean;
}
const frMap = {
    ignApiKey: 'pratique',
    ignLayer: 'ORTHOIMAGERY.ORTHOPHOTOS',
    style: 'normal',
    format: 'image/jpeg',
}
export const MAP_LAYERS: layerProps[] = [
    {
        title: 'OpenStreetMap',
        id: 'openstreetmap',
        image: "https://a.tile.openstreetmap.org/10/504/375.png",
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

    },
    {
        title: 'Thunderforest',
        id: 'thunderforest',
        image: "https://tile.thunderforest.com/landscape/13/4041/3006.png?apikey=7c352c8ff1244dd8b732e349e0b0fe8d",
        attribution: '© Thunderforest. <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        url: "https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=7c352c8ff1244dd8b732e349e0b0fe8d",
    },
    {
        title: 'GeoEuskadi (orto)',
        id: 'geoeuskadi',
        image: "https://www.geo.euskadi.eus/WMS_ORTOARGAZKIAK&?service=WMS&request=GetMap&layers=ORTO_EGUNERATUENA_MAS_ACTUALIZADA&styles=&format=image%2Fpng&transparent=true&version=1.3.0&width=256&height=256&crs=EPSG%3A3857&bbox=-278842.27918432304,5337139.062984147,-273950.3093740717,5342031.032794398",
        attribution: '&copy; <a href="http://www.geo.euskadi.eus/">GeoEuskadi</a>',
        url: "https://www.geo.euskadi.eus/WMS_ORTOARGAZKIAK&",
        layers: "ORTO_EGUNERATUENA_MAS_ACTUALIZADA",
        format: "image/png",
        transparent: true,
        version: "1.3.0",
        wms: true
    },
    {
        title: 'IGN ES (Orto)',
        id: 'ign_es_orto',
        image: "https://www.ign.es/wms-inspire/pnoa-ma?SERVICE=WMS&&service=WMS&request=GetMap&layers=OI.OrthoimageCoverage&styles=&format=image%2Fjpeg&transparent=true&version=1.3.0&width=256&height=256&crs=EPSG%3A3857&bbox=-278842.27918432304,5337139.062984147,-273950.3093740717,5342031.032794398",
        url: "https://www.ign.es/wms-inspire/pnoa-ma?SERVICE=WMS&",
        layers: "OI.OrthoimageCoverage",
        format: 'image/jpeg',
        transparent: true,
        version: '1.3.0',
        attribution: "PNOA WMS. © Espainiako Institutu Geografiko Nazionala.",
        wms: true
    },
    {
        title: 'IGN ES (Mapa)',
        id: 'ign_es_mapa',
        image: "https://www.ign.es/wms-inspire/mapa-raster?SERVICE=WMS&&service=WMS&request=GetMap&layers=mtn_rasterizado&styles=&format=image%2Fjpeg&transparent=true&version=1.3.0&width=256&height=256&crs=EPSG%3A3857&bbox=-278842.27918432304,5337139.062984147,-273950.3093740717,5342031.032794398",
        url: "https://www.ign.es/wms-inspire/mapa-raster?SERVICE=WMS&",
        layers: "mtn_rasterizado",
        format: 'image/jpeg',
        transparent: true,
        version: '1.3.0',
        attribution: "PNOA WMS. © Espainiako Institutu Geografiko Nazionala.",
        wms: true
    },
    {
        title: 'Euskadi (orto)',
        id: 'euskadi_orto',
        image: "https://www.geo.euskadi.eus/WMS_ORTOARGAZKIAK&?service=WMS&request=GetMap&layers=ORTO_EGUNERATUENA_MAS_ACTUALIZADA&styles=&format=image%2Fjpeg&transparent=true&version=1.3.0&width=256&height=256&crs=EPSG%3A3857&bbox=-278842.27918432304,5337139.062984147,-273950.3093740717,5342031.032794398",
        url: "https://www.geo.euskadi.eus/WMS_ORTOARGAZKIAK&",
        layers: "ORTO_EGUNERATUENA_MAS_ACTUALIZADA",
        format: 'image/jpeg',
        transparent: true,
        version: '1.3.0',
        attribution: "geoEuskadi WMS. © Eusko Jaurlaritza / Gobierno vasco.",
        wms: true
    },
    {
        title: 'Nafarroa (orto)',
        id: 'nafarroa_orto',
        image: "https://idena.navarra.es/ogc/wms?service=WMS&request=GetMap&layers=mapaBase_orto&styles=&format=image%2Fjpeg&transparent=true&version=1.3.0&width=256&height=256&crs=EPSG%3A3857&bbox=-179779.89052673458,5262536.523377816,-178556.89807417174,5263759.515830378",
        url: "https://idena.navarra.es/ogc/wms",
        layers: "mapaBase_orto",
        format: 'image/jpeg',
        transparent: true,
        version: '1.3.0',
        attribution: "Nafarroako Gobernua. Datuak: <a href='https://idena.navarra.es/Portal/Inicio'>IDENA</a>",
        wms: true
    },
    {
        title: 'Iparralde (orto)',
        id: 'iparralde_orto',
        image: "https://wxs.ign.fr/pratique/geoportail/wmts?&REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&TILEMATRIXSET=PM&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&STYLE=normal&FORMAT=image/jpeg&TILECOL=2020&TILEROW=1501&TILEMATRIX=12",
        url: `https://wxs.ign.fr/${frMap.ignApiKey}/geoportail/wmts?&REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&TILEMATRIXSET=PM&LAYER=${frMap.ignLayer}&STYLE=${frMap.style}&FORMAT=${frMap.format}&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}`,
        attribution: "© Frantziako Institutu Geografiko Nazionala. Datuak: <a href='https://geoservices.ign.fr/'>IGN</a>",
    }
];