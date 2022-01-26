import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";

const TextPage: React.FC = () => {
  const URL = "https://mdn.github.io/beginner-html-site/";
  const [text, setText] = useState<string | null>(null);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.text())
      .then((res) => setText(res))
      .catch(() => console.error("Can't connect to backend try latter"));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Text page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Text page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p>
          This page is a demo of making a fetch request to render the response HTML
        </p>
        {text && <div dangerouslySetInnerHTML={ {__html: text}} />}
        
      </IonContent>
    </IonPage>
  );
};

export default TextPage;
