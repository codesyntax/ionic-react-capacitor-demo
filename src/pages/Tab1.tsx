import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { LeafletMap } from '../components/Leaflet';

import './Tab1.css';

const Tab1: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic React</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <LeafletMap />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
