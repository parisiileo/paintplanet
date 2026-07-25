import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Evita che Next inferisca una root sbagliata (lockfile in ~ dell'utente)
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
