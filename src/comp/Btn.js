import '../App.css'
import React, {useCallback} from 'react';


function Btn(props) {
    const clk = () => 
    props.num((w) => { 
        let kk = props.addNum + props.value
        let kkSubstr =  kk.substring(1)
        console.log(props.addNum)
        if (typeof props.opt != 'undefined' && kk.includes(".") && kk.includes("%")){
            console.log()
            return props.addNum/100
        }
        else if(kkSubstr.charAt(0) === ".") {
            console.log("ini nih")
            if(kkSubstr.includes("%")){
                return "0"
            }else {
          return kk
        }
        }
        else if(w.charAt(0) === "0"){
            console.log("hhh")
            if(kkSubstr.charAt(0)==="%") {
                return "0"
            }
            else{
                return kkSubstr
            }
        }else{
            if(kk.length > 10) {
                return kk.substr(0,11)
            }else{
                if(props.value.includes("%")){
                    let hsSm = String(props.addNum+"/"+100)
                    console.log("sss")
                    if(props.opt.charAt(0) === "0"){
                        if(props.opt.includes('.')){

                            console.log("ada titiknya")
                        }
                        else{
                            console.log("aman")
                        }
                        return props.opt
                    }else {
                        console.log(props.opt)
                        let pnPer = props.opt
                        let total = eval(hsSm)
                        let hsilnya = pnPer.substr(0,pnPer.length - 2)
                        let ttlSm = String(hsilnya + '*' +  total)
                        console.log(pnPer.substr(0,pnPer.length - 2))
                        console.log(ttlSm)
                        console.log(pnPer)
                        if(pnPer.includes("+") || pnPer.includes("-")) {
                            return eval(ttlSm)
                        }
                        else{
                            console.log(props.opt)
                        return eval(total)
                    }
                    }
                }               
                else{
                    return kk}
        
        } 
        }
    })

  

    return (
       <button className="button" onClick={clk}>
            {props.value}
       </button>
    )
}


export default Btn;