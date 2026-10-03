import { describe, expect, test } from "vitest";

import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns the key from a valid ApiKey header", () => {
    expect(getAPIKey({ authorization: "ApiKey secret-key" })).toBe(
      "secret-key",
    );
  });

  test("returns null when the authorization header is missing", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("returns null for an unsupported authorization scheme", () => {
    expect(getAPIKey({ authorization: "Bearer secret-key" })).toBeNull();
  });

  test("returns null when the key is missing", () => {
    expect(getAPIKey({ authorization: "ApiKey" })).toBeNull();
  });
});
