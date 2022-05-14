import { useEffect, useState } from "react";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";
import { addZero } from "../../../utils/DateTime";
import Button from "../../button/Button";
import {
  SDateBackdrop,
  SDateContainer,
  SDateContent,
  SDateItem,
  SDateItemCalc,
  SDateItemValue,
} from "./DatePickerStyles";

export default function DatePicker({ param, onChoose, minValue, maxValue }) {
  const [tempDate, setTempDate] = useState();

  const initValueTempDate = () => {
    let dateArr = param.value.split("/");

    setTempDate({
      id: param.id,
      day: Number(dateArr[0]),
      month: Number(dateArr[1]),
      year: Number(dateArr[2]),
    });
  };

  const dateDecrement = (key) => {
    setTempDate((current) => {
      if (current[key] == minValue[key])
        return { ...current, [key]: maxValue[key] };
      return { ...current, [key]: current[key] - 1 };
    });
  };

  const dateIncrement = (key) => {
    setTempDate((current) => {
      if (current[key] == maxValue[key])
        return { ...current, [key]: minValue[key] };
      return { ...current, [key]: current[key] + 1 };
    });
  };

  const onChangeInput = (e) => {
    setTempDate((current) => ({ ...current, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newValue =
      addZero(tempDate.day) +
      "/" +
      addZero(tempDate.month) +
      "/" +
      tempDate.year;

    onChoose({ id: tempDate.id, value: newValue });
  };

  useEffect(() => {
    if (param) initValueTempDate();
  }, [param]);

  return (
    <>
      {param && (
        <SDateBackdrop>
          <SDateContainer onSubmit={handleSubmit}>
            <SDateContent>
              <SDateItem width="30%">
                <SDateItemCalc
                  type="button"
                  onClick={() => dateDecrement("day")}
                >
                  <HiOutlineChevronUp />
                </SDateItemCalc>

                <div>DD</div>
                <SDateItemValue
                  type="number"
                  name="day"
                  min={minValue["day"]}
                  max={maxValue["day"]}
                  value={tempDate?.day}
                  onChange={onChangeInput}
                />

                <SDateItemCalc
                  type="button"
                  onClick={() => dateIncrement("day")}
                >
                  <HiOutlineChevronDown />
                </SDateItemCalc>
              </SDateItem>

              <SDateItem width="30%">
                <SDateItemCalc
                  type="button"
                  onClick={() => dateDecrement("month")}
                >
                  <HiOutlineChevronUp />
                </SDateItemCalc>

                <div>MM</div>
                <SDateItemValue
                  type="number"
                  name="month"
                  min={minValue["month"]}
                  max={maxValue["month"]}
                  value={tempDate?.month}
                  onChange={onChangeInput}
                />

                <SDateItemCalc
                  type="button"
                  onClick={() => dateIncrement("month")}
                >
                  <HiOutlineChevronDown />
                </SDateItemCalc>
              </SDateItem>

              <SDateItem width="40%">
                <SDateItemCalc
                  type="button"
                  onClick={() => dateDecrement("year")}
                >
                  <HiOutlineChevronUp />
                </SDateItemCalc>

                <div>YYYY</div>
                <SDateItemValue
                  type="number"
                  name="year"
                  min={minValue["year"]}
                  max={maxValue["year"]}
                  value={tempDate?.year}
                  onChange={onChangeInput}
                />

                <SDateItemCalc
                  type="button"
                  onClick={() => dateIncrement("year")}
                >
                  <HiOutlineChevronDown />
                </SDateItemCalc>
              </SDateItem>
            </SDateContent>

            <Button variant="primary" type="submit">
              Pilih
            </Button>
          </SDateContainer>
        </SDateBackdrop>
      )}
    </>
  );
}

DatePicker.defaultProps = {
  minValue: {
    day: 1,
    month: 1,
    year: 2000,
  },

  maxValue: {
    day: 31,
    month: 12,
    year: 2200,
  },
};
