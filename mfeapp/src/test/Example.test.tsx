import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Example from "../component/Example.tsx";

describe("example component", () => {
  test("calls example", () => {
    const snap = render(<Example />);

    expect(screen.getByText("example")).toBeInTheDocument();

    // snap shot
    expect(snap).toMatchSnapshot();
  });
});
