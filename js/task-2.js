function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message;
  }
  return message.slice(0, maxLength) + "...";
}

console.log(formatMessage("Hello", 20));
console.log(formatMessage("Hello", 4));
console.log(formatMessage("Hi", 2));
