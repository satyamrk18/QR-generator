import "./note.css"
const note = ({noteValue,fontSize,onChange})=>
{
    return(
        <div>
            <p style={{fontSize:`${fontSize}px`}} onChange={onChange}>{noteValue}</p>
        </div>
    )
}
export default note;