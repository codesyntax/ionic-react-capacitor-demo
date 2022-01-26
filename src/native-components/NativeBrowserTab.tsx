import { Browser } from '@capacitor/browser';
import { IonButton, IonIcon } from '@ionic/react';
import { globeOutline } from 'ionicons/icons';

const BrowserTab: React.FC = () => {

const openCapacitorSite = async () => {
  await Browser.open({ url: 'http://capacitorjs.com/' });
};
  return (
    <IonButton onClick={()=>openCapacitorSite()} shape='round'>
         <IonIcon slot="start" icon={globeOutline} />
        Open url in browser</IonButton>
  );
};

export default BrowserTab;
