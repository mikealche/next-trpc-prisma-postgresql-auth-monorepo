export const isDev = process.env.NODE_ENV === "development";
export const frontendOrigin = isDev
  ? ("http://localhost:3000/" as const)
  : (`COMPLETE ME` as const);
