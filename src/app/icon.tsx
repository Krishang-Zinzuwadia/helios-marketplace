import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f4f4f1",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            border: "2px solid #090909",
            borderRadius: "50%",
            display: "flex",
            height: 42,
            justifyContent: "center",
            position: "relative",
            width: 42,
          }}
        >
          <div
            style={{
              background: "#090909",
              height: 2,
              position: "absolute",
              width: 50,
            }}
          />
          <div
            style={{
              background: "#090909",
              height: 50,
              position: "absolute",
              width: 2,
            }}
          />
          <div
            style={{
              background: "#090909",
              borderRadius: "50%",
              display: "flex",
              height: 8,
              width: 8,
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}

