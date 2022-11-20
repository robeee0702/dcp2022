import React from 'react'
import '../style/pickupsite.css'

const PickUpSite = () => {
  return (
      <div className="main-container">
          <div className="login-process">
              <div className="login-main-container">
                  <div className="thankyou-wrapper">
                      <h1>Köszönjük a vásárlást!</h1>
                        <p>for contacting us, we will get in touch with you soon... </p>
                        <a href='/shop'>Vissza a termékekhez</a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default PickUpSite;