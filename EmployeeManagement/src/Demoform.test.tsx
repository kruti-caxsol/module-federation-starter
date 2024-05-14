/**
 * @jest-environment jsdom
 */
// import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import DemoForms from "./Components/DemoForm";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("DemoForms Component", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("renders the form with initial values", async () => {
    render(<DemoForms />);

    // Check if all form fields are rendered with their initial values
    expect(screen.getByLabelText(/Username/i)).toHaveValue("JohnDoe");
    expect(screen.getByLabelText(/Password/i)).toHaveValue("examplepassword");
    expect(screen.getByLabelText(/Email/i)).toHaveValue("example@example.com");
    expect(screen.getByLabelText(/Phone Number/i)).toHaveValue("1234567890");

    const dropdown = await waitFor(() => screen.getByLabelText("Country"));
    expect(dropdown).toBeInTheDocument();
    expect(dropdown.textContent).toBe("USA");

    expect(screen.getByLabelText(/State/i)).toHaveValue("California");
    expect(screen.getByTestId("switch-component")).toHaveClass("Mui-checked");
    expect(screen.getByLabelText(/Date/i)).toHaveValue("2000-12-01");
    const sliderComponent = screen.getByTestId('slider-component');
    expect(sliderComponent).toBeInTheDocument();
    const sliderInput = sliderComponent.querySelector('input');
    expect(sliderInput).not.toBeNull();
    expect(sliderInput?.value).toBe('5');
    
    expect(screen.getByLabelText(/Autocomplete/i)).toHaveValue("Option 1");

    const ratingInput = screen.getByTestId("rating-input"); 
    expect(ratingInput).toBeInTheDocument();

    const ratingIcons = ratingInput.querySelectorAll(".MuiRating-iconFilled");
    expect(ratingIcons.length).toBe(3);

    const emptyRatingIcons = ratingInput.querySelectorAll(
      ".MuiRating-iconEmpty",
    );
    expect(emptyRatingIcons.length).toBe(2);

    expect(screen.getByPlaceholderText(/Input/i)).toHaveValue(
      "Some input text",
    );

    expect(screen.getByText(/Gender:/i)).toBeInTheDocument();
    const maleRadio = screen.getByLabelText("Male");
    const femaleRadio = screen.getByLabelText("Female");
    expect(maleRadio).toBeChecked();
    expect(femaleRadio).not.toBeChecked();

    const checkboxLabel = screen.getByText("CheckBox");
    expect(checkboxLabel).toBeInTheDocument();

    const checkbox = screen.getByTestId("termsAndConditions-checkbox");
    expect(checkbox).toBeInTheDocument();

    expect(checkbox).not.toBeChecked();

  });

  it("submits the form with valid data", async () => {
    render(<DemoForms />);

    fireEvent.change(screen.getByLabelText(/Username/i), {
      target: { value: "NewUsername" },
    });
    expect(screen.getByLabelText(/Username/i)).toHaveValue("NewUsername");
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "newpassword" },
    });
    expect(screen.getByLabelText(/Password/i)).toHaveValue("newpassword");
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "newemail@example.com" },
    });
    expect(screen.getByLabelText(/Email/i)).toHaveValue("newemail@example.com");
    fireEvent.change(screen.getByLabelText(/Phone Number/i), {
      target: { value: "9876543210" },
    });
    expect(screen.getByLabelText(/Phone Number/i)).toHaveValue("9876543210");

    const dropdown = await screen.findByLabelText("Country");
    await userEvent.click(dropdown);

    const optionToSelect = await screen.findByText("Canada");
    await userEvent.click(optionToSelect);

    expect(screen.getByText("Canada")).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/State/i), {
      target: { value: "newstate" },
    });
    expect(screen.getByLabelText(/State/i)).toHaveValue("newstate");
  
    fireEvent.change(screen.getByLabelText(/Date/i), {
        target: { value: "2024-05-11" }, // Change date to today's date
      });
      expect(screen.getByLabelText(/Date/i)).toHaveValue("2024-05-11");

    const sliderInput = screen.getByTestId('slider-component').querySelector('input')!;
fireEvent.change(sliderInput as Element, { target: { value: '7' } });
expect((sliderInput as HTMLInputElement).value).toBe('7');
   

    const autocompleteInput = screen.getByLabelText(/Autocomplete/i);
    await userEvent.click(autocompleteInput);
    
    const option = await screen.findByText("Option 2");
    await userEvent.type(autocompleteInput, "Option 2"); // Simulate typing the option
    await userEvent.click(option);

    fireEvent.change(screen.getByTestId("switch-component"), {
      target: { checked: false },
    });
    expect(screen.getByTestId("switch-component")).not.toBeChecked();
    fireEvent.change(screen.getByPlaceholderText(/Input/i), {
      target: { value: "input text changed" },
    });
    expect(screen.getByPlaceholderText(/Input/i)).toHaveValue(
      "input text changed",
    );

    const ratingInput = screen.getByTestId("rating-input");
    expect(ratingInput).toBeInTheDocument();

    const ratingIcons = ratingInput.querySelectorAll(".MuiRating-icon");
    for (let i = 0; i < 4; i++) {
      fireEvent.click(ratingIcons[i]);
    }

    const updatedRatingIcons = ratingInput.querySelectorAll(
      ".MuiRating-iconFilled",
    );
    expect(updatedRatingIcons.length).toBe(4);

    const updatedEmptyRatingIcons = ratingInput.querySelectorAll(
      ".MuiRating-iconEmpty",
    );
    expect(updatedEmptyRatingIcons.length).toBe(1);

    const femaleRadio = screen.getByLabelText("Female");
    fireEvent.click(femaleRadio);
    expect(femaleRadio).toBeChecked();
    const maleRadio = screen.getByLabelText("Male");
    expect(maleRadio).not.toBeChecked();

    const checkbox = screen.getByTestId("termsAndConditions-checkbox");
    expect(checkbox).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("termsAndConditions-checkbox"), {
      target: { checked: true },
    });

    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));
  });

  it("clears all fields after successful form submission and display error message", async () => {
    render(<DemoForms />);

    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    await waitFor(() => {
      expect(screen.getByLabelText(/Username/i)).toHaveValue("");
      expect(screen.getByLabelText(/Password/i)).toHaveValue("");
      expect(screen.getByLabelText(/Email/i)).toHaveValue("");
      expect(screen.getByLabelText(/Phone Number/i)).toHaveValue("");
      expect(screen.getByLabelText(/State/i)).toHaveValue("");
      expect(screen.getByLabelText(/Autocomplete/i)).toHaveValue("");
      
        expect(screen.getByLabelText(/Date/i)).toHaveValue("");
      
      expect(screen.getByTestId("switch-component")).not.toBeChecked();
      expect(screen.getByPlaceholderText(/Input/i)).toHaveValue("");
      expect(screen.getByTestId("rating-input")).toBeInTheDocument();
      const ratingInputAfterSubmission = screen.getByTestId("rating-input");
      const emptyRatingIconsAfterSubmission =
        ratingInputAfterSubmission.querySelectorAll(".MuiRating-iconEmpty");
      expect(emptyRatingIconsAfterSubmission.length).toBe(5);
      expect(screen.getByLabelText("Female")).not.toBeChecked();
      expect(screen.getByLabelText("Male")).not.toBeChecked();
      expect(
        screen.getByTestId("termsAndConditions-checkbox"),
      ).not.toBeChecked();

      const sliderInput = screen.getByTestId('slider-component').querySelector('input');
      expect(sliderInput).toHaveValue("0"); 
    });

    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    await waitFor(() => {
      expect(screen.getByText("Username is required")).toBeInTheDocument();
      expect(screen.getByText("Password is required")).toBeInTheDocument();
      expect(screen.getByText("Email is required")).toBeInTheDocument();
      expect(screen.getByText("Phone number is required")).toBeInTheDocument();
      expect(screen.getByText("Country is required")).toBeInTheDocument();
      expect(screen.getByText("State is required")).toBeInTheDocument();
      expect(screen.getByText("Slider value is required")).toBeInTheDocument();
      expect(screen.getByText("Date is required")).toBeInTheDocument();
      expect(screen.getByText("Autocomplete is required")).toBeInTheDocument();
      expect(screen.getByText("Rating is required")).toBeInTheDocument();
      expect(screen.getByText("Input is required")).toBeInTheDocument();
      expect(screen.getByText("Gender is required")).toBeInTheDocument();
    });
  });
});
