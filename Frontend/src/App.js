import AddItem from "./components/AddItem";
import ItemsTable from "./components/ItemsTable";
import { useState } from "react";

function App() {
  const style={
    main:{
      height:"100vh",
      width:"100vw",
      backgroundColor:"#a8dadc",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      gap:"15px"
    },
    btn:{
      width:"60px",
      height:"30px",
      backgroundColor:"#f1faee",
      color:"#1d3557",
      borderRadius:"5px",
      cursor:"pointer",
      fontWeight:"600",
      textAlign: "center"
    },
    selectBtn:{
      width:"60px",
      height:"30px",
      backgroundColor:"#1d3557",
      color:"#f1faee",
      borderRadius:"5px",
      cursor:"pointer",
      fontWeight:"600",
      textAlign: "center"
    }
  }

  const [btnStatus,SetBtnStatus] = useState(false)

  const btnClickHandle = () => {
    SetBtnStatus(!btnStatus)
  }

  return (
    <div style={style.main}>
      <div style={{display:"flex",gap:"10px",position:"absolute",top:"10px"}}>
        <div style={btnStatus ? style.btn : style.selectBtn} onClick={btnStatus ? btnClickHandle : null}>Item</div>
        <div style={btnStatus ? style.selectBtn : style.btn} onClick={btnStatus ? null : btnClickHandle}>Table</div>        
      </div>
      {
        btnStatus ? <ItemsTable/> : <AddItem/>
      }
    </div>
  );
}

export default App;
