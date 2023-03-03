import { renderHook } from "@testing-library/react";
import { useContext } from "react";
import { describe, it } from "vitest";
import { EditorContext } from "../../shared/EditorContext";

describe("sets editor context", () => {
  it("set initial value", () => {
    const context = renderHook(useContext(EditorContext) as any);
    console.log(context);
  });
});
