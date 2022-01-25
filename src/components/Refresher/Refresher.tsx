import {
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
} from "@ionic/react";

const Refresher: React.FC = () => {
  function doRefresh(event: CustomEvent<RefresherEventDetail>) {
    console.log("Begin async operation");

    setTimeout(() => {
      console.log("Async operation has ended");
      event.detail.complete();
    }, 2000);
  }

  return (
    <IonRefresher
      slot="fixed"
      onIonRefresh={doRefresh}
      pullFactor={0.5}
      pullMin={100}
      pullMax={200}
    >
      <IonRefresherContent></IonRefresherContent>
    </IonRefresher>
  );
};
export default Refresher;
