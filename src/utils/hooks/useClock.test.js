import useClock from "./useClock";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useClock hook testing", () => {
  const currentTime = new Date(1620621159734);

  test("set initial time correctly", () => {
    const { result } = renderHook(() => useClock(1, currentTime));

    expect(result.current.seconds).toBe(39);
    expect(result.current.minutes).toBe(32);
    expect(result.current.hours).toBe(12);
  });

  test("reset button change the value to the current time", () => {
    const { result } = renderHook(() => useClock(1, currentTime));

    act(() => {
      result.current.handleReset();
    });
    expect(result.current.seconds).toBe(39);
    expect(result.current.minutes).toBe(32);
    expect(result.current.hours).toBe(12);
  });

  test("seconds ticks backward when decrementing value is 1 second", () => {
    const { result } = renderHook(() => useClock(1, currentTime));

    act(() => {
      result.current.clockTick();
    });
    expect(result.current.seconds).toBe(38);
  });

  test("minutes ticks backward when decrementing value is 60 second", () => {
    const { result } = renderHook(() => useClock(60, currentTime));

    act(() => {
      result.current.clockTick();
    });
    expect(result.current.minutes).toBe(31);
  });

  test("hours ticks backward when decrementing value is 3600 second", () => {
    const { result } = renderHook(() => useClock(3600, currentTime));

    act(() => {
      result.current.clockTick();
    });
    expect(result.current.hours).toBe(11);
  });
});
