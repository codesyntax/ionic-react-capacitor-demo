import { IonButton, IonIcon, useIonAlert } from "@ionic/react";
import { hardwareChipOutline, batteryHalfOutline, idCardOutline, languageOutline } from "ionicons/icons";
import {  Device } from "@capacitor/device";
const NativeShare: React.FC = () => {
  const [present] = useIonAlert();
  const logDeviceInfo = async () => {
    const info = await Device.getInfo();
    present({
      header: "Device info",
      message: JSON.stringify(info, null, 2),
      buttons: [
        "Utzi",
        { text: "Ados", handler: (d) => console.log("ok pressed") },
      ],
      onDidDismiss: (e) => console.log("did dismiss"),
    });
  };

  const logBatteryInfo = async () => {
    const info = await Device.getBatteryInfo();
    // setBatteryInfo(info);
    console.log(info);
    present({
      header: "Battery info",
      message: JSON.stringify(info, null, 2),
      buttons: [
        "Utzi",
        { text: "Ados", handler: (d) => console.log("ok pressed") },
      ],
      onDidDismiss: (e) => console.log("did dismiss"),
    });
  };

  const logDeviceID = async () => {
    const info = await Device.getId();
    // setBatteryInfo(info);
    console.log(info);
    present({
      header: "Device ID",
      message: JSON.stringify(info, null, 2),
      buttons: [
        "Utzi",
        { text: "Ados", handler: (d) => console.log("ok pressed") },
      ],
      onDidDismiss: (e) => console.log("did dismiss"),
    });
  };

  const logDeviceLanguageCode = async () => {
    const info = await Device.getLanguageCode();
    // setBatteryInfo(info);
    console.log(info);
    present({
      header: "Language code",
      message: JSON.stringify(info, null, 2),
      buttons: [
        "Utzi",
        { text: "Ados", handler: (d) => console.log("ok pressed") },
      ],
      onDidDismiss: (e) => console.log("did dismiss"),
    });
  };
  return (
    <>
      <IonButton onClick={() => logDeviceInfo()} shape="round">
        <IonIcon slot="start" icon={hardwareChipOutline} />
        Device info
      </IonButton>
      <br />

      <IonButton onClick={() => logDeviceID()} shape="round">
        <IonIcon slot="start" icon={idCardOutline} />
        Device ID
      </IonButton>
      <br />
      <IonButton onClick={() => logDeviceLanguageCode()} shape="round">
        <IonIcon slot="start" icon={languageOutline} />
        Language Code
      </IonButton>
      <br />
      <IonButton onClick={() => logBatteryInfo()} shape="round">
        <IonIcon slot="start" icon={batteryHalfOutline} />
        Baterry info
      </IonButton>
    </>
  );
};

export default NativeShare;
