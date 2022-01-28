import {
  IonButton,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";
import { scanOutline, closeCircleOutline } from "ionicons/icons";
import { useBarcodeScanner } from "../hooks/useBarcodeScanner";
import '../theme/barcodeScanner.css';

const NativeBarcodeScanner: React.FC = () => {
  const { barcodeScanner, startScan, checkPermission, stopScan } =
    useBarcodeScanner();
  //   checkPermission()
  return (
    <>
      <IonButton onClick={() => startScan()} shape="round">
        <IonIcon slot="start" icon={scanOutline} />
        Barcode Scanner
      </IonButton>
      <div className="scanner-ui">
      <IonFab vertical="top" horizontal="end" slot="fixed" style={{top: '65px'}}>
        <IonFabButton onClick={stopScan} color="light">
          <IonIcon icon={closeCircleOutline}></IonIcon>
        </IonFabButton>
      </IonFab>
      </div>
      {barcodeScanner && <p>{barcodeScanner.content}</p>}
    </>
  );
};

export default NativeBarcodeScanner;
