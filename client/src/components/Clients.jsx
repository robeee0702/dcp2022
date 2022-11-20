import React from 'react'
import { Card } from '@mui/material';
import Carousel from 'react-elastic-carousel';
import {clientsData} from '../clients'
import '../style/clients.css'

const Clients = () => {

    const breakPoint = [
        {width : 10 ,itemsToShow: 1},
        {width : 480 ,itemsToShow: 2},
        {width : 780 ,itemsToShow: 3},
        {width : 1160 ,itemsToShow: 4},
        {width : 1480 ,itemsToShow: 5},
      ];


  return (
    <div className='card-container' style={{display:"flex",marginBottom:"54px",padding:"20px 60px 20px",justifyContent:"left"}}>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h1 style={{marginTop:"24px",marginBottom:"10px",fontSize: "44px",
          fontWeight: "300",
          lineHeight: "42px",
          letterSpacing: "0px",}}>ELÉGEDETT ÜGYFELEINK</h1>
          <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="clientsLine"></div>
        </div>
        <h6 style={{marginBottom:"20px",marginTop:"20px",fontSize:"14px",color:"grey"}}>Célkitűzésünk a minőségi ügyfélkiszolgálás és ügyfeleink maximális elégedettsége.<br/>
         Cégünk több, mint 15 éve az elégedett ügyfelek megbízható partnere.
         </h6>

         <Carousel breakPoints={breakPoint} className='clientCarousel'>
            
            {
            clientsData.map((item, i) => (
                <a key={i} style={{padding:"10px"}} href={item.host}><Card key={i} sx={{display:"flex",maxHseight:"280",maxWidth:"320px",flexDirection:"column"
                ,alignItems:"center",justifyContent:"center",borderRadius:"42px",transition:"all 0.4s",padding:"5px",
                boxShadow:"2px 2px 8px -2px"}} className='cardContainer'
                >
                    <div>
                        <img className='productImg' src={item.image} alt="" />
                    </div>
                    <div className="text">
                        <h6 style={{display:"flex",marginBottom:"8px",borderBottom:"1px solid #dddfe1",justifyContent:"center",marginRight:"40px",marginLeft:"40px",alignItems:"center"}}>{item.name}</h6>
                    </div>
                </Card>
                </a>
                ))
            }

         </Carousel>
        </div>
    </div>
    
  )
}

export default Clients;