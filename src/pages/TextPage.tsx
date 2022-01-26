import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect } from 'react';

const TextPage: React.FC = () => {

  useEffect(() => {
    console.log('TextPage.tsx: useEffect');
  } , []);
  console.log('TextPage.tsx without useEffect');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Text page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Text page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p>This page is a demo of making a fetch request render the response HTML</p>
      </IonContent>
    </IonPage>
  );
};

export default TextPage;
