import React from 'react'
import '../style/pickupsite.css'

const PickUpSite = () => {
    return (
        <div className="main-container">
            <div className="login-process">
                <div className="login-main-container">
                    <div className="thankyou-wrapper">
                        <h1>Köszönjük szépen a rendelését!</h1>
                          <p>A rendelés részleteivel hamarosan felvesszük Önnel a kapcsolatot a megadott email címen belül </p>
                          <a href='/shop'>Vissza a termékekhez</a>
                      </div>
                  </div>
              </div>
          </div>
    )
  }
  
  export default PickUpSite;
  