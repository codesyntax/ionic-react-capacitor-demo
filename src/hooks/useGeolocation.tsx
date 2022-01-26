import { useState } from "react";
import { Geolocation, Position } from "@capacitor/geolocation";

export function useGeolocation() {
  const [position, setPosition] = useState<Position>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getCurrentPosition = async () => {
    setIsLoading(true);
    const coordinates = await Geolocation.getCurrentPosition();
    console.log("Current position:", coordinates);
    setPosition(coordinates);
    setIsLoading(false);
  };

  return {
    position,
    getCurrentPosition,
    isLoading
  };
}
