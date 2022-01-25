import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonReorder,
  IonReorderGroup,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import Accordion from "../components/Accordion/Accordion";
import "./Tab2.css";

const Tab2: React.FC = () => {
  const [reorderToggle, setReorderToggle] = useState(true);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Components</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonListHeader mode="ios">
          <IonLabel>Reorder list</IonLabel>
          <IonToggle
            color="primary"
            style={{ marginBottom: "6px", paddingRight: "20px" }}
            checked={reorderToggle}
            onIonChange={(e) => setReorderToggle(e.detail.checked)}
          />
        </IonListHeader>
        <IonList>
          <IonReorderGroup disabled={!reorderToggle}>
            {/*-- Default reorder icon, end aligned items --*/}
            {[...Array(5).keys()].map((e) => (
              <IonItem key={e}>
                <IonLabel>Item {e}</IonLabel>
                <IonReorder slot="end" />
              </IonItem>
            ))}
          </IonReorderGroup>
        </IonList>

        <Accordion />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
