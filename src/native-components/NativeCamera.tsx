import { Browser } from "@capacitor/browser";
import {
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonImg,
  IonRow,
} from "@ionic/react";
import { cameraOutline } from "ionicons/icons";
import { Camera, CameraResultType } from "@capacitor/camera";
import { usePhotoGallery } from "../hooks/usePhotoGallery";

const NativeCamera: React.FC = () => {
  const { photos, takePhoto } = usePhotoGallery();
  return (
    <>
      {" "}
      <IonButton onClick={() => takePhoto()} shape="round">
        <IonIcon slot="start" icon={cameraOutline} />
        Native camera
      </IonButton>
      {photos && (
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonImg src={photo.webviewPath} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      )}
    </>
  );
};

export default NativeCamera;
