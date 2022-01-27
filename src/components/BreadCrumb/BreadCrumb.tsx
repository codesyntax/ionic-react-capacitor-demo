import { IonBreadcrumb, IonBreadcrumbs } from "@ionic/react";

const FabButton: React.FC = () => {
  return (
    <IonBreadcrumbs  maxItems={4} itemsAfterCollapse={3}>
    <IonBreadcrumb href="#">
      Home
    </IonBreadcrumb>
    <IonBreadcrumb href="#electronics">
      Electronics
    </IonBreadcrumb>
    <IonBreadcrumb href="#photography">
      Photography
    </IonBreadcrumb>
    <IonBreadcrumb href="#cameras">
      Cameras
    </IonBreadcrumb>
    <IonBreadcrumb href="#film">
      Film
    </IonBreadcrumb>
    <IonBreadcrumb>
      35 mm
    </IonBreadcrumb>
  </IonBreadcrumbs>
  );
};
export default FabButton;
