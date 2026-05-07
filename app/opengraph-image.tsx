import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background:
            "linear-gradient(135deg, rgb(5,8,15) 0%, rgb(11,18,32) 60%, rgb(22,33,54) 100%)",
          color: "rgb(226,232,240)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.85 }}>VP Global Co., Ltd</div>
        <div
          style={{
            marginTop: 18,
            fontSize: 58,
            fontWeight: 700,
            lineHeight: 1.15,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>B2B Manufacturing</span>
          <span>Capabilities in Vietnam</span>
        </div>
      </div>
    ),
    size,
  );
}

