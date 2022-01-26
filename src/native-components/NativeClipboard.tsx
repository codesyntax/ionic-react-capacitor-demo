import {
    IonButton,
    IonIcon,
  } from "@ionic/react";
  import { clipboardOutline } from "ionicons/icons";
  import { Clipboard } from '@capacitor/clipboard';
  
  const NativeCamera: React.FC = () => {
    const writeToClipboard = async () => {
        await Clipboard.write({
          string: "Hello World!"
        });
      };
    return (
      <>
        <IonButton onClick={() => writeToClipboard()} shape="round">
          <IonIcon slot="start" icon={clipboardOutline} />
          Copy to clipboard
        </IonButton>
      </>
    );
  };
  
  export default NativeCamera;
  