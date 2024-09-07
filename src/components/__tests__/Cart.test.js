import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(() => {
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  });
});
it("Should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );

  const accordionsHeader = screen.getByText("Recommended (20)");

  fireEvent.click(accordionsHeader);

  screen.getAllByTestId("items");

  expect(screen.getAllByTestId("items").length).toBe(20);
});
