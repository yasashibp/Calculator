import Btn from './/comp/Btn.js'
import Layar from './/comp/Layar.js'
import BtnOpt from './/comp/BtnOpt.js'
import BtnEql from './/comp/Eql'
import React, {useState} from 'react';


import './App.css';

function App () {
  const [num, setNum] = useState("")
  const [operat,setOperat] = useState("")
  const [eqlNum, setEqlNum] = useState("")
  const [count, setCounti] = useState(0)
  const [hasil,setHasil] = useState("")



  const numFree = (s) => {
    if(num.length === 0){
      setNum("0")
      setOperat("0")
    }else if(num.length > 11) {
      return num.substr(0,11)

    }
    else {
      return num
    }
  }

  const numTot = () => {
    console.log(eval("operat"))
  }
 
  const deleteAll = () => {
    setCounti(0)
    setOperat("0")
    setNum("0")
  }

  const deletB = () => {
    setNum((e) => {var lstIndex = e.substring(0, e.length - 1);
return lstIndex})
  }

  const oper = (opt) =>{
      setNum("0")
      setCounti(0)
      
  }

  const hasilTot = (rr,pp) => {
    let rrStr = String(rr)
    if(rrStr.length > 11){
      let rrStrSub = rrStr.substr(0,11)
    setNum(rrStrSub)
  }else{
    setNum(rrStr)
  }
  }

  const eql = (s) => {
    setOperat(s)
  }
 
  return (
    <div className="App">
        <div className="pembungkus">
            <Layar mainNum={numFree(num)} secNum={operat}/>
            <div className='btn'>
            <Btn value="C"  num={deleteAll} addNum={num}/>
            <Btn value="%" opt={operat} optFunc={setOperat} optOp = {oper} addNum={num} num={setNum}/>
            <BtnOpt value=" / " opt={operat} optFunc={setOperat} optOp = {oper} num={num}/>
            <Btn value="Back" num={deletB} addNum={""}/>
            </div>
            <div className='btn'>
            <Btn value="7" num={setNum} addNum={num}/>
            <Btn value="8" num={setNum} addNum={num}/>
            <Btn value="9" num={setNum} addNum={num}/>
            <BtnOpt value=" x " opt={operat} optFunc={setOperat} optOp = {oper} num={num}/>
            </div>
            <div className='btn'>
            <Btn value="4" num={setNum} addNum={num}/>
            <Btn value="5" num={setNum} addNum={num}/>
            <Btn value="6" num={setNum} addNum={num}/>
            <BtnOpt value=" - " opt={operat} optFunc={setOperat} optOp = {oper} num={num}/>
            </div>
            <div className='btn'>
            <Btn value="1" num={setNum} addNum={num}/>
            <Btn value="2" num={setNum} addNum={num}/>
            <Btn value="3" num={setNum} addNum={num}/>
            <BtnOpt value=" + " opt={operat} optFunc={setOperat} optOp = {oper} num={num}/>
            </div>
            <div className='btn'>
            <Btn value="0" num={setNum} addNum={num}/>
            <Btn value="." num={setNum} addNum={num}/>
            <BtnEql value=" = " eqlFunc={eql} eqlN={eqlNum} eqlSet={setEqlNum} opt={operat} addNum={num} numT={numTot} countN={count} countFunc={setCounti} hsl={hasil} hslS={setHasil} num={setNum} hasTot={hasilTot}/>
            </div>

        </div>

    </div>
  );

}


export default App;
