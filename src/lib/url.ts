import QRCode from 'qrcode';

/** Path inside the site, respecting the configured base (BASE_URL ends with "/"). */
export const href = (path = '') => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

/** Absolute public URL of a page (what QR codes encode). */
export const absolute = (path = '') => new URL(href(path), import.meta.env.SITE).toString();

/** Inline SVG QR code, generated at build time. */
export const qrSvg = (url: string, dark = '#0e0e0d') =>
  QRCode.toString(url, {
    type: 'svg',
    margin: 0,
    errorCorrectionLevel: 'M',
    color: { dark, light: '#0000' },
  });
