import { describe, it, expect } from "vitest";
import {
  loginSchema,
  registerSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  sanitizeInput,
} from "@/validations";

describe("loginSchema", () => {
  it("passes with valid email and password", () => {
    const result = loginSchema.safeParse({
      email: "user@example.com",
      password: "password123",
    });
    expect(result.success).toBe(true);
  });

  it("fails with invalid email", () => {
    const result = loginSchema.safeParse({
      email: "not-an-email",
      password: "password123",
    });
    expect(result.success).toBe(false);
  });

  it("fails with empty password", () => {
    const result = loginSchema.safeParse({
      email: "user@example.com",
      password: "",
    });
    expect(result.success).toBe(false);
  });

  it("lowercases email", () => {
    const result = loginSchema.safeParse({
      email: "User@Example.COM",
      password: "password123",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.email).toBe("user@example.com");
    }
  });
});

describe("registerSchema", () => {
  const validData = {
    name: "John Doe",
    email: "john@example.com",
    password: "Password1!",
    confirmPassword: "Password1!",
  };

  it("passes with valid data", () => {
    expect(registerSchema.safeParse(validData).success).toBe(true);
  });

  it("fails when passwords do not match", () => {
    const result = registerSchema.safeParse({
      ...validData,
      confirmPassword: "Different1!",
    });
    expect(result.success).toBe(false);
  });

  it("fails when password missing uppercase", () => {
    const result = registerSchema.safeParse({
      ...validData,
      password: "password1!",
      confirmPassword: "password1!",
    });
    expect(result.success).toBe(false);
  });

  it("fails when password missing special character", () => {
    const result = registerSchema.safeParse({
      ...validData,
      password: "Password1",
      confirmPassword: "Password1",
    });
    expect(result.success).toBe(false);
  });

  it("fails when name too short", () => {
    const result = registerSchema.safeParse({ ...validData, name: "A" });
    expect(result.success).toBe(false);
  });
});

describe("forgotPasswordSchema", () => {
  it("passes with valid email", () => {
    expect(
      forgotPasswordSchema.safeParse({ email: "user@example.com" }).success
    ).toBe(true);
  });

  it("fails with invalid email", () => {
    expect(
      forgotPasswordSchema.safeParse({ email: "bad" }).success
    ).toBe(false);
  });
});

describe("resetPasswordSchema", () => {
  it("passes with matching valid passwords", () => {
    const result = resetPasswordSchema.safeParse({
      password: "NewPass1!",
      confirmPassword: "NewPass1!",
    });
    expect(result.success).toBe(true);
  });

  it("fails when passwords do not match", () => {
    const result = resetPasswordSchema.safeParse({
      password: "NewPass1!",
      confirmPassword: "OldPass1!",
    });
    expect(result.success).toBe(false);
  });
});

describe("sanitizeInput", () => {
  it("strips HTML tags", () => {
    expect(sanitizeInput("<script>alert('xss')</script>")).toBe(
      "alert('xss')"
    );
  });

  it("trims whitespace", () => {
    expect(sanitizeInput("  hello  ")).toBe("hello");
  });

  it("handles nested tags", () => {
    expect(sanitizeInput("<div><b>text</b></div>")).toBe("text");
  });
});
