import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { RouteComponentProps } from "react-router";
import { LeafletMap } from "../components/Leaflet";

import "./Tab1.css";

const Tab1: React.FC<RouteComponentProps> = () => {
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
