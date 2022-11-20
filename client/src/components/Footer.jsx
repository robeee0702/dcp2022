import React from "react"
import "../style/footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid1'>
          <div className='box'>
            {/* <img src='/images/dental.png' alt='' /> */}
            <h2>NYITVATARTÁS</h2>
            <div>
              <p>Hétfő-Csütörtök 09:00-17:00</p>
              <p>Péntek 09:00-15:30</p>
            </div>
          </div>

          <div className='box'>
            <h2>ELÉRHETŐSÉGEK</h2>
            <div className='text'>
              <p>9700 Szombathely , Sárvár u. 12.</p>
            </div>
            <div className='text'>
              <p>info@dentalcoopplus.hu</p>
            </div>
            <div className='text'>
              <p>+36 20 956 5480</p>
            </div>
          </div>

          <div className='box'>
            <h2>INFORMÁCIÓK</h2>
            <div style={{marginTop:"6px"}}>
              <a  href="/dpi" className="text">Adatkezelési tájékoztató</a>
            </div>
            <a href="/impresszum" className="text">Impresszum</a>
            <div style={{marginTop:"6px"}}>
              <a href="/privacy" className="text">ÁSZF</a>
            </div>
          </div>
        </div>

        <div className='legal container'>
          <p style={{color:"#0f3d7e"}}>® Minden jog fenntartva - Dentalcoopplus Kft. - 2006-2022</p>
          <label>
          <img src='/images/dental.png' alt='' />
          </label>
        </div>
      </footer>
    </>
  )
}

export default Footer
