import { useEffect, useState } from "react";
import Button from "../../button/Button";
import {
  HiOutlineDocumentText,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineBriefcase,
} from "react-icons/hi";
import {
  SForm,
  SFormControl,
  SFormGroup,
  SFormHelper,
  SFormIcon,
  SFormInput,
  SFormLabel,
} from "./FormAddPemakaianStyles";
import DateTime from "../../../utils/DateTime";
import DatePicker from "../../datetimepicker/datepicker/DatePicker";
import TimePicker from "../../datetimepicker/timepicker/TimePicker";

export default function FormAddPemakaian({ handleSubmit, data }) {
  const [formData, setFormData] = useState(data);

  const [tempValueDatePicker, setTempValueDatePicker] = useState();
  const [tempValueTimePicker, setTempValueTimePicker] = useState();

  const handleOnChange = (e) => {
    let id = e.target.id;
    let value = e.target.value;

    setFormData((data) => ({ ...data, [id]: value }));
  };

  const openTimePicker = (e) => {
    setTempValueTimePicker({ id: e.target.id, value: e.target.value });
  };

  const onChooseTimePicker = ({ id, value }) => {
    setTempValueTimePicker(null);
    setFormData((data) => ({ ...data, [id]: value }));
  };

  const openDatePicker = (e) => {
    setTempValueDatePicker({ id: e.target.id, value: e.target.value });
  };

  const onChooseDatePicker = ({ id, value }) => {
    setTempValueDatePicker(null);
    setFormData((data) => ({ ...data, [id]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };
  //
  useEffect(() => {
    // console.log(valueDatePicker);
  }, []);

  //
  return (
    <>
      <TimePicker param={tempValueTimePicker} onChoose={onChooseTimePicker} />

      <DatePicker param={tempValueDatePicker} onChoose={onChooseDatePicker} />

      <SForm onSubmit={onSubmit} autoComplete="off">
        <FormField
          type="text"
          label="No SPJ"
          name="no_spj"
          icon={<HiOutlineDocumentText />}
          value={formData["no_spj"]}
          onChange={handleOnChange}
          helper="Kosongi jika tidak ada !"
        />

        <FormField
          type="text"
          label="Tanggal Berangkat"
          name="tgl_berangkat"
          icon={<HiOutlineCalendar />}
          value={formData["tgl_berangkat"]}
          onChange={handleOnChange}
          onClick={openDatePicker}
        />

        <FormField
          type="text"
          label="Tanggal Kembali"
          name="tgl_kembali"
          icon={<HiOutlineCalendar />}
          value={formData["tgl_kembali"]}
          onChange={handleOnChange}
          onClick={openDatePicker}
        />

        <FormField
          type="text"
          label="Jam Berangkat"
          name="jam_berangkat"
          icon={<HiOutlineClock />}
          value={formData["jam_berangkat"]}
          onChange={handleOnChange}
          onClick={openTimePicker}
        />

        <FormField
          type="text"
          label="Jam Kembali"
          name="jam_kembali"
          icon={<HiOutlineClock />}
          value={formData["jam_kembali"]}
          onChange={handleOnChange}
          onClick={openTimePicker}
        />

        <FormField
          type="text"
          label="Tujuan"
          name="tujuan"
          icon={<HiOutlineLocationMarker />}
          value={formData["tujuan"]}
          onChange={handleOnChange}
        />

        <FormField
          type="text"
          label="Keperluan"
          name="keperluan"
          icon={<HiOutlineBriefcase />}
          value={formData["keperluan"]}
          onChange={handleOnChange}
        />

        <Button type="submit" variant="primary">
          Simpan
        </Button>
      </SForm>
    </>
  );
}

const FormField = ({ label, icon, helper, ...props }) => {
  return (
    <SFormGroup>
      <SFormLabel htmlFor={props.name}>{label}</SFormLabel>
      <SFormControl helper={helper}>
        <SFormIcon>{icon}</SFormIcon>
        <SFormInput {...props} id={props.name} />

        {helper && <SFormHelper>{helper}</SFormHelper>}
      </SFormControl>
    </SFormGroup>
  );
};

FormAddPemakaian.defaultProps = {
  data: {
    no_spj: "",
    tgl_berangkat: DateTime.dateNow(),
    tgl_kembali: DateTime.dateNow(),
    jam_berangkat: DateTime.timeNow(),
    jam_kembali: DateTime.timeNow(),
    tujuan: "",
    keperluan: "",
    km_awal: "",
    km_akhir: "",
    km_pemakaian: "",
  },
};
