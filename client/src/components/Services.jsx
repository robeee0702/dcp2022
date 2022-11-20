import React from "react";
import { Card } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import '../style/service.css';


const Services = () => {
  return (
    <div className="serviceMargin">
      <div style={{display:"flex",overflowY:"scroll",scrollbarWidth:"10px",scrollbarColor:"white",justifyContent:"space-between",alignItems:"center",padding:"25px",height:"380px"}}>
        <div className="service-card" >

            <Card sx={{display:"flex",width:"320px",height:"240px",borderRadius:"18px",justifyContent:"center",flexDirection:"column",padding:"14px",alignItems:"center",margin:"5px 20px",boxShadow:"0px 2.8743px 17.2458px -0.718575px rgba(0, 0, 0, 0.2)",}}>


                <img style={{display:"flex",alignItems:"left",marginTop:"18px",maxWidth:"47px",maxHeight:"41",borderRadius:"2px"}} src="./images/ertek.png" alt="" />
                <h3 style={{display:"flex",justifyContent:"center",alignItems:"center",color:"#0f3d7e",marginBottom:"5px"}}>ÉRTÉKESÍTÉS</h3>
                <p style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"12px"}}>
                    Professzionális és modern megoldásokat kínálunk, minőségi technikai eszközökkel.
                    A szakmában elismert, kiemelt 
                    piaci pozíciót betöltő külföldi partnerekkel együttműködve.
                </p>
            </Card>
            <Card sx={{display:"flex",width:"320px",height:"240px",borderRadius:"18px",backgroundColor:"white",justifyContent:"center",flexDirection:"column",padding:"14px",alignItems:"center",margin:"5px 20px",boxShadow:"0px 2.8743px 17.2458px -0.718575px rgba(0, 0, 0, 0.2)",}}>
                <BuildIcon style={{display:"flex",alignItems:"left",fontSize:"36px",marginTop:"18px",marginBottom:"20px",borderRadius:"2px",color:"#0f3d7e"}} />
                <h3 style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"5px",color:"#0f3d7e"}}>SZERVÍZ</h3>
                <p style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"12px",color:"black"}}>
                Célkitűzésünk a minőségi ügyfél élmény biztosítása. Ennek megvalósítása érdekében
                 gyors és precíz szerviz szolgáltatást biztosítunk Magyarország egész területén.
                </p>
            </Card>
            <Card sx={{display:"flex",width:"320px",height:"240px",borderRadius:"18px",justifyContent:"center",flexDirection:"column",padding:"14px",alignItems:"center",margin:"5px 20px",boxShadow:"0px 2.8743px 17.2458px -0.718575px rgba(0, 0, 0, 0.2)",}}>
            <img style={{display:"flex",alignItems:"left",maxWidth:"47px",marginTop:"18px",maxHeight:"41",borderRadius:"2px"}} src="./images/pipa.png" alt="" />
                <h3 style={{display:"flex",justifyContent:"center",marginBottom:"5px",alignItems:"center",color:"#0f3d7e"}}>KIVITELEZÉS</h3>
                <p style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"12px"}}>
                Segítséget nyújtunk és szorosan együttműködünk a megfelelő technikai eszközök kiválasztásában és a rendelők kialakításának kivitelezésében. 
                Találjuk meg együtt a tökéletes megoldást.
                </p>
            </Card>
            <Card sx={{display:"flex",width:"320px",height:"240px",borderRadius:"18px",justifyContent:"center",flexDirection:"column",padding:"14px",alignItems:"center",margin:"5px 20px",boxShadow:"0px 2.8743px 17.2458px -0.718575px rgba(0, 0, 0, 0.2)",}}>
                <img style={{display:"flex",alignItems:"left",marginTop:"18px",maxWidth:"47px",maxHeight:"41",borderRadius:"2px"}} src="./images/kez.png" alt="" />
                <h3 style={{display:"flex",justifyContent:"center",alignItems:"center",color:"#0f3d7e"}}>MÁRKASZERVÍZ</h3>
                <p style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"12px"}}>
                Számos, a piacon elismert gyártó termékeire biztosítunk márkaszerviz szolgálatatást. A gyors kiszolgálást, 
                kiterjedt alkatrészraktárunknak köszönhetően postafordultával teljesítjük.
                </p>
            </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
