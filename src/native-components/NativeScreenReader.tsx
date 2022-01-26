import { IonButton, IonIcon } from "@ionic/react";
import { chatboxOutline } from "ionicons/icons";
import { ScreenReader } from "@capacitor/screen-reader";

const NativeScreenReader: React.FC = () => {
  const sayHello = async () => {
    await ScreenReader.speak({ value: "Kaixo mundua!", language: "eu" });
  };
  return (
    <>
      <IonButton onClick={() => sayHello()} shape="round">
        <IonIcon slot="start" icon={chatboxOutline} />
        Screen Reader
      </IonButton>
    </>
  );
};

export default NativeScreenReader;
