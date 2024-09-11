function env(...names) {
  for (const name of names) {
    const result = process.env[name];
    if (typeof result === "string") return result;
  }
  throw new Error(`Error: missing environment variable: ${names}`);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/polyomino",
        destination: `${env("POLYOMINO_URL")}/polyomino`,
      },
      {
        source: "/polyomino/:path+",
        destination: `${env("POLYOMINO_URL")}/polyomino/:path+`,
      },
      {
        source: "/color",
        destination: `${env("COLOR_URL")}/color`,
      },
      {
        source: "/color/:path+",
        destination: `${env("COLOR_URL")}/color/:path+`,
      },
    ];
  },
};

module.exports = nextConfig;
