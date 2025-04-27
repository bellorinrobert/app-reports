import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { store } from './redux/store';
import { theme } from './themes/Basic';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    );
    expect(container).toBeInTheDocument();
  });
  


  
});




