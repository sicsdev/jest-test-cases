import {render, screen} from "@testing-library/react";
import Stepper from "../components/Stepper";
import  data  from '../data/stepper.json';

const handleNext = () => {
    return 1;
  }

test("stepper test 1", ()=> {
    render(<Stepper 
    data={data.value.data1}
    />)
    let val = screen.getByTestId("heading-test").innerHTML;  
    expect(val).toBe(data.value.data1.heading);
    let subHead = screen.getByTestId("subHead-test").innerHTML;
    expect(subHead).toBe("The simple way to sell, manage, and get paid for your Instagram, TikTok, and YouTube brand deals");
    let placeholder = screen.getByPlaceholderText(data.value.data1.placeholder).getAttribute("placeholder");
    console.log("placeholder: ",placeholder);
    expect(placeholder).toBe("Username");
    let value = screen.getByPlaceholderText(data.value.data1.placeholder).getAttribute("value");
    console.log("value :", value);
    expect(value).toBe('');
})

test("stepper test 2", ()=> {
    render(<Stepper 
    data={data.value.data2}
    next={handleNext}
    />)
    let val = screen.getByTestId("heading-test").innerHTML;  
    console.log("heading :",val)
    expect(val).toBe(data.value.data2.heading)
    let subHead = screen.getByTestId("subHead-test").innerHTML;
    expect(subHead).toBe("");
    let placeholder = screen.getByPlaceholderText(data.value.data2.placeholder).getAttribute("placeholder");
    console.log("placeholder: ",placeholder)
    expect(placeholder).toBe("Full Name")
    let placeholder2 = screen.getByPlaceholderText(data.value.data2.placeholder2).getAttribute("placeholder");
    console.log("placeholder2: ",placeholder2)
    expect(placeholder2).toBe("Email")
    let placeholder3 = screen.getByPlaceholderText(data.value.data2.placeholder3).getAttribute("placeholder");
    console.log("placeholder3: ",placeholder3)
    expect(placeholder3).toBe("Password")
    let next = screen.getByTestId("next-test").innerHTML
    console.log("next : ", next)
    expect(next).toBe("Next")
})

test("stepper test 3", ()=> {
    render(<Stepper 
    data={data.value.data3}
    />)
    let val = screen.getByTestId("heading-test").innerHTML;  
    console.log("heading :",val)
    expect(val).toBe(data.value.data3.heading)
    let subHead = screen.getByTestId("subHead-test").innerHTML;
    expect(subHead).toBe("We sent an email to rohit12345@yopmail.com. Check your inbox and enter the 6-digit code to verify your email.");
    let placeholder = screen.getByPlaceholderText(data.value.data3.placeholder).getAttribute("placeholder");
    console.log("placeholder: ",placeholder);
    expect(placeholder).toBe("6-Digit Code");
})