import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
  prettyDOM,
} from "@testing-library/react";
import ReservationList from "./reservationList";
import { Provider } from "react-redux";
import { store } from "../app/store";

describe("reservationList", () => {
  function renderComponent(reduxStore = store, props = {}) {
    return render(
      <Provider store={store}>
        <ReservationList {...props} />
      </Provider>
    );
  }

  it("should render without failure", () => {
    renderComponent();
    expect(screen.getByTestId("username")).toBeDefined();
    expect(screen.getByText("Add"));
  });

  it("should add the new reservation", () => {
     renderComponent();
    fireEvent.change(screen.getByTestId("username"), {
      target: { value: "Ryan Mitchel" },
    });
    fireEvent.click(screen.getByText(/Add/));
    expect(screen.getByRole("reserved_0")).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Ryan Mitchel/));
  });

  it("should remove from reservation list after adding to dining", async () => {
     renderComponent();
    fireEvent.change(screen.getByTestId("username"), { target: { value: "John" } });
    fireEvent.click(screen.getByText(/Add/));
    expect(screen.getByText(/John/)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/John/));
    expect(screen.queryByText(/John/)).toBeNull();
  });
});
