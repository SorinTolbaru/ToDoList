import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./index.css";
const GetandPost = () => {
    const[content,setContent] = useState("");
    const navigate = useNavigate();
    let data = { notes: [] };
    useEffect(()=>{
        fetch(`https://api.jsonbin.io/v3/b/63b81cf001a72b59f24316f7`,{
            headers: {"X-Master-Key": '$2b$10$1Uu31aMN2lksJPzev3Ex5OqnDFs95V/xD3h72/HHBP.pcyHAi4hnW'}})
        .then(res=> res.json())
        .then(data => setContent(data.record.notes));
        
        
    },[`https://api.jsonbin.io/v3/b/63b81cf001a72b59f24316f7`]);

    const delnote=(id)=>{
        fetch(`https://api.jsonbin.io/v3/b/63b81cf001a72b59f24316f7`,{
            headers: {"X-Master-Key": '$2b$10$1Uu31aMN2lksJPzev3Ex5OqnDFs95V/xD3h72/HHBP.pcyHAi4hnW'}})
        .then(res=> res.json())
        .then(data => {setContent(data.record.notes)});
       
        async function test (){
            await fetch(`https://api.jsonbin.io/v3/b/63b81cf001a72b59f24316f7`,{
                headers: {"X-Master-Key": '$2b$10$1Uu31aMN2lksJPzev3Ex5OqnDFs95V/xD3h72/HHBP.pcyHAi4hnW'}});
 
                window.location.reload();
        }
        content.map((e)=>{
            data.notes.push(e)
        })  
 
        data.notes.splice(id,1)
        for(let i in data.notes){
            data.notes[i].id = Number(i);
        }
        
        let req = new XMLHttpRequest();
        req.onreadystatechange = () => {
          if (req.readyState == XMLHttpRequest.DONE) {console.log(req.responseText); }};  
        req.open("PUT", "https://api.jsonbin.io/v3/b/63b81cf001a72b59f24316f7", true);
        req.setRequestHeader("Content-Type", "application/json");
        req.setRequestHeader("X-Master-Key", "$2b$10$1Uu31aMN2lksJPzev3Ex5OqnDFs95V/xD3h72/HHBP.pcyHAi4hnW");
        req.send(JSON.stringify(data));
        test()
       
    }


    return ( 
        <div>
        <div className="status">Nr. of notes:{content.length}</div>
        <div className="note-table">
            {content && content.map((res)=>(
                <div key={res.id}>
                    <Link to={`/Notes/${res.id}`}><div className="note">
                        <div className="title">{res.title}</div>
                        <div className="text-div"><p className="text">{res.text}</p></div> 
                    </div></Link>
                    <Link><div className="delbutton" onClick={()=>{delnote(res.id)}} >Delete</div></Link>
                </div> 
                

            ))}
                <Link to={"/Newnote"}><div className="note addnote">+</div></Link>
        </div>
        </div>

     );
}
 
export default GetandPost;