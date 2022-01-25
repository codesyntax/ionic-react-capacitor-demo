import { TileLayer, WMSTileLayer } from "react-leaflet";
import { MAP_LAYERS } from "../../constants";

interface DynamicTileLayerProps {
    layerId?: string;
}

const DynamicTileLayer: React.FC<DynamicTileLayerProps> = ({ layerId = 'openstreetmap' }) => {

    return (<>
        {
            MAP_LAYERS.filter(item => item.id === layerId).map((layer) => {
                if (layer.wms) {
                    return <WMSTileLayer
                        attribution={layer.attribution}
                        url={layer.url}
                        layers={layer.layers}
                        format={layer.format}
                        transparent={layer.transparent}
                        version={layer.version}
                        key={layer.id}
                    />
                } else {
                    return <TileLayer
                        attribution={layer.attribution}
                        url={layer.url}
                        key={layer.id}
                    />
                }
            })
        }
    </>);
};

export default DynamicTileLayer;
