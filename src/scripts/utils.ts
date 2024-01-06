export function formatDateString(dateString: string) {
  return new Date(dateString)
    .toLocaleString('en-HK', {
      dateStyle: 'medium',
      timeStyle: 'long',
      hour12: false,
      timeZone: 'Asia/Hong_Kong',
    });
}

export function delay(milliseconds: number): Promise<void> {
  return new Promise((resolve, _) => {
    setTimeout(resolve, milliseconds);
  });
}

export function debounce(callback: (...arg: any[]) => any, milliseconds: number) {
  let previousTimeout: number | string | NodeJS.Timeout;
  return (...arg: any[]) => {
    clearTimeout(previousTimeout);
    previousTimeout = setTimeout(() => callback(arg), milliseconds);
  }
}