import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

test("button has correct initial color", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to MidnightBlue" });

  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  // click button
  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
  expect(colorButton.textContent).toBe("Change to MediumVioletRed");
});

test("initial conditions", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to MidnightBlue" });

  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();

  // click button
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();

  // click again button
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
});

test("checkbox disables button on first click and enables button on second click", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const button = screen.getByRole("button");

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test("check button color grey when disabled", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const button = screen.getByRole("button");
  fireEvent.click(checkbox);
  expect(button).toHaveStyle("background-color: grey");
  // reenable button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle('background-color: MediumVioletRed')
});

describe("spaces before camel-case capital letters", () => {
  test("works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
