import "./App.css";
import Footer from "./components/Footer";
import {Routes} from "react-router-dom";
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ maxWidth: "lg", mx: "auto" }}>
        <Routes>
        </Routes>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
