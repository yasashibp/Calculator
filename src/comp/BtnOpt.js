
function BtnOpt(props) {

    const clck = () => {
        props.optOp()
        props.optFunc((o) => {
            let rr = props.num +  props.value
            return rr
        })
    }


    return(

        <button className="button Opt" onClick={clck}>
            {props.value}
        </button>
    )
}

export default BtnOpt;