import { useEffect, useState } from "react";
import Button from "../../button/Button";
import { HiCalendar } from "react-icons/hi";
import {
  SForm,
  SFormControl,
  SFormGroup,
  SFormIcon,
  SFormInput,
  SFormLabel,
} from "./FormAddPemakaianStyles";

export default function FormAddPemakaian({ handleSubmit, data }) {
  const [formData, setFormData] = useState(data);

  const onChangeField = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    setFormData((data) => ({ ...data, [id]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };
  //
  useEffect(() => {
    // console.log(formData);
  }, [formData]);
  //
  return (
    <SForm onSubmit={onSubmit} autoComplete="off">
      <FormField
        type="text"
        label="No SPJ"
        name="no_spj"
        value={formData["no_spj"]}
        onChange={onChangeField}
      />

      <FormField
        type="text"
        label="Tanggal Berangkat"
        name="tgl_berangkat"
        icon={<HiCalendar />}
        value={formData["tgl_berangkat"]}
        onChange={onChangeField}
      />

      <FormField
        type="text"
        label="Tanggal Kembali"
        name="tgl_kembali"
        value={formData["tgl_kembali"]}
        onChange={onChangeField}
      />

      <FormField
        type="text"
        label="Jam Berangkat"
        name="jam_berangkat"
        value={formData["jam_berangkat"]}
        onChange={onChangeField}
      />

      <FormField
        type="text"
        label="Jam Kembali"
        name="jam_kembali"
        value={formData["jam_kembali"]}
        onChange={onChangeField}
      />

      <FormField
        type="text"
        label="Tujuan"
        name="tujuan"
        value={formData["tujuan"]}
        onChange={onChangeField}
      />

      <FormField
        type="text"
        label="Keperluan"
        name="keperluan"
        value={formData["keperluan"]}
        onChange={onChangeField}
      />

      <FormField
        type="number"
        label="Km Awal"
        name="km_awal"
        value={formData["km_awal"]}
        onChange={onChangeField}
      />

      <Button variant="primary" type="submit">
        Simpan
      </Button>
    </SForm>
  );
}

const FormField = (props) => {
  return (
    <SFormGroup>
      <SFormLabel htmlFor={props.name}>{props.label}</SFormLabel>
      <SFormControl>
        <SFormIcon>{props.icon}</SFormIcon>
        <SFormInput
          type={props.type}
          id={props.name}
          value={props.value}
          onChange={props.onChange}
        />
      </SFormControl>
    </SFormGroup>
  );
};

FormAddPemakaian.defaultProps = {
  data: {
    no_spj: "",
    tgl_berangkat: "2022-05-18",
    tgl_kembali: "2022-05-18",
    jam_berangkat: "15:30",
    jam_kembali: "18:30",
    tujuan: "",
    keperluan: "",
    km_awal: "",
    km_akhir: "",
    km_pemakaian: "",
  },
};
