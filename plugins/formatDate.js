import dayjs from "dayjs";

const formateDate = (data) => {
  return dayjs(data).format("D MMMM, YYYY");
};

export default formateDate;
