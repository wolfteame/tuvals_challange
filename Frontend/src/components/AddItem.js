import { useState } from 'react'
import axios from "axios"


function AddItem() {
    const style = {
        main:{
            margin:"0 auto",
            width:"40%",
            height:"40%",
            backgroundColor:"#f1faee",
            borderRadius:"15px",
            padding:"10px",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            gap:"15px",

        },
        addclick:{
            width:"60px",
            height:"30px",
            backgroundColor:"#1d3557",
            marginTop:"15px",
            color:"#f1faee",
            borderRadius:"5px",
            cursor:"pointer",
            fontWeight:"600",
            textAlign: "center"
          },

    }
    
    
    
    const [Name,SetName] = useState("Unknown")
    const [Price,SetPrice] = useState(0)


    const handleNameChange = (event) => {
        SetName(event.target.value);
      }
      
    const handlePriceChange = (event) => {
        SetPrice(event.target.value);
    };

    const IsInputValid = () => {
      let bad_char = ["!","@","#","$","%","^","&","*","(",")","-","_","+","=","`","~","/","|"]
      let status_name = false
      let status_price = false
      bad_char.forEach(char => {
        if (Name.includes(char)) {
          status_name = true
        }
      });
      if ( 6 < Price.toString().length) {
        status_price = true
      }
      if (status_name || status_price) {
        return true
      }
      else return false
    }

    const addItem = () => {
      axios({
        method: 'post',
        url:'http://localhost:5000/add_item',
        data: {
            item_name: Name.replace(/[^a-zA-Z0-9]+/, '').toString(), // This is the body part
            item_price: parseFloat(Price)
          }
        })
      alert(`Item ${Name} has been added !`)
    }

    const UploadNewItem = () => {
      IsInputValid() ? alert("Please Check Inputs") : addItem() 
    }

    return (
      <div style={style.main}>
        <h1 style={{color:"#1d3557"}}>Add Item</h1>
        <div style={{display:"flex",flexDirection:"row",gap:"15px"}}>
            <div style={{display:"flex",flexDirection:"column",gap:"15px"}}>
                <div style={{fontWeight:"600"}}>Item Name</div>
                <div style={{fontWeight:"600"}}>Price</div>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"15px"}}>
                <input type="text" maxLength="9" onChange={handleNameChange}/>
                <input type="number" onChange={handlePriceChange}/>
            </div>
        </div>
        <div style={style.addclick} onClick={UploadNewItem}>Add</div>
      </div>
    );
  }
  
  export default AddItem;
  