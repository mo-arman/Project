import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCard.json";
import "@testing-library/jest-dom";
it("should render RestaurantCar component with props Data",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>);
    
   const name =  screen.getByText("Chinese Wok");

   expect(name).toBeInTheDocument();
})