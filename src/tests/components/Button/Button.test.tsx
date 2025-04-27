import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../../components/Button/Button";

describe("Button", () => {

    test("debe renderizar un botón con el label correcto", () => {
        render(<Button label="Click me" onClick={() => {}} />);
        expect(screen.getByText("Click me")).toBeInTheDocument();
      });
      
      test("debe disparar el evento onClick cuando se hace click", () => {
        const mockFn = jest.fn();
        render(<Button label="Click me" onClick={mockFn} />);
        fireEvent.click(screen.getByText("Click me"));
        expect(mockFn).toHaveBeenCalled();
      });

})