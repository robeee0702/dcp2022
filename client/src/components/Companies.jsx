import React from "react";
import ReactElasticCarousel from "react-elastic-carousel";
import { Card } from '@mui/material';
import '../style/companies.css';
import {company} from '../company';



const Companies = () => {

    const breakPoint = [
        { width: 10, itemsToShow: 1 },
        { width: 480, itemsToShow: 2 },
        { width: 780, itemsToShow: 3 },
        { width: 1160, itemsToShow: 4 },
        { width: 1480, itemsToShow: 5 },
      ];


  return (
    <div>
      <ReactElasticCarousel
        showArrows={false}
        pagination={false}
        enableAutoPlay
        autoPlaySpeed={1400}
        focusOnSelect={true}
        breakPoints={breakPoint}
      
      >
        {company.map((item, i) => (
            <div key={i}>

          <Card key={i} sx={{display:"flex",maxHeight:"340px",maxWidth:"260px",flexDirection:"column"
          ,alignItems:"center",justifyContent:"center",border:"none",boxShadow:"none",borderRadius:"22px",transition:"all 0.4s",
          }} className='cardContainer'>
              <div>
                  <img style={{width:"200px",minHeight:"200px"}} src={item.image} alt={item.id} />
              </div>
              </Card>
            </div>
        ))}
      </ReactElasticCarousel>
    </div>
  );
};

export default Companies;
