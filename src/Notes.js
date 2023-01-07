import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./index.css";
const Notes = () => {
    const {id} = useParams();
    const[notetext,setNotetext] = useState(' ');
    const[title,setTitle] = useState(" ");
    const[text,setText] = useState(" ");
    const navigate = useNavigate();
    let vars = {notes: []};
    let data = { notes: [] };
    const[content,setContent] = useState("");
    
    useEffect(()=>{
        fetch(`https://api.jsonbin.io/v3/b/63b81cf001a72b59f24316f7`,{
            headers: {"X-Master-Key": '$2b$10$1Uu31aMN2lksJPzev3Ex5OqnDFs95V/xD3h72/HHBP.pcyHAi4hnW'}})
        .then(res=> res.json())
        .then(data => {setNotetext(data.record.notes[id])});
    },[`https://api.jsonbin.io/v3/b/63b81cf001a72b59f24316f7`]);

 
    const delnote=(id)=>{
        fetch(`https://api.jsonbin.io/v3/b/63b81cf001a72b59f24316f7`,{
            headers: {"X-Master-Key": '$2b$10$1Uu31aMN2lksJPzev3Ex5OqnDFs95V/xD3h72/HHBP.pcyHAi4hnW'}})
        .then(res=> res.json())
        .then(data => {vars.notes = data.record.notes})
       .then(()=>{

        vars.notes.splice(id,1)
        for(let i in vars.notes){
            vars.notes[i].id = Number(i);
        }

        let req = new XMLHttpRequest();
        req.onreadystatechange = () => {
          if (req.readyState == XMLHttpRequest.DONE) {console.log(req.responseText); }};  
        req.open("PUT", "https://api.jsonbin.io/v3/b/63b81cf001a72b59f24316f7", true);
        req.setRequestHeader("Content-Type", "application/json");
        req.setRequestHeader("X-Master-Key", "$2b$10$1Uu31aMN2lksJPzev3Ex5OqnDFs95V/xD3h72/HHBP.pcyHAi4hnW");
        req.send(JSON.stringify(vars));
        navigate("/NotesList");
       })

        
       
     
       
    }


    return ( 
        <div className="noteframe">
            <div className="notebuttons"> 
                <Link><div onClick={()=>{delnote(id)}} className="status">Delete</div></Link>
            </div>
            <div className="notedetails">
                <form >
                   {notetext.title && <input className="detcols detitle" type={"text"} defaultValue={notetext.title}  onChange={(e)=>{setTitle( e.target.value)}} readOnly></input>} 
                    <br/>
                   {notetext.text && <textarea onChange={(e)=>{setText(e.target.value)}} defaultValue={notetext.text} className="detcols"  style={{"resize":"none"}} rows={18} cols={31} required readOnly></textarea>} 
                </form>
            </div>
            <p>{title}</p>
            <p>{text}</p>
        </div>
        
     );
}
 
export default Notes;
