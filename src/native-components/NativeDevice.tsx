import { IonButton, IonIcon, useIonAlert } from "@ionic/react";
import { hardwareChipOutline, batteryHalfOutline } from "ionicons/icons";
import { BatteryInfo, Device, DeviceInfo } from "@capacitor/device";
import { useState } from "react";
const NativeShare: React.FC = () => {
  // const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>();
  // const [batteryInfo, setBatteryInfo] = useState<BatteryInfo>();
  const [present] = useIonAlert();
  const logDeviceInfo = async () => {
    const info = await Device.getInfo();
    // setDeviceInfo(info);
    present({
      header: "Device info",
      message: JSON.stringify(info, null, 2),
      buttons: [
        "Utzi",
        { text: "Ados", handler: (d) => console.log("ok pressed") },
      ],
      onDidDismiss: (e) => console.log("did dismiss"),
    });
    // console.log(info);
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
  return (
    <>
      <IonButton onClick={() => logDeviceInfo()} shape="round">
        <IonIcon slot="start" icon={hardwareChipOutline} />
        Device info
      </IonButton>
      <br />
      {}
      <IonButton onClick={() => logBatteryInfo()} shape="round">
        <IonIcon slot="start" icon={batteryHalfOutline} />
        Baterry info
      </IonButton>
      <br />
      {/* {JSON.stringify(batteryInfo, null, 2) } */}
    </>
  );
};

export default NativeShare;
