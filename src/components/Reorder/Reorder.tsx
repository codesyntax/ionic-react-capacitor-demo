import {
    IonReorder,
    IonReorderGroup,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonToggle,
  } from "@ionic/react";
import { useState } from "react";
  
  const Reorder: React.FC = () => {
    const [reorderToggle, setReorderToggle] = useState(true);
    return (
      <>
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
      </>
    );
  };
  export default Reorder;
  