const { pathsToModuleNameMapper } = require("ts-jest");

const {
  compilerOptions: { paths },
} = require("./tsconfig.json");

const config = {
  moduleDirectories: ["<rootDir>", "<rootDir>/src", "node_modules"],
  moduleNameMapper: pathsToModuleNameMapper(paths, { useESM: true }),
  setupFiles: ["<rootDir>/test/setEnvVars.cjs"],
  testEnvironment: "node",
  testRegex: "(\\.|/)(test|spec)\\.m?[tj]s$",
  transform: {
    "^.+\\.m?[tj]s$": ["ts-jest", { useESM: true, compiler: "ts-patch/compiler" }],
  },
  extensionsToTreatAsEsm: [".ts"],
};

module.exports = config;
