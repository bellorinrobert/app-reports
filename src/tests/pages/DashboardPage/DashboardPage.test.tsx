import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import DashboardPage from "../../../pages/DashboardPage/DashboardPage";
import { logout } from "../../../redux/auth/authSlice";

jest.mock("../../../redux/auth/authSlice", () => ({
    logout: jest.fn(),
}));

const mockStore = configureStore([]);

describe("DashboardPage", () => {
    let store: any;

    beforeEach(() => {
        store = mockStore({
            auth: {
                isAuthenticated: true,
                user: "Test User",
            },
        });
        store.dispatch = jest.fn();
    });

    it("renders the dashboard page with user information", () => {
        render(
            <Provider store={store}>
                <DashboardPage />
            </Provider>
        );

        expect(screen.getByText("Bienvenido a tu Dashboard")).toBeInTheDocument();
        expect(screen.getByText("¡Hola, Test User!")).toBeInTheDocument();
        expect(screen.getByText("Cerrar Sesión")).toBeInTheDocument();
    });

    it("calls logout action when 'Cerrar Sesión' button is clicked", () => {
        render(
            <Provider store={store}>
                <DashboardPage />
            </Provider>
        );

        const logoutButton = screen.getByText("Cerrar Sesión");
        fireEvent.click(logoutButton);

        expect(store.dispatch).toHaveBeenCalledWith(logout());
    });

    it("shows loading message when user is not authenticated", () => {
        store = mockStore({
            auth: {
                isAuthenticated: false,
                user: null,
            },
        });

        render(
            <Provider store={store}>
                <DashboardPage />
            </Provider>
        );

        expect(screen.getByText("Cargando o redirigiendo...")).toBeInTheDocument();
    });

    it("does not render user information if user is not available", () => {
        store = mockStore({
            auth: {
                isAuthenticated: true,
                user: null,
            },
        });

        render(
            <Provider store={store}>
                <DashboardPage />
            </Provider>
        );

        expect(screen.queryByText("¡Hola,")).not.toBeInTheDocument();
    });
});