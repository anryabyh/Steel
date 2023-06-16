const formatDate = (date) => {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
};

const formatTime = (date) => {
  const options = { hour: 'numeric', minute: 'numeric' };
  return date.toLocaleTimeString(undefined, options);
};
