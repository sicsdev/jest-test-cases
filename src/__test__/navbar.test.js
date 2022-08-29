import { cleanup, render,screen, waitFor, fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar';

test("Icon test", ()=>{
    render(<Navbar/>)
    let val = screen.getByTestId("logo_test").getAttribute("src");
    expect(val).toBe("/assets/logo.svg");
})

test("menu-item-test",()=>{
    render(<Navbar/>)
    let val = screen.getByTestId("menu-item-test")
    expect(val.innerHTML).toBe("<li>Explore</li><li>How It Works</li><li>Login</li><li>Join as Influencer</li>");
})
