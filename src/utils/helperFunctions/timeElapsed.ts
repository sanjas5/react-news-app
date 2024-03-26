function getTimeElapsedString(dateString: string): string {
  const providedDate: Date = new Date(dateString);
  const currentDate: Date = new Date();
  const differenceInMs: number = currentDate.getTime() - providedDate.getTime();

  const secondsPassed: number = Math.floor(differenceInMs / 1000);
  const minutesPassed: number = Math.floor(secondsPassed / 60);
  const hoursPassed: number = Math.floor(minutesPassed / 60);
  const daysPassed: number = Math.floor(hoursPassed / 24);
  const yearsPassed: number = Math.floor(daysPassed / 365);

  if (yearsPassed > 0) {
    if (yearsPassed === 1) return `before ${yearsPassed} year`;
    return `before ${yearsPassed} years`;
  } else if (daysPassed > 0) {
    if (daysPassed === 1) return `before ${daysPassed} day`;

    return `before ${daysPassed} days`;
  } else if (hoursPassed > 0) {
    if (hoursPassed === 1) return `before ${hoursPassed} hour`;

    return `before ${hoursPassed} hours`;
  } else if (minutesPassed > 0) {
    if (minutesPassed === 1) return `before ${minutesPassed} minute`;

    return `before ${minutesPassed} minutes`;
  } else {
    return "just now";
  }
}
export default getTimeElapsedString;
