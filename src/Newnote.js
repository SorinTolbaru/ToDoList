import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";


const Newnote = () => {
    const[title,setTitle] = useState("");
    const[text,setText] = useState("")
    const navigate = useNavigate();

    

    let vars = {notes: []};
    let id;
    let datac = {}
    
    const postnote = (e) => {
        e.preventDefault();
        
        fetch(`https://api.jsonbin.io/v3/b/63b81cf001a72b59f24316f7`,{
            headers: {"X-Master-Key": '$2b$10$1Uu31aMN2lksJPzev3Ex5OqnDFs95V/xD3h72/HHBP.pcyHAi4hnW'}})
        .then(res=> res.json())
        .then(data => {vars.notes = data.record.notes})
        .then(()=>{
            id = vars.notes.length; 
            datac = {title: title, text: text ,id:id};
            vars.notes.push(datac);
 
            let req = new XMLHttpRequest();
        req.onreadystatechange = () => {
          if (req.readyState == XMLHttpRequest.DONE) {console.log(req.responseText); }};  
        req.open("PUT", "https://api.jsonbin.io/v3/b/63b81cf001a72b59f24316f7", true);
        req.setRequestHeader("Content-Type", "application/json");
        req.setRequestHeader("X-Master-Key", "$2b$10$1Uu31aMN2lksJPzev3Ex5OqnDFs95V/xD3h72/HHBP.pcyHAi4hnW");
        req.send(JSON.stringify(vars));
        navigate("/NotesList");
        })
        
        
        
        
        
   
      };
          
    return ( 
        <div className="cont" >
            <h1 style={{"textAlign": "center"}}>Create a note</h1>
            <div className="form-div">
            <form  className="form-holder" onSubmit={postnote}>
                <label>Title</label>
                <input type={"text"} onChange={(v)=>setTitle(v.target.value)} required ></input>
                <label>Text</label> 
                <textarea onChange={(v)=>setText(v.target.value)} style={{"resize":"none"}} rows={20} required></textarea>           
                <button>Submit note</button>
            </form>
            </div>
        </div>
     );
}
 
export default Newnote;