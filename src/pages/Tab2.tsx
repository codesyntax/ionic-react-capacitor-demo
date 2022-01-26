import {
  IonButton,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonRouterOutlet,
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
import { Route } from "react-router";
import TextPage from "./TextPage";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";

const Tab2: React.FC<RouteComponentProps>= ({match, history}) => {
  return (<>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Components</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      {/* <Link to="/tab2/test">User 1</Link> */}

      <IonButton onClick={e => {
              e.preventDefault();
              history.push(match.url +'/test')
              // history.push(''')
            }}>
              <IonLabel>User 3</IonLabel>
            </IonButton>
        <Refresher />
        <DateTime />
        <Reorder />
        <Accordion />
        <FabButton />
        <Form />
      </IonContent>
    </IonPage>
        
        </>
  );
};

export default Tab2;
