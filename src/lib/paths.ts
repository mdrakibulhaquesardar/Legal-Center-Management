/**
 * Resolves a route or asset path against Astro's configured base path.
 * Handles both GitHub Pages subpaths (/Legal-Center-Management/) and root custom domains (/).
 */
export function url(path = ''): string {
  const rawBase = import.meta.env.BASE_URL || '/';
  const base = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;

  if (!path || path === '/') {
    return base ? `${base}/` : '/';
  }

  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}

