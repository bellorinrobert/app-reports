import React, { useEffect } from 'react';

import { Box, Typography, Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../redux/auth/authSlice'; // Ajusta la ruta si es necesario

import { RootState } from '../../redux/store'; // Ajusta la ruta si es necesario
import { useNavigate } from 'react-router-dom';

// Definimos las props para la página del Dashboard (en este caso, no necesita props externas)
interface DashboardPageProps {}

const DashboardPage: React.FC<DashboardPageProps> = () => {
    // Usamos useSelector para obtener el estado de autenticación del store de Redux
    // Accedemos al slice 'auth' y obtenemos las propiedades 'isLoggedIn' y 'user'
    const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

    // Usamos useDispatch para poder disparar acciones de Redux
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Efecto para verificar si el usuario está logueado al cargar la página
    // En una aplicación real, la protección de ruta debería manejar esto,
    // pero este useEffect es un ejemplo de cómo reaccionar al estado de Redux.
    useEffect(() => {
        if (!isAuthenticated) {
            // Si el usuario no está logueado, podrías redirigirlo a la página de login
            // Esto normalmente se haría con el hook useHistory o useNavigate de react-router-dom
            console.log("Usuario no logueado, redirigiendo...");
            // Ejemplo de redirección (requiere react-router-dom):
            
            
        }

        
    }, [isAuthenticated, dispatch]); // Dependencias: se ejecuta cuando isLoggedIn o dispatch cambian

    // Función para manejar el clic en el botón de logout
    const handleLogout = () => {
        // Disparamos la acción de logout de Redux
        dispatch(logout());

        navigate('/'); // Redirigimos al usuario a la página de login después de cerrar sesión

        // Después de disparar la acción, el slice de auth actualizará el estado a isLoggedIn: false
        // La protección de ruta (ProtectedRoute) detectará este cambio y redirigirá al usuario
        
        // a la página de login.
    };

    // Si el usuario no está logueado, podrías mostrar un mensaje de carga o redirigir
    // En este ejemplo simple, si isLoggedIn es false, el useEffect ya manejaría la redirección.
    if (!isAuthenticated) {
        return <Box sx={{ textAlign: 'center', mt: 4 }}><Typography>Cargando o redirigiendo...</Typography></Box>;
    }

    // Si el usuario está logueado, mostramos el contenido del dashboard
    return (
        // Usamos Box para el contenedor principal con estilos de sistema MUI
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 'calc(100vh - 64px)', // Ejemplo: altura mínima (viewport height - altura del header)
                padding: 4,
                textAlign: 'center',
            }}
        >
            {/* Título de bienvenida */}
            <Typography variant="h4" component="h1" gutterBottom>
                Bienvenido a tu Dashboard
            </Typography>

            {/* Mostrar información del usuario si está disponible */}
            {user && (
                <Typography variant="h6" component="p" gutterBottom>
                    ¡Hola, {user}! {/* Muestra el nombre o email del usuario */}
                </Typography>
            )}

            {/* Botón de Logout */}
            <Button
                variant="contained" // Estilo de botón con fondo
                color="secondary" // Color secundario del tema MUI
                onClick={handleLogout} // Manejador del clic
                sx={{ mt: 3 }} // Margen superior usando el sistema de espaciado de MUI
            >
                Cerrar Sesión
            </Button>

        </Box>
    );
};

export default DashboardPage;
