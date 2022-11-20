import React from 'react'
import { Card } from '@mui/material';
import '../style/productcard.css'



const ProductCard = (props) => {


  return (
    <div><a href='/shop'>

        <Card sx={{display:"flex",maxHeight:"240",maxWidth:"260px",flexDirection:"column"
        ,alignItems:"center",justifyContent:"center",border:"none",boxShadow:"none",borderRadius:"22px",transition:"all 0.4s",
    }} className='cardContainer'>
            <div>
                <img className='productImg' src={props.image} alt="" />
            </div>
            <div className="productText">
                <h5 style={{display:"flex",marginBottom:"8px",borderBottom:"1px solid #dddfe1",justifyContent:"center",marginRight:"40px",marginLeft:"40px",alignItems:"center"}}>{props.name}</h5>
                <p style={{padding:"8px",marginTop:"5px",fontSize:"14px",marginBottom:"8px"}}>
                    {props.desc}
                </p>
                {/* <span style={{padding:"8px",fontSize:"12px",display:"flex", justifyContent:"center",alignItems:"center"}}>{props.desc}</span> */}
            </div>

        </Card>
        </a>
    </div>
  )
}

export default ProductCard;