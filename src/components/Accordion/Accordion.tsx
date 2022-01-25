import {
  IonAccordion,
  IonAccordionGroup,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
} from "@ionic/react";
import {ellipse, triangle, square} from "ionicons/icons";
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
            <IonIcon icon={ellipse} slot="start" color="danger"/>
            </IonItem>
            <IonItem>
              <IonLabel>Green</IonLabel>
            <IonIcon icon={ellipse} slot="start" color="success"/>

            </IonItem>
            <IonItem>
              <IonLabel>Blue</IonLabel>
            <IonIcon icon={ellipse} slot="start" color="primary"/>

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
            <IonIcon icon={ellipse} slot="start"/>
            </IonItem>
            <IonItem>
              <IonLabel>Triangle</IonLabel>
            <IonIcon icon={triangle} slot="start"/>

            </IonItem>
            <IonItem>
              <IonLabel>Square</IonLabel>
            <IonIcon icon={square} slot="start"/>
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
