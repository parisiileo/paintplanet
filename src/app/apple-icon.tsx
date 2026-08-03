import { ImageResponse } from "next/og";

/** Icona per "Aggiungi a schermata Home" su iOS: nessuna trasparenza, bordi pieni. */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
        }}
      >
        <div
          style={{
            width: 116,
            height: 116,
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
