import { render } from "@testing-library/react";
import Header from "./index";

describe("Header", () => {
  test("is truthy", () => {
    expect(Header).toBeTruthy();
  });

  test("renders Header component and should include h2 tag", () => {
    const { container } = render(<Header />);
    const h2Tag = container.getElementsByTagName("H2")[0];
    expect(h2Tag).toBeInTheDocument();
  });
});
