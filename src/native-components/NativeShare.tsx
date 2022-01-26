import { IonButton, IonIcon } from "@ionic/react";
import { shareOutline } from "ionicons/icons";

import { Share } from "@capacitor/share";
const NativeShare: React.FC = () => {
  const share = async () => {
    await Share.share({
      title: "Mendiak",
      text: "Han goitik itsasoa ikusten da",
      url: "https://codesyntax.com/",
      dialogTitle: "dialog title test",
    });
  };
  return (
    <>
      <IonButton onClick={() => share()} shape="round">
        <IonIcon slot="start" icon={shareOutline} />
        Share
      </IonButton>
    </>
  );
};

export default NativeShare;
