import { useState } from 'react';
import './css/App.css';
import ContentPanel from './ContentPanel';
import Menu from './Menu';

function App() {

  const menuOption = ["League", "Players", "Heroes"];
  const [currentPage, setCurrentPage] = useState(menuOption[0]);

  function goToPage(targetPage){
    alert(targetPage + " Pressed");
    // Data is wired through here
    // this may not be the best place to have this kind of function
    // TODO: learn more about useState to change currentPage value with the 
    //setCurrentPage(targetPage);
  }

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
