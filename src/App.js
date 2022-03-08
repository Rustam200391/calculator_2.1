import React from "react";
import Calculator from "./components/Calculator"

export default function App() {

  const [style, setStyle] = React.useState(false);
  const [cleaner, setCleaner] = React.useState(false);

  let calCulatorInput;
  let result;

  function getNumByKeyBoard(event){
    
    if(cleaner === true){
      document.getElementById("screen").value = ""
      setCleaner(false)
    }
    document.getElementById("screen").value += event.target.value
    calCulatorInput = document.getElementById("screen").value
    
  }

  function getOperatorByKeyBoard(event){
    document.getElementById("screen").value += event.target.value
    calCulatorInput = document.getElementById("screen").value
    setCleaner(false)

  }

  function getNumByScreen(event){
    calCulatorInput += event.target.value
  }

  function getResult(){
    try{
      result = (eval(calCulatorInput))
      document.getElementById("screen").value = result
      setCleaner(true)
    }
    catch{
        document.getElementById("screen").setAttribute("class", "error")
      setTimeout(()=> {
        document.getElementById("screen").setAttribute("class", "display")
      },1000)
    }
  }

  function calculatorStyle(){
    setStyle(!style)
  }

  function clear(){
    document.getElementById("screen").value = ""
    calCulatorInput = ""
    result = ""
  }

  function erase(){
    document.getElementById("screen").value = document.getElementById("screen").value.slice(0,-1)
  }

  return (
    <div className="App">
      <Calculator
        getNumByKeyBoard={getNumByKeyBoard}
        getNumByScreen={getNumByScreen}
        getOperatorByKeyBoard={getOperatorByKeyBoard}
        getResult={getResult}
        clear={clear}
        erase={erase}
        calculatorStyle={calculatorStyle}
        style={style}
      />
    </div>
  );
}

