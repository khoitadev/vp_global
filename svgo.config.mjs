// Conservative SVGO config for /public/logo.svg.
// VTracer output uses 6-decimal precision; reducing to 2 decimals shrinks
// dramatically (sub-pixel granularity) while preserving visual fidelity.
export default {
  multipass: true,
  floatPrecision: 2,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
          cleanupIds: false,
          mergePaths: false,
        },
      },
    },
    "removeXMLNS",
    {
      name: "addAttributesToSVGElement",
      params: {
        attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
      },
    },
  ],
};
