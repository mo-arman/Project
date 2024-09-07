import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render header component with a login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>

);

const loginButton = screen.getByRole("button",{name:"Login"});
// const loginButton = screen.getByText("Login");

//Assertion

expect(loginButton).toBeInTheDocument();
});
it("should render Header component with a Cart Item",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>

);

const cartItems = screen.getByText(/Cart/);
// const loginButton = screen.getByText("Login");

//Assertion

expect(cartItems).toBeInTheDocument();
});
it("should render Header component with a Cart Item 0",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>

);

const cartItems = screen.getByText("Cart - (0 items)");
// const loginButton = screen.getByText("Login");

//Assertion

expect(cartItems).toBeInTheDocument();
});
it("should change Login Button To Logout onClick ",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>

);
const logginButton = screen.getByRole("button",{name:"Login"});

fireEvent.click(logginButton);

// const cartItems = screen.getByText(/Cart/);
const logoutButton = screen.getByRole("button",{name:"Logout"});

//Assertion

expect(logoutButton).toBeInTheDocument();
});