const timeStampToDate = (timestamp) => {
  let dateString = new Date(parseInt(timestamp));

  let hours = dateString.getHours();
  let minutes = dateString.getMinutes();

  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  let day = dateString.getDate().toString().padStart(2, "0");
  let month = (dateString.getMonth() + 1).toString().padStart(2, "0");
  let year = dateString.getFullYear().toString().slice(2);
  let data = `${hours}:${minutes} ${ampm} ${day}/${month}/${year}`;
  let value = {
    time: `${hours}:${minutes} ${ampm}`,
    date: `${day}/${month}/${year}`,
    data: data,
  };

  return value;
};

export default timeStampToDate;

