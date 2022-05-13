import { useEffect } from "react";
import Heading from "../../components/heading/Heading";
import { useApiContext } from "../../contexts/ApiContext";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import FormAddPemakaian from "../../components/form/formAddPemakaian/FormAddPemakaian";

export default function AddPemakaian() {
  const { readLastPemakaian } = useApiContext();

  // submit form
  const handleSubmit = (formData) => {
    console.log("Submit add pemakaian ", formData);
  };

  useEffect(() => {
    // readLastPemakaian();
  }, []);

  return (
    <div>
      <Heading size="2rem">
        <HiOutlineDocumentAdd />
        <h1>Tambah Pemakaian</h1>
      </Heading>

      <FormAddPemakaian handleSubmit={handleSubmit} />
    </div>
  );
}
