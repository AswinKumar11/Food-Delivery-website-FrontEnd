import { render,screen } from "@testing-library/react";
import About from "../AboutUs.js";
import "@testing-library/jest-dom";

test('should check weather about us page is rendered', () => {
    render(<About />);

    //query
    const header = screen.getByRole('heading');

    //assertion
    expect(header).toBeInTheDocument();
})