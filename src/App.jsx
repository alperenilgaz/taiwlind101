
import "./index.css";

import Header from './Component/header/Header'
import { useTheme } from "./Component/Context/ThemeProvider";


  function App() {
  const {setTheme} = useTheme()
  return (
    <>
      <Header/>
      <div>
      <button onClick={() => setTheme("dark")} className="m-5">dark</button>
      <button onClick={() => setTheme("white")}>light</button>
      </div>
      
    
    </>
  );
}

export default App;
