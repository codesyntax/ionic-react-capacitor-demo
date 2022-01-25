import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
} from "@ionic/react";

const Accordion: React.FC = () => {
  return (
    <>
      <IonListHeader mode="ios">
        <IonLabel>Accordion</IonLabel>
      </IonListHeader>
      <IonAccordionGroup>
        <IonAccordion value="colors">
          <IonItem slot="header">
            <IonLabel>Colors</IonLabel>
          </IonItem>

          <IonList slot="content">
            <IonItem>
              <IonLabel>Red</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Green</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Blue</IonLabel>
            </IonItem>
          </IonList>
        </IonAccordion>
        <IonAccordion value="shapes">
          <IonItem slot="header">
            <IonLabel>Shapes</IonLabel>
          </IonItem>

          <IonList slot="content">
            <IonItem>
              <IonLabel>Circle</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Triangle</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Square</IonLabel>
            </IonItem>
          </IonList>
        </IonAccordion>
        <IonAccordion value="numbers">
          <IonItem slot="header">
            <IonLabel>Numbers</IonLabel>
          </IonItem>

          <IonList slot="content">
            <IonItem>
              <IonLabel>1</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>2</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>3</IonLabel>
            </IonItem>
          </IonList>
        </IonAccordion>
      </IonAccordionGroup>
    </>
  );
};
export default Accordion;
