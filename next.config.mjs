/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
  const config = {
    reactStrictMode: true,
    compress: true,
    images: {
      formats: ['image/avif', 'image/webp'],
      deviceSizes: [640, 1080, 1920],
    },
    typedRoutes: true,
  };

export default config;
