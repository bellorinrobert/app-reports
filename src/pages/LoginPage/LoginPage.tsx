import React, { useState } from "react";
import Button from "../../components/Button/Button";
import { MuiInput } from "../../components/Input/Input";
import { Box, Typography } from "@mui/material";
import { styles } from "./LoginPageStyle";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setToken, setUser } from "../../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";
interface LoginPageProps {
    onLogin?: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
    const [email, setEmail] = useState(""), [password, setPasswordLogin] = useState("")
    const isButtonDisabled = email === "" || password === "";
    
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.user);
    const navigate = useNavigate();
    const handleLogin = () => {
        dispatch(setUser(email));
        dispatch(setToken(password));
        navigate("/dashboard");
        console.log(user); 
        console.warn(password); 
        if (onLogin) {
            onLogin();
        }
    };

    return (

        <Box sx={styles}>
            <Typography color="primary" variant="h5" component="h2" gutterBottom>
                Iniciar Sesión
            </Typography>
            <MuiInput type="email" placeholder="Email"
                value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <MuiInput type="password" placeholder="Contraseña"
                value={password} onChange={(e) => setPasswordLogin(e.target.value)}
            />
            <Button label="Iniciar sesión" onClick={handleLogin}
                disabled={isButtonDisabled}
            />

        </Box>

    );
};

export default LoginPage;



