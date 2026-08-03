import { ImageResponse } from "next/og";

/** Favicon: il "pianeta" del wordmark su fondo cosmic. */
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#070912",
          borderRadius: 12,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #3b5bff, #ff5a4d 55%, #ffc23d)",
            display: "flex",
          }}
        />
      </div>
    ),
    size
  );
}
