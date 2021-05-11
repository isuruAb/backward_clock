import { render, screen } from "@testing-library/react";
import NotFound from "./index";

describe("NotFound", () => {
  test("is truthy", () => {
    expect(NotFound).toBeTruthy();
  });

  test("renders NotFound component and should include h3 tag", () => {
    const { container } = render(<NotFound />);
    const h3Tag = container.getElementsByTagName("H3")[0];
    expect(h3Tag).toBeInTheDocument();
  });

  test("Not Found text exists", () => {
    render(<NotFound />);
    const notfoundElement = screen.getByText("PAGE NOT FOUND");
    expect(notfoundElement).toBeInTheDocument();
  });
});
