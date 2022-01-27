import {
    IonReorder,
    IonReorderGroup,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonToggle,
    ItemReorderEventDetail,
  } from "@ionic/react";
import { useState } from "react";
  
  const Reorder: React.FC = () => {
    const [reorderToggle, setReorderToggle] = useState(true);
    function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
      // The `from` and `to` properties contain the index of the item
      // when the drag started and ended, respectively
      console.log('Dragged from index', event.detail.from, 'to', event.detail.to);
    
      // Finish the reorder and position the item in the DOM based on
      // where the gesture ended. This method can also be called directly
      // by the reorder group
      event.detail.complete();
    }
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
          <IonReorderGroup disabled={!reorderToggle} onIonItemReorder={doReorder}>
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
  