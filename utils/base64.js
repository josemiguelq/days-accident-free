export function decode(eventId) {
  if (eventId) {
    const decoded = new Buffer(eventId, "base64");
    const { date, event } = JSON.parse(decoded);

    return {
      date: new Date(date).toISOString(),
      event,
    };
  }

  return {
    date: new Date().toISOString(),
    event: "",
  };
}

export function encode(values) {
  const stringfy = JSON.stringify(values);
  return new Buffer(stringfy).toString("base64");
}
