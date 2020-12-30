import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import ProfileStatus from "./ProfileStatus";

describe("Profile: ProfileStatus component", () => {
  beforeEach(() => {});

  test("should display ---- if status doesn't exist", () => {
    render(<ProfileStatus />);
    screen.debug();
    expect(screen.getByText("-----")).toBeInTheDocument();
  });

  it("should display state from the props", () => {
    render(<ProfileStatus status="status" />);
    screen.debug();
    expect(screen.getByText("status")).toBeInTheDocument();
  });

  test("should display span if editMode = false", () => {
    render(<ProfileStatus status="status" />);
    screen.debug();
    expect(screen.getByRole("span")).toBeInTheDocument();
  });

  test("should display input if editMode = true", () => {
    render(<ProfileStatus status="status" />);
    screen.debug();
    fireEvent.doubleClick(screen.getByRole("span"));
    screen.debug();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
