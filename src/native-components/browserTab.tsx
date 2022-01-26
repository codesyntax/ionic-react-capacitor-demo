import { Browser } from '@capacitor/browser';
import { IonButton, IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';
const BrowserTab: React.FC = () => {

const openCapacitorSite = async () => {
  await Browser.open({ url: 'http://capacitorjs.com/' });
};
  return (
    <IonButton onClick={()=>openCapacitorSite()}>
         <IonIcon slot="start" icon={star} />
        Open url in browser</IonButton>
  );
};

export default BrowserTab;
