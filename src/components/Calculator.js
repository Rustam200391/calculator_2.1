
import React from "react";
import "../style.css"

export default function Calculator({
    calculatorStyle, 
    style, 
    getNumByScreen, 
    getNumByKeyBoard, 
    getOperatorByKeyBoard,
    getResult,
    clear,
    erase})
{ 
      
    return (

        <div className={style? "container": "container-dark"}>

            <input 
            id="screen"
            className={style? "display" : "display-dark"}         
            onChange={(event)=> getNumByScreen(event)}>
            </input>
    
            <div className="keysContainer">
    
                <div className="num">
        
                    <button 
                        className={style? "buttonOperator": "buttonOperator-dark"} 
                        onClick={clear}>AC</button>
                    
                    <button 
                        className={style? "buttonC": "buttonC-dark"} 
                        onClick={erase}>C</button>
                    <button 
                        className={style? "buttonStyle": "buttonStyle-dark"} 
                        onClick={(event)=>calculatorStyle(event)}>{style? "☼" : "☀︎"}</button>
        
                    <button 
                        className={style? "button": "button-dark"}
                        value="7" 
                        onClick={(event)=>getNumByKeyBoard(event)}>7</button>
            
                    <button 
                        className={style? "button": "button-dark"}
                        value="8" 
                        onClick={(event)=>getNumByKeyBoard(event)}>8</button>
        
                    <button 
                        className={style? "button": "button-dark"}
                        value="9" 
                        onClick={(event)=>getNumByKeyBoard(event)}>9</button>
        
                    <button 
                        className={style? "button": "button-dark"}
                        value="4" 
                        onClick={(event)=>getNumByKeyBoard(event)}>4</button>
        
                    <button 
                        className={style? "button": "button-dark"}
                        value="5" 
                        onClick={(event)=>getNumByKeyBoard(event)}>5</button>
        
                    <button 
                        className={style? "button": "button-dark"}
                        value="6" 
                        onClick={(event)=>getNumByKeyBoard(event)}>6</button>
        
                    <button 
                        className={style? "button": "button-dark"}
                        value="1" 
                        onClick={(event)=>getNumByKeyBoard(event)}>1</button>
        
                    <button 
                        className={style? "button": "button-dark"}
                        value="2" 
                        onClick={(event)=>getNumByKeyBoard(event)}>2</button>
        
                    <button 
                        className={style? "button": "button-dark"}
                        value="3" 
                        onClick={(event)=>getNumByKeyBoard(event)}>3</button>
        
                </div>
        
                <div className="operators">
        
                    <button 
                        className={style? "buttonOperator": "buttonOperator-dark"} 
                        value="*"         
                        onClick={(event)=>getOperatorByKeyBoard(event)}>×</button>
        
                    <button 
                        value="/" 
                        className={style? "buttonOperator": "buttonOperator-dark"}         
                        onClick={(event)=>getOperatorByKeyBoard(event)}>÷</button>
        
                    <button 
                        value="+" 
                        className={style? "buttonOperator": "buttonOperator-dark"}         
                        onClick={(event)=>getOperatorByKeyBoard(event)}>+</button>
        
                    <button 
                        value="-" 
                        className={style? "buttonOperator": "buttonOperator-dark"}         
                        onClick={(event)=>getOperatorByKeyBoard(event)}>−</button>
        
                </div>
            
            </div>
    
            <button 
                className={style? "buttonCero": "buttonCero-dark"}
                value="0" 
                onClick={(event)=>getNumByKeyBoard(event)}>0</button>
            <button 
                className={style? "button": "button-dark"}
                value="." 
                onClick={(event)=>getNumByKeyBoard(event)}>.</button>
            <button  
                className={style? "buttonOperator": "buttonOperator-dark"}         
                onClick={getResult}>=</button> 
            
        </div>
    );
}
  