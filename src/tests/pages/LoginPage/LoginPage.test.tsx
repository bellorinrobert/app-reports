import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import LoginPage from "../../../pages/LoginPage/LoginPage";

const mockStore = configureStore([]);
const mockOnLogin = jest.fn();

describe("LoginPage", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      auth: {
        user: null,
      },
    });
  });

  it("renders the LoginPage component", () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );

    expect(screen.getByText("Iniciar Sesión")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Contraseña")).toBeInTheDocument();
    expect(screen.getByText("Iniciar sesión")).toBeInTheDocument();
  });

  it("disables the login button when email or password is empty", () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );

    const loginButton = screen.getByText("Iniciar sesión");
    expect(loginButton).toBeDisabled();
  });

  it("enables the login button when email and password are filled", () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );

    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Contraseña");
    const loginButton = screen.getByText("Iniciar sesión");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(loginButton).not.toBeDisabled();
  });

  it("calls handleLogin and dispatches setUser when login button is clicked", () => {
    render(
      <Provider store={store}>
        <LoginPage onLogin={mockOnLogin} />
      </Provider>
    );

    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Contraseña");
    const loginButton = screen.getByText("Iniciar sesión");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(loginButton);

    const actions = store.getActions();
    expect(actions).toContainEqual({ type: "auth/setUser", payload: "test@example.com" });
    expect(mockOnLogin).toHaveBeenCalled();
  });
});