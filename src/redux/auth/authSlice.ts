import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    isAuthenticated: boolean;
    // user: { id: string; name: string } | null;
    user: string | null;
    password: string | null;
    token: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    password: null,
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<string>) => {
            state.user = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            // Assuming password is stored in a secure way, not directly in state
            // This is just a placeholder for the sake of example
            state.token = action.payload;
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            state.isAuthenticated = true; // Set authenticated state to true when token is set
            localStorage.setItem('token', action.payload); // Store token in local storage
        },
        login(state, action: PayloadAction<{ user: string; token: string }>) {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            localStorage.removeItem('token'); // Remove token from local storage

        },
    },
});

export const { setPassword, setToken, setUser, login, logout } = authSlice.actions;
export default authSlice.reducer;