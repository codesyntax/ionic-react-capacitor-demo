import {
  IonButton,
  IonContent,
  IonDatetime,
  IonLabel,
  IonListHeader,
  IonModal,
} from "@ionic/react";

import "./DateTime.css";
import { useState } from "react";

const DateTime: React.FC = () => {
  const [dateTime, setDateTime] = useState();
  return (
    <>
      <IonListHeader mode="ios">
        <IonLabel>DateTime</IonLabel>
      </IonListHeader>
      {/* Datetime in overlay */}
      <div className="ion-padding-start">
        <IonButton id="open-modal">Open Datetime Modal</IonButton>
        <IonModal trigger="open-modal" className="date-time-modal">
          <IonContent>
            <IonDatetime
              size="cover"
              locale="ca"
              onIonChange={(e: CustomEvent) => setDateTime(e.detail.value)}
            >
              <div slot="time-label">Ordua</div>
            </IonDatetime>
          </IonContent>
        </IonModal>
        {dateTime && <p>{dateTime}</p>}
      </div>
    </>
  );
};
export default DateTime;
