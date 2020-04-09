import React from "react";
import { render, fireEvent, getByText, getByTestId } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test("fail on purpose", () => {
  const { getByText } = render(<App />);
  const nonExistentText = getByText(/First Name*/i);

  expect(nonExistentText).toBeVisible();
})

test("check value in Last Name* input box", () => {
  const { getByLabelText } = render(<ContactForm />);
  const lastNameInputBox = getByLabelText(/Last Name*/i);
  const emailInputBox = getByLabelText(/Email*/i);
  const messageInputBox = getByLabelText(/mess/i)

  expect(lastNameInputBox).toBeVisible();
  expect(emailInputBox).toBeVisible();
  expect(messageInputBox).toBeVisible();
})

test("input boxes add values and check them", () => {
  const { getByLabelText, getByTestId } = render(<ContactForm />);

  const emailValue = getByLabelText(/ema/i)
  fireEvent.change(emailValue, { target: { value: "Hippo"}});
  expect(emailValue.value).toBe("Hippo");

  const lastNameValue = getByLabelText(/Last Name/i);
  fireEvent.change(lastNameValue, { target: { value: "Fernandez"}});
  expect(lastNameValue.value).toBe("Fernandez");

  fireEvent.click(getByTestId(/submit/i));
})
