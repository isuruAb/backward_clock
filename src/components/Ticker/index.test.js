import { render, screen } from "@testing-library/react";
import Ticker from "./index";

describe("Ticker", () => {
  test("is truthy", () => {
    expect(Ticker).toBeTruthy();
  });

  test("renders Ticker component and should include h1 tag", () => {
    const { container } = render(<Ticker />);
    const h1Tag = container.getElementsByTagName("H1")[0];
    expect(h1Tag).toBeInTheDocument();
  });

  test("render the ticker value", () => {
    render(<Ticker value={20} />);
    const tickerElement = screen.getByText(20);
    expect(tickerElement).toBeInTheDocument();
  });
});
