const dayOfTheWeek = (date = new Date()) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wdnesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return days[date.getDay()];
};

try {
  document.querySelector('#display').textContent = dayOfTheWeek();
} catch (err) {}

// exports = { dayOfTheWeek };
module.exports = { dayOfTheWeek };
