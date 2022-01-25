import { IonInput, IonItem, IonLabel, IonListHeader, IonSelect, IonSelectOption } from "@ionic/react";

const FabButton: React.FC = () => {
  return (
    <>
      <IonListHeader mode="ios">
        <IonLabel>Material Form</IonLabel>
      </IonListHeader>
      <div className="ion-padding">
        <IonItem fill="outline" mode="md">
          <IonLabel position="floating">Username</IonLabel>
          <IonInput
            type="email"
            inputmode="email"
            autocomplete="off"
            autocorrect="off"
            required
            autofocus
          ></IonInput>
        </IonItem>
        <IonItem fill="outline" mode="md" className="ion-margin-top">
            <IonLabel>Popover</IonLabel>
            <IonSelect
              interface="popover"
              placeholder="Select One"
              >
              <IonSelectOption value="brown">Brown</IonSelectOption>
              <IonSelectOption value="blonde">Blonde</IonSelectOption>
              <IonSelectOption value="black">Black</IonSelectOption>
              <IonSelectOption value="red">Red</IonSelectOption>
            </IonSelect>
          </IonItem>

      </div>
    </>
  );
};
export default FabButton;
