export function formatDateString(dateString: string) {
  return new Date(dateString)
    .toLocaleString('en-HK', {
      dateStyle: 'medium',
      timeStyle: 'medium',
      hour12: false,
    });
}

export function delay(milliseconds: number): Promise<void> {
  return new Promise((resolve, _) => {
    setTimeout(resolve, milliseconds);
  });
}