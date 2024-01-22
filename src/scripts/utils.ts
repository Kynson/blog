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
    previousTimeout = setTimeout(() => callback(...arg), milliseconds);
  }
}

export class AbortErrorWithSignal extends DOMException {
  signal: AbortSignal;

  constructor(signal: AbortSignal, message?: string, name?: string) {
    super(message, name);
    this.signal = signal;
  }
}

export function abortableFetch(input: RequestInfo | URL, init?: RequestInit, abortController?: AbortController) {
  const { signal } = abortController;

  return fetch(input, { ...(init || {}), signal }).catch((error: TypeError | DOMException) => {
    const { message, name } = error;

    if (!(error instanceof DOMException) || name !== 'AbortError') {
      throw error;
    }

    throw new AbortErrorWithSignal(signal, message, name);
  });
}