const d = new Date();

export const addZero = (dt) => {
  return dt.toString().length > 1 ? dt : "0" + dt;
};

const dateNow = () => {
  return (
    addZero(d.getDate()) +
    "/" +
    addZero(d.getMonth() + 1) +
    "/" +
    d.getFullYear()
  );
};

const timeNow = () => {
  return addZero(d.getHours()) + ":" + addZero(d.getMinutes());
};

const getMaxDay = (dd, mm, yyyy) => {
  let d = new Date(yyyy, mm, dd);
  let d1 = d.getDay() - 1;
  return d1;
};

//
const DateTime = {
  dateNow,
  timeNow,
};

export default DateTime;
