import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Accordion from "../components/Accordion/Accordion";
import DateTime from "../components/DateTime/DateTime";
import Reorder from "../components/Reorder/Reorder";
import "./Tab2.css";


const Tab2: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Components</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <DateTime />
        <Reorder />
        <Accordion />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
