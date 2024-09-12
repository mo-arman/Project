import {render, screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us page Test Cases",()=>{
    beforeAll(()=>{

    });
    beforeEach(()=>{
        
    });
    afterAll(()=>{
        
    });
    afterEach(()=>{
        
    })
    it("Should load contact us component",()=>{

        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
       // Assertion
       expect(heading).toBeInTheDocument();
    });
    it("Should load Button inside Contact Us component",()=>{
    
        render(<Contact/>);
    
        // const button = screen.getByRole("button");
        // const button = screen.getByText("Random");
        const button = screen.getByRole("button");
    
       // Assertion
       expect(button).toBeInTheDocument();
    });
    it("Should load input name inside Contact Us component",()=>{
    
        render(<Contact/>);
    
        // const button = screen.getByRole("button");
        const inputName = screen.getByPlaceholderText("name");
    
       // Assertion
       expect(inputName).toBeInTheDocument();
    });
    it("Should load2 input name inside Contact Us component",()=>{
    
        render(<Contact/>);
    
        // const button = screen.getByRole("button");
        const inputBoxes = screen.getAllByRole("textbox");
        console.log(inputBoxes.length);
       // Assertion
       expect(inputBoxes.length).not.toBe(3);
       
    })
});
