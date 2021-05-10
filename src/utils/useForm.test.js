import useForm from "./useForm";
import { renderHook, act } from "@testing-library/react-hooks";
import dummyValidation from "../validations/dummyValidations";

describe("useForm hook testing", () => {
  test("should change the value", () => {
    const { result } = renderHook(() =>
      useForm({ decrementBySeconds: 1 }, () => {}, dummyValidation)
    );

    act(() => {
      result.current.handleChanges({
        target: { value: 10, name: "decrementBySeconds" },
      });
    });

    expect(result.current.values.decrementBySeconds).toBe(10);
  });

  test("should send an error", () => {
    const { result } = renderHook(() =>
      useForm({ decrementBySeconds: 1 }, () => {}, dummyValidation)
    );
    act(() => {
      result.current.handleChanges({
        target: { value: 0, name: "decrementBySeconds" },
      });
    });
    act(() => {
      result.current.submitForm();
    });
    expect(result.current.errors.decrementBySeconds).toBe(
      "This field is required"
    );
  });
});
