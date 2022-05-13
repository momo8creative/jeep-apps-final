import { useEffect } from "react";
import { useApiContext } from "../../contexts/ApiContext";

export default function AddPemakaian() {
  const { readLastPemakaian } = useApiContext();

  useEffect(() => {
    // readLastPemakaian();
  }, []);

  return <div>AddPemakaian</div>;
}
