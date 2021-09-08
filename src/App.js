import { useState } from 'react';
import ContentPanel from './components/ContentPanel';
import Menu from './components/Menu';

function App() {

  const menuOption = ["League", "Players", "Heroes"];
  const [currentPage, setCurrentPage] = useState(menuOption[0]);

  return (
    <div className="App">
      <Menu 
        menuOption={menuOption} 
        goToPage={setCurrentPage}
      />
      <ContentPanel ContentView={ currentPage /* Placeholder */ }></ContentPanel>
    </div>
  );
}

export default App;
