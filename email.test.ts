import { expect, test } from "vitest";
import { Email } from "./index.ts";

const EMAIL = "user@domain.tld";

test("should accept another email as value", () => {
  const email = new Email(new Email(EMAIL));
  expect(email.toString()).toEqual(EMAIL);
});

test("should ensure the email is valid", () => {
  expect(() => new Email("invalid")).toThrow();
});

test("should be JSON.stringify compatibly", () => {
  let email = new Email(EMAIL);
  expect(JSON.stringify({ email })).toEqual(JSON.stringify({ email: EMAIL }));
});

test("toString should return the string value", () => {
  let email = new Email(EMAIL);
  expect(email.toString()).toEqual(EMAIL);
});

test(".username should return only the username part", () => {
  let email = new Email(EMAIL);
  expect(email.username).toEqual("user");
});

test(".hostname should return only the email part", () => {
  let email = new Email(EMAIL);
  expect(email.hostname).toEqual("domain.tld");
});

test(".tld should return only the tld part of the domain", () => {
  let email = new Email(EMAIL);
  expect(email.tld).toEqual("tld");
});

test(".username should let me change the username part", () => {
  let email = new Email(EMAIL);
  email.username = "new-user";
  expect(email.toString()).toEqual("new-user@domain.tld");
});

test(".hostname should let me change the domain part", () => {
  let email = new Email(EMAIL);
  email.hostname = "new-domain.tld";
  expect(email.toString()).toEqual("user@new-domain.tld");
});

test(".tld should let me change the tld part", () => {
  let email = new Email(EMAIL);
  email.tld = "new-tld";
  expect(email.toString()).toEqual("user@domain.new-tld");
});
