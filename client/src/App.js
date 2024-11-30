import { BrowserRouter, Routes, Route} from "react-router-dom";
import { ConfigProvider } from 'antd';
import Home from "./pages/home/Home"

const getCSSVariableValue = (variableName) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
};

function App() {

  // Obtener las variables CSS
  const myTheme = {
    token: {
      colorPrimary: getCSSVariableValue('--color-main'),
      colorSuccess: getCSSVariableValue('--color-success'),
      colorError: getCSSVariableValue('--color-danger'),
      // Añadir más variables si es necesario
    }
  };

  return (
    <>
      <ConfigProvider theme={myTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </>
  );
}

export default App;
