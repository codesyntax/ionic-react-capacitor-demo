import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Accordion from "../components/Accordion/Accordion";
import DateTime from "../components/DateTime/DateTime";
import FabButton from "../components/FabButton/FabButton";
import Refresher from "../components/Refresher/Refresher";
import Reorder from "../components/Reorder/Reorder";
import Form from "../components/Form/Form";

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
        <Refresher />
        <DateTime />
        <Reorder />
        <Accordion />
        <FabButton />
        <Form />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
