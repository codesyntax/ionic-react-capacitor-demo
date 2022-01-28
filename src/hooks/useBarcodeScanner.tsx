import { useState } from "react";
import {
  BarcodeScanner,
  ScanResult,
} from "@capacitor-community/barcode-scanner";
import { useIonAlert } from "@ionic/react";

export function useBarcodeScanner() {
  const [barcodeScanner, setBarcodeScanner] = useState<ScanResult>();
  const [permission, setPermission] = useState<boolean>();
  const [present] = useIonAlert();

  console.log("useBarcodeScanner");
  // console.log("result", BarcodeScanner.startScan());

  const startScan = async () => {
    const permission = await checkPermission();
    if (permission) {
      document.body.classList.add("qrscanner");
      BarcodeScanner.hideBackground(); // make background of WebView transparent
      // document.body.style.display = "none";
      try {
        const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
        // document.body.style.display = "block";
    document.body.classList.remove("qrscanner");
     
        // if the result has content
        if (result.hasContent) {
          setBarcodeScanner(result);

          console.log(result.content); // log the raw scanned content
        }
      } catch (e) {
        console.error(e);
      }
    } else {
      console.error("Permission denied");
    }
  };

  const checkPermission = async () => {
    // check or request permission
    const status = await BarcodeScanner.checkPermission({ force: true });

    if (status.granted) {
      // the user granted permission
      setPermission(true);
      return true;
    } else if (status.denied) {
      present({
        header: "Barcode Scanner",
        message:
          "If you want to grant permission for using your camera, enable it in the app settings.",
        buttons: [
          "Utzi",
          { text: "Ados", handler: (d) => BarcodeScanner.openAppSettings() },
        ],
        onDidDismiss: (e) => console.log("did dismiss"),
      });
    } else {
      setPermission(false);
      return false;
    }
  };
  const prepare = () => {
    BarcodeScanner.prepare();
  };
  const stopScan = () => {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.body.classList.remove("qrscanner");
    // document.body.style.display = "block";
  };
  return {
    barcodeScanner,
    permission,
    startScan,
    checkPermission,
    prepare,
    stopScan,
  };
}
