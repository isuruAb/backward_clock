import { render } from "@testing-library/react";
import TextField from "./index";

describe("TextField", () => {
  test("is truthy", () => {
    expect(TextField).toBeTruthy();
  });

  test("renders TextField component and should include input tag", () => {
    const { container } = render(<TextField />);
    const inputTag = container.getElementsByTagName("INPUT")[0];
    expect(inputTag).toBeInTheDocument();
  });
});
