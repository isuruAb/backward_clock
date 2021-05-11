import { render, screen } from "@testing-library/react";
import Time from "./index";

describe("Time", () => {
  test("is truthy", () => {
    expect(Time).toBeTruthy();
  });

  test("render the hours value", () => {
    render(<Time hours={21} />);
    const hoursTicker = screen.getByText(21);
    expect(hoursTicker).toBeInTheDocument();
  });

  test("render the minutes value", () => {
    render(<Time mins={22} />);
    const minutesTicker = screen.getByText(22);
    expect(minutesTicker).toBeInTheDocument();
  });

  test("render the seconds value", () => {
    render(<Time seconds={20} />);
    const secondsTicker = screen.getByText(20);
    expect(secondsTicker).toBeInTheDocument();
  });
});
