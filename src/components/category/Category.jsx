import React, { useState } from "react";
import{Link } from 'react-router-dom'
import Categorymenu from '../../assets/menu.png'
import './Category.css'
function Category() {
  const [hideandshow, setHideandshow] = useState(false);

  const toggle = () => {
    setHideandshow(!hideandshow);
    setTimeout(()=>{
      setHideandshow(false)
   },10000)
  };

  return (
    <div className="categorycontainer" style={{ position:"absolute",gap:"5px", display:"flex",flexDirection:"column", alignItems:"start",    width:"12%",padding:"20px 20px"}}>
      <button onClick={toggle} style={{width:"fit-content", padding: "2px 15px" , backgroundColor:"#ff60b0", color:"black", boxShadow:"0px 0px 5px 0px black"}}>
        {hideandshow ?    <img src={Categorymenu} alt="" style={{rotate:"90deg"}} width="30px"/> : <img src={Categorymenu} alt=""  width="30px"/>}
      </button>

      {hideandshow && (
        <div  style={{backgroundColor:"#ffdfee",display:"flex",flexDirection:"column",alignItems:"center",gap:"10px", width:"80%",padding:"10px 0px",   boxShadow:"0px 0px 5px 0px black"}}>
          <Link className="categorylink" to="/">Skin care</Link>  
          <Link className="categorylink" to="/">Skin care</Link> 
          <Link className="categorylink" to="/">Skin care</Link> 
          <Link className="categorylink" to="/">Skin care</Link> 
          <Link className="categorylink" to="/">Skin care</Link>
        </div>
      )}
    </div>
  );
}

export default Category;