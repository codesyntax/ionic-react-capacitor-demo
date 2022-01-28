import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { MapContainer, Marker, Popup } from 'react-leaflet';
import './leaflet.css';
import { layersOutline } from 'ionicons/icons';
import { useState } from 'react';

import TileLayerModal from './TileLayerModal';
import DynamicTileLayer from './DynamicTileLayer';
import { LatLngExpression } from 'leaflet';
import { layerProps, MAP_LAYERS } from '../../constants';
import 'leaflet/dist/leaflet.css';

const LeafletMap = () => {
  const position: LatLngExpression = [43.1936281, -2.4590197];
  const [openLayerModal, setOpenLayerModal] = useState(false);
  const [activeLayer, setActiveLayer] = useState<layerProps>(MAP_LAYERS[0]);
  return (
    <>
      <MapContainer center={position} zoom={10} scrollWheelZoom={true} className="map">
        <DynamicTileLayer layerId={activeLayer.id} />

        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>

      <IonFab vertical="bottom" horizontal="end" className="map-fab-bottom" slot="fixed" onClick={() => setOpenLayerModal(!openLayerModal)}>
        <IonFabButton color="light">
          <IonIcon icon={layersOutline} />
        </IonFabButton>
      </IonFab>

      <TileLayerModal
        open={openLayerModal}
        selectedLayer={activeLayer}
        onDismissCallback={() => setOpenLayerModal(!openLayerModal)}
        onSelectLayer={(layer) => {
          console.log(layer);
          setActiveLayer(layer);
        }}
      />
    </>
  );
};

export default LeafletMap;
