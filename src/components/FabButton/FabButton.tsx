import { IonFab, IonFabButton, IonFabList, IonIcon } from "@ionic/react";
import {
  shareOutline,
  logoVimeo,
  logoFacebook,
  logoInstagram,
  logoTwitter,
} from "ionicons/icons";
const FabButton: React.FC = () => {
  return (
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonFabButton  color="light"  mode="ios">
        <IonIcon icon={shareOutline} />
      </IonFabButton>
      <IonFabList side="top" >
        <IonFabButton color="dark">
          <IonIcon icon={logoVimeo} />
        </IonFabButton>
        <IonFabButton color="dark">
          <IonIcon icon={logoFacebook} />
        </IonFabButton>
        <IonFabButton color="dark">
          <IonIcon icon={logoInstagram} />
        </IonFabButton>
        <IonFabButton color="dark">
          <IonIcon icon={logoTwitter} />
        </IonFabButton>
      </IonFabList>
    </IonFab>
  );
};
export default FabButton;
