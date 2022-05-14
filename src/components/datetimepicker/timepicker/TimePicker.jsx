import { useEffect, useState } from "react";
import Button from "../../button/Button";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";
import {
  STimeBackdrop,
  STimeContainer,
  STimeContent,
  STimeItem,
  STimeItemCalc,
  STimeItemValue,
} from "./TimePickerStyles";
import { addZero } from "../../../utils/DateTime";

export default function TimePicker({ param, onChoose }) {
  const [tempTime, setTempTime] = useState({ id: "", hour: 0, minute: 0 });

  const handleChoose = () => {
    // menjegah nilai negatif
    let hour = tempTime.hour < 0 ? tempTime.hour * -1 : tempTime.hour;
    let minute = tempTime.minute < 0 ? tempTime.minute * -1 : tempTime.minute;

    let newValue = addZero(hour) + ":" + addZero(minute);
    onChoose({ id: tempTime.id, value: newValue });
  };

  const setInitTempTime = () => {
    if (!param) return;

    let timeArr = param.value.split(":") || [0, 0];
    setTempTime({
      id: param.id,
      hour: Number(timeArr[0]),
      minute: Number(timeArr[1]),
    });
  };

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setTempTime((current) => ({ ...current, [name]: value }));
  };

  const onChangeValue = (key, type) => {
    let batasAtas = { hour: 23, minute: 60 };
    let batasBawah = { hour: 0, minute: 0 };
    if (type == "dec")
      setTempTime((current) => {
        if (current[key] == batasBawah[key])
          return { ...current, [key]: batasAtas[key] };
        return { ...current, [key]: current[key] - 1 };
      });

    if (type == "inc")
      setTempTime((current) => {
        if (current[key] == batasAtas[key])
          return { ...current, [key]: batasBawah[key] };
        return { ...current, [key]: current[key] + 1 };
      });
  };

  useEffect(() => {
    setInitTempTime();
  }, [param]);

  return (
    <>
      {param && (
        <STimeBackdrop>
          <STimeContainer>
            <STimeContent>
              <STimeItem>
                <STimeItemCalc onClick={() => onChangeValue("hour", "dec")}>
                  <HiOutlineChevronUp />
                </STimeItemCalc>
                <div>Jam</div>
                <STimeItemValue
                  type="number"
                  name="hour"
                  value={tempTime?.hour}
                  onChange={onChangeInput}
                />

                <STimeItemCalc onClick={() => onChangeValue("hour", "inc")}>
                  <HiOutlineChevronDown />
                </STimeItemCalc>
              </STimeItem>

              <STimeItem>
                <STimeItemCalc onClick={() => onChangeValue("minute", "dec")}>
                  <HiOutlineChevronUp />
                </STimeItemCalc>

                <div>Menit</div>
                <STimeItemValue
                  type="number"
                  name="minute"
                  value={tempTime?.minute}
                  onChange={onChangeInput}
                />

                <STimeItemCalc onClick={() => onChangeValue("minute", "inc")}>
                  <HiOutlineChevronDown />
                </STimeItemCalc>
              </STimeItem>
            </STimeContent>

            <Button variant="primary" onClick={handleChoose}>
              Pilih
            </Button>
          </STimeContainer>
        </STimeBackdrop>
      )}
    </>
  );
}
