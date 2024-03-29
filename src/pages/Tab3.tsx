import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import NativeBrowserTab from '../native-components/NativeBrowserTab';
import NativeCamera from '../native-components/NativeCamera';
import NativeClipboard from '../native-components/NativeClipboard';
import NativeGeolocation from '../native-components/NativeGeolocation';
import NativeShare from '../native-components/NativeShare';
import NativeDevice from '../native-components/NativeDevice';

import './Tab3.css';
import NativeBarcodeScanner from '../native-components/NativeBarcodeScanner';

const Tab3: React.FC <RouteComponentProps>= () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Native</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-text-center ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Native</IonTitle>
          </IonToolbar>
        </IonHeader>
        <NativeBrowserTab />
        <NativeCamera />
        <NativeBarcodeScanner />
        <NativeClipboard />
        <NativeShare />
        <NativeGeolocation />
        <NativeDevice />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
