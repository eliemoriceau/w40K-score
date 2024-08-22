const { pathsToModuleNameMapper } = require("ts-jest");

const { paths } = require("./tsconfig.json").compilerOptions;

/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
module.exports = {
  preset: "jest-preset-angular",
  moduleNameMapper: pathsToModuleNameMapper(paths, { prefix: "<rootDir>" }),
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!@vinejs/vine)"],
};
