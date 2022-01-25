import { IonCard, IonTitle, IonCardHeader, IonCardSubtitle, IonCol, IonContent, IonGrid, IonModal, IonRow, IonToolbar, IonCardTitle } from '@ionic/react';
import { layerProps, MAP_LAYERS } from '../../constants';
import './TileLayerModal.css'


const TileLayerModal: React.FC<{
    open: boolean,
    selectedLayer: layerProps,
    onDismissCallback(): void,
    onSelectLayer(args: layerProps): void
}> = ({ open = false, selectedLayer = null, onDismissCallback, onSelectLayer }) => {
    return (
        <IonModal
            isOpen={open}
            breakpoints={[0, 0.5, 0.98]}
            initialBreakpoint={0.5}
            mode='ios'
            onDidDismiss={() => {
                console.log('Modal dismissed');
                onDismissCallback();
            }}
            class='custom-modal'
        >
            <IonContent className="ion-padding-top">
                <IonGrid>
                        <IonCardTitle className="modal-title">Geruzak</IonCardTitle>
                    <IonRow>
                        {MAP_LAYERS.map((layer) => {
                            return (
                                <IonCol size="6" size-sm="6" key={layer.title}>
                                    <IonCard className={layer === selectedLayer ? 'ion-no-margin selected-layer' : 'ion-no-margin'} onClick={() => { onSelectLayer(layer) }}>
                                        <img className='layer-img' src={layer.image} alt={layer.title} />
                                        <IonCardHeader>
                                            <IonCardSubtitle>{layer.title}</IonCardSubtitle>
                                        </IonCardHeader>
                                    </IonCard>
                                </IonCol>
                            );
                        })}
                    </IonRow>
                </IonGrid>

            </IonContent>
        </IonModal >
    );
};
export default TileLayerModal;