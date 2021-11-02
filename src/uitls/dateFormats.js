const padValue = (value) => {
  return value < 10 ? "0" + value : value;
};

/* function return Month day/year hh:mm AM or PM */
export const DateFormatOne = ({ dateVal }) => {
  var newDate = new Date(dateVal);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  var sMonth = monthNames[newDate.getMonth()];
  var sDay = padValue(newDate.getDate());
  var sYear = newDate.getFullYear();
  var sHour = newDate.getHours();
  var sMinute = padValue(newDate.getMinutes());
  var sAMPM = "AM";

  var iHourCheck = parseInt(sHour);

  if (iHourCheck > 12) {
    sAMPM = "PM";
    sHour = iHourCheck - 12;
  } else if (iHourCheck === 0) {
    sHour = "12";
  }

  sHour = padValue(sHour);

  return (
    sMonth +
    " " +
    sDay +
    "/" +
    sYear +
    " " +
    sHour +
    ":" +
    sMinute +
    " " +
    sAMPM
  );
};

/* function return Month day,year */

export const DateFormatTwo = ({dateVal}) => {
  var newDate = new Date(dateVal);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  var sMonth = monthNames[newDate.getMonth()];
  var sDay = padValue(newDate.getDate());
  var sYear = newDate.getFullYear();

  return sMonth + " " + sDay + "," + sYear;
};
