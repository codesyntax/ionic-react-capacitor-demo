import { ReactNode, useEffect, useState } from "react";
import {
  BarcodeScanner,
  ScanResult,
} from "@capacitor-community/barcode-scanner";
import { useIonAlert } from "@ionic/react";
import ReactDOM from "react-dom";
import "./barcodeScanner.css";

export const BarcodeScannerInterface: React.FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const [barcodeScannerDOM, setBarcodeScannerDOM] = useState<Element | null>(
    null
  );

  useEffect(() => {
    const template = document.createElement("div");
    template.id = "barcode-scanner-layout-root";
    document.body.appendChild(template);
    const modalRoot: Element | null = document.getElementById(
      "barcode-scanner-layout-root"
    );
    setBarcodeScannerDOM(modalRoot);

    return () => {
      modalRoot && modalRoot.remove();
    };
  }, []);

  return (
    barcodeScannerDOM &&
    ReactDOM.createPortal(
      <>
        <div id="frame-content">
          <div></div>
        </div>
        {children}
      </>,
      barcodeScannerDOM
    )
  );
};

export function useBarcodeScanner() {
  const [barcodeScanner, setBarcodeScanner] = useState<ScanResult>();
  const [permission, setPermission] = useState<boolean>();
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const [present] = useIonAlert();

  // UseEffect to add/remove style to Portal
  useEffect(() => {
    const root = document.getElementById("root");
    if (isOpened) {
      if (root) {
        root.style.display = "none";
        document.body.style.background = "transparent";
      }
    } else {
      root?.removeAttribute("style");
      document.body.removeAttribute("style");
    }
  }, [isOpened]);

  const startScan = async () => {
    const permission = await checkPermission();
    if (permission) {
     
      BarcodeScanner.hideBackground(); // make background of WebView transparent
      try {
        setIsOpened(true);
        const result = await BarcodeScanner.startScan();

        // if the result has content
        if (result.hasContent) {
          setBarcodeScanner(result);
          setIsOpened(false);
          console.log(result.content); // log the raw scanned content
        }
      } catch (e) {
        setIsOpened(false);
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
    setIsOpened(false);
    // document.body.classList.remove("qrscanner");
    // document.body.style.display = "block";
  };
  return {
    barcodeScanner,
    permission,
    startScan,
    checkPermission,
    prepare,
    stopScan,
    BarcodeScannerInterface,
    isOpened,
  };
}
