import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("shuold search Res List for Burger Text Input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  // Assertion

  const cardsBeforeSearch = screen.getAllByTestId("resCard")

  expect(cardsBeforeSearch.length).toBe(8);

  const searchBtn = screen.getByRole("button",{name:"Search"});

  const searchInput = screen.getByTestId("searchInput");

   fireEvent.change(searchInput, {target: {value: "burger"}});
 
   fireEvent.click(searchBtn);

//   // screen should load 4 cards

   const cardAfterSearch = screen.getAllByTestId("resCard");

  expect(cardAfterSearch.length).toBe(1);
});

it("shuold search Res List for Burger Text Input", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(8);

    // const topRatedBtn = screen.getByRole("button",{name:"Top Rated Restaurant"});

    // fireEvent.click(topRatedBtn);

    // const cardsAfterFilter = screen.getAllByTestId("resCard");
    // expect(cardsAfterFilter.length).toBe(7);
  });
