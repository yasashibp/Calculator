import '../App.css'

function Layar(props) {
    return(
        <div className="layar">
            <div className="mainNum secN">{props.secNum}</div>
            <div className="mainNum mainN">{props.mainNum}</div>
        </div>
    )
}

export default Layar;