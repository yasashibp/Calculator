



function Eql(props) {
    
const clckCount = () => {
    props.countFunc(props.countN + 1)
}

const setHasil = () => {
    let ope = props.opt
    if(ope.includes("x")){
        let newOpe = ope.substr(0, ope.length-2)
        let hasil = String(props.addNum+"*"+newOpe)
        let hslT = eval(hasil)
        props.hasTot(hslT)
    }else if(ope.includes("%")){
        let newOpe = ope.substr(0, ope.length-1)
        let percOpe = newOpe / 100
        props.hasTot(percOpe)

    }
    else if(!ope.includes("x")) {
        let newOpe = ope.substr(0, ope.length-2)
        let operatornya = ope.charAt(ope.length-2)
        let hasil = eval(String(newOpe+operatornya+props.addNum))
        props.hasTot(hasil)
        // return hasil
    }
}

    const clck = () => {
        clckCount()
        if(props.countN < 1){
            setHasil()
            props.eqlSet(() => {
                let ss =  props.opt + props.addNum + props.value
                props.eqlFunc(ss)
                console.log(ss)
                return ss
        })}
        else{
            return props.opt
        }
    }

    return (
        <button className="button Eq" onClick={clck}>
            {props.value}
        </button>
    )
}


export default Eql;