import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider, createTheme } from '@mui/material'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'

//change font
const pokemonTheme = createTheme({
    typography: {
        fontFamily: 'Pixelify Sans, Roboto'
    },
    palette: {
        primary: {
          main: '#ef233c',
        } ,
        secondary: {
          main: '#f5f3f4'
        } ,
        success : {
            main: '#ffa600',
        } 
    }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={pokemonTheme}>
        <Provider store={store}>
            <App />
        </Provider>
    </ThemeProvider>

)
