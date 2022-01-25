import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { LeafletMap } from "../components/Leaflet";

import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic React Leaflet Demo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <LeafletMap />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
