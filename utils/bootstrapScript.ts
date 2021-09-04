export function attachScripts() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const body = document.querySelector('body');

  // Bootstrap
  const bootstrap = document.createElement('script');
  bootstrap.src =
    'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js';
  bootstrap.integrity =
    'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM';
  bootstrap.crossOrigin = 'anonymous';

  body?.appendChild(bootstrap);
}
