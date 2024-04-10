import { render, screen } from "@testing-library/react";
import * as PubSubService from "services/PubSub_SR";
import Receiver from "../component/Receiver.tsx";
import "@testing-library/jest-dom";

// Mock the useSub hook
jest.mock("services/PubSub_SR", () => ({
  useSub: jest.fn(),
}));

describe("Receiver component", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mock calls before each test
  });

  test("calls useSub with correct arguments", () => {
    const snap = render(<Receiver />);

    expect(PubSubService.useSub).toHaveBeenCalled();
    // snap shot
    expect(snap).toMatchSnapshot();
    expect(screen.getByText("Receiver")).toBeInTheDocument();
  });

  // Add more test cases as needed
});
