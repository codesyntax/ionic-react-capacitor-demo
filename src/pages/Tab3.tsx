import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import BrowserTab from '../native-components/browserTab';
import './Tab3.css';

const Tab3: React.FC <RouteComponentProps>= () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Native</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Native</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 3 page" /> */}
        <BrowserTab />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
