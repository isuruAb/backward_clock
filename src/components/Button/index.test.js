import { render } from "@testing-library/react";
import ActionButton from "./index";

describe("ActionButton", () => {
  test("is truthy", () => {
    expect(ActionButton).toBeTruthy();
  });

  test("renders ActionButton component and should include button tag", () => {
    const { container } = render(
      <ActionButton text="test" onClick={() => {}} />
    );
    const buttonTag = container.getElementsByTagName("BUTTON")[0];
    expect(buttonTag).toBeInTheDocument();
  });
});
