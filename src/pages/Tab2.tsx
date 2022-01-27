import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonListHeader,
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
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";

import { moonOutline, sunnyOutline } from "ionicons/icons";
import "./Tab2.css";
import { RouteComponentProps } from "react-router";
import { useDarkMode } from "../hooks/useDarkMode";

const Tab2: React.FC<RouteComponentProps> = ({ match, history }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Components</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={toggleDarkMode}>
                <IonIcon
                  slot="icon-only"
                  icon={isDarkMode ? sunnyOutline : moonOutline}
                />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Components</IonTitle>
            </IonToolbar>
          </IonHeader>
          {/* <Link to="/tab2/test">User 1</Link> */}
          <IonListHeader mode="ios">
            <IonLabel>Navigation</IonLabel>
          </IonListHeader>
          <IonButton
            className="ion-padding-start"
            onClick={(e) => {
              e.preventDefault();
              history.push(match.url + "/test");
              // history.push(''')
            }}
          >
            <IonLabel>Open inner HTML page</IonLabel>
          </IonButton>
          <Refresher />
          <DateTime />
          <Reorder />
          <Accordion />
          <FabButton />
          <Form />
          <BreadCrumb />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Tab2;
