import { useEffect } from "react";
import { useApiContext } from "../../contexts/ApiContext";

export default function Pemakaian() {
  const { readPemakaian } = useApiContext();

  useEffect(() => {
    // readPemakaian();
  }, []);

  return <div>Pemakaian</div>;
}
