function checkForSpam(message) {
  const normalizedMessage = message.toLowerCase();

  return (
    normalizedMessage.includes("spam") || normalizedMessage.includes("sale")
  );
}

console.log(checkForSpam("Latest news"));
console.log(checkForSpam("Get best SALE offers now!"));
console.log(checkForSpam("Email spam received"));
