import { IonButton, IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { scanOutline, closeCircleOutline } from "ionicons/icons";
import { useBarcodeScanner } from "../hooks/useBarcodeScanner";

const NativeBarcodeScanner: React.FC = () => {
  const {
    barcodeScanner,
    startScan,
    checkPermission,
    stopScan,
    isOpened,
    BarcodeScannerInterface,
  } = useBarcodeScanner();

  //   checkPermission()
  return (
    <>
      <IonButton onClick={() => startScan()} shape="round">
        <IonIcon slot="start" icon={scanOutline} />
        Barcode Scanner
      </IonButton>
      {isOpened && (
        <BarcodeScannerInterface>
          <IonFab vertical="top" horizontal="end" slot="fixed">
            <IonFabButton onClick={stopScan} color="light">
              <IonIcon icon={closeCircleOutline}></IonIcon>
            </IonFabButton>
          </IonFab>
        </BarcodeScannerInterface>
      )}
      {barcodeScanner && <p>{barcodeScanner.content}</p>}
    </>
  );
};

export default NativeBarcodeScanner;
