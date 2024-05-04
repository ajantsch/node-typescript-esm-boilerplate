const { DEMO_ENV } = process.env;

export function demo() {
  if (!DEMO_ENV) {
    throw new Error("DEMO_ENV not set");
  }
  return DEMO_ENV;
}
