
import "./index.css";

import { useTheme } from "./Component/Context/ThemeProvider";
import Apply from "./Component/Apply/Apply";


  function App() {
  const {setTheme,theme} = useTheme()
  return (
    <>
      <div>
      <button onClick={() => setTheme("dark")} className="m-5">dark</button>
      <button onClick={() => setTheme("white")}>light</button>
      </div>
 
        <Apply/>
    
    </>
  );
}

export default App;
