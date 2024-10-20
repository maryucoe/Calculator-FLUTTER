import {useState} from 'react';
import './index.css'

function App() {
const [calc,setcalc] =useState("");
const [result,setresult]=useState("");

const ops=['/','*','+','-','.'];

const updatecalc = value => {
  if (
    (ops.includes(value) && calc === '') ||
    (ops.includes(value) && ops.includes(calc.slice(-1)))
  ) {
    return;
  }

setcalc(calc+value);
if(!ops.includes(value)){
  setresult(eval(calc+value.toString()));
}
};
const createdigits=()=>{
  const digits=[];
  for(let i=1;i<10;i++){
    digits.push(<button onClick={()=>updatecalc(i.toString())}key={i}>{i}</button>);
  }
  return digits;
}
const calculate=()=>{
  setcalc(eval(calc).toString());
};
  const deleteLast = () => {
    if (calc === '') {
      return;
    }
    const value = calc.slice(0, -1);
    setcalc(value);
  };

  const clearAll = () => {
    setcalc("");
    setresult("");
  };

  return (
  <div className="app">
    <div className="calc">
      <div className="display">
        {result ?<span>{result}</span> : ''} &nbsp;
        <div className="result"> { calc ||"0"}</div>
        </div>
      
        <div className="operators">
          <button onClick={()=> updatecalc('+')}>+</button>
          <button onClick={()=> updatecalc('-')}>-</button>
          <button onClick={()=> updatecalc('/')}>/</button>
          <button onClick={()=> updatecalc('*')}>*</button>
          </div>
          <div className="box">
          <div className="digits">
            {createdigits()}
            <button onClick={()=> updatecalc('0')}>0</button>
            <button onClick={()=> updatecalc('.')}>.</button>
          </div>
          </div>


            <div className="operators2">
            <button onClick={clearAll}>CLEAR</button>
            <button onClick={deleteLast}>DEL</button>
            <button onClick={calculate}>=</button>
        
          </div>
        </div>
      </div>
    
  
  );
}


export default App
