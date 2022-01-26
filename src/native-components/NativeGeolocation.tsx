import { IonButton, IonIcon } from "@ionic/react";
import { compassOutline } from "ionicons/icons";
import { useGeolocation } from "../hooks/useGeolocation";

const NativeGeolocation: React.FC = () => {
  const { getCurrentPosition, position, isLoading } = useGeolocation();

  return (
    <>
      <IonButton onClick={() => getCurrentPosition()} shape="round">
        <IonIcon slot="start" icon={compassOutline} />
        Get current position
      </IonButton>
      {isLoading && <p>Loading...</p>}
      {position && (
        <>
          <p>Latitude: {position.coords.latitude}</p>
          <p>Longitude: {position.coords.longitude}</p>
        </>
      )}
    </>
  );
};

export default NativeGeolocation;
