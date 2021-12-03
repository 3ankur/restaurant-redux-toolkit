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
    const { getByTestId } = renderComponent();
    expect(getByTestId("username")).toBeDefined();
    expect(screen.getByText(/Add/));
  });

  it("should add the new reservation", () => {
    const { getByTestId, getByRole, getByText } = renderComponent();
    fireEvent.change(getByTestId("username"), {
      target: { value: "Ryan Mitchel" },
    });
    fireEvent.click(screen.getByText(/Add/));
    expect(getByRole(/reserved_0/)).toBeInTheDocument();
    fireEvent.click(getByText(/Ryan Mitchel/));
  });

  it("should remove from reservation list after adding to dining", async () => {
    const { getByTestId, getByRole, getByText } = renderComponent();
    fireEvent.change(getByTestId("username"), { target: { value: "John" } });
    fireEvent.click(screen.getByText(/Add/));
    expect(getByText(/John/)).toBeInTheDocument();

    fireEvent.click(getByText(/John/));
    expect(screen.queryByText(/John/)).toBeNull();
  });
});
