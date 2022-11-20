import React from "react";
import "../style/aboutpage.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from '@mui/icons-material/Email';

const AboutPage = () => {
  return (
    <div className="aboutContainer">
      {/* <div className="aboutContainer1">
      <h3>Székhely:</h3>
      <p style={{color: "#362cc6",fontSize: "15px",lineHeight: "20px"}}>9730 Szombathely, Sárvár utca 12.</p>
      <h3>Email:</h3>
      <p style={{color: "#362cc6",fontSize: "15px",lineHeight: "20px"}}>9730 Szombathely, Sárvár utca 12.</p>
      <h3>Telefon:</h3>
      <p style={{color: "#362cc6",fontSize: "15px",lineHeight: "20px"}}>+36-20-956-5480</p>
      </div> */}
      <div className="aboutContainer2">
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
          }}
        >
          Az ön elégedettsége a Mi sikerünk.
        </h2>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "56px",
            fontWeight: "300",
            lineHeight: "82px",
            letterSpacing: "0px",
          }}
        >
          RÓLUNK
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="aboutLine"></div>
        </div>
        <div className="aboutText">
          <p>
            Dentalcoop Plus Kft. több mint 10 éve van jelen a piacon, mint
            fogászati berendezések szervizelésével és kereskedelmével foglalkozó
            cég. Tevékenységünk egész Magyarország területére kiterjed.
          </p>
          <p>
            Ügyfeleinkkel hosszú távú együttműködésre törekszünk, ezért a
            kezdetektől segítséget nyújtunk akár a rendelők technikai
            tervezésében és kivitelezésében, a berendezések beüzemelésében,
            szervizelésében, finanszírozási kérdésekben, felmerülő problémák
            megoldásában.
          </p>
          <p>
            Igyekszünk vevőinknek a legmagasabb minőséget garantálni mind
            szerviztevékenységünket, mind az értékesített terméket illetően.
            Több neves külföldi cég termékeit forgalmazzuk, mint például az NSK,
            Nouvag, Cattani.
          </p>
          <p>
            Fő partnerünk a Cefla S. C., Európa legnagyobb fogászati szék
            gyártója. Tevékenységüket 1932-ben kezdték meg fogászati
            kezelőegységek gyártásával, de a folyamatos fejlesztéseknek
            köszönhetően napjainkban már a legfejlettebb technológiák széles
            palettáját kínálják az orvosok számára, melynek eredménye egy olyan
            prémiumkategóriás termékcsalád, mely minden igényt kielégít.
            Legismertebb márkái a Stern Weber, a Myray és a Goldspeed.
          </p>
          <p>
            A Dentalcoop Plus Kft. egyik fő alapelve, hogy naprakészek legyünk
            mind a szerviztevékenységet mind a kereskedelmi vonalat tekintve.
            Ennek biztosítása érdekében szervizes kollégáink folyamatosan
            bővítik tudásukat a neves gyártók által szervezett szakmai
            tréningeken.
          </p>
          <p>
            Számos elismert, orvosi berendezéseket gyártó cég márkaszerviz
            tevékenységét is ellátja cégünk (Stenweber, Myray , Cattani ,Nsk,
            Nouvag ,W&H ,Kavo, Oms, Anthos, Planmeca). A gyors javítások
            érdekében nagy alkatrészraktárral rendelkezünk, ezért a hozzánk
            küldött kézidarabokat postafordultával, javítva visszaküldjük.
          </p>
          <p>
            Az általunk kínált termékek megvásárlásával nem csak magát a
            berendezést, hanem egy országosan kiterjedt, jól képzett, tapasztalt
            szerviz-team szolgáltatásait is „megvásárolja”, akik hozzáértése,
            sokéves tapasztalata biztosít bennünket – és vásárlóinkat – az
            esetleges hibák szakszerű és gyors kijavításáról.
          </p>
        </div>
        <div className="aboutButton">
          <a
            href="#foo"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
              marginBottom: "60px",
              marginTop: "30px",
              color: "#0f3d7e",
              border: "none",
            }}
          >
            <button
              className="aboutButton"
              style={{
                borderRadius: "10px",
                padding: "6px 12px",
                backgroundColor: "#0f3d7e",
                border: "none",
                color: "white",
              }}
            >
              Kapcsolatfelvétel
            </button>
          </a>
        </div>
      </div>
      <div>
        <div className="aboutPartners">
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "44px",
              fontWeight: "300",
              lineHeight: "38px",
              letterSpacing: "0px",
            }}
          >
            SZAKKÉPZETT KOLLÉGÁINK
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="serviceLine"></div>
          </div>
          <div className="aboutPartnerList">
            <div className="aboutPartnersGrid">
              <h2
                style={{
                  margin: "8px",
                  fontWeight: "300",
                  fontSize: "28px",
                  textTransform: "uppercase",
                }}
              >
                ÉRTÉKESÍTÉS/SZERVIZ
              </h2>
              <h4 style={{ margin: "8px", fontWeight: "500" }}>
                Kenedli Flórián
              </h4>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                <EmailIcon style={{fontSize:"16px"}}/>
                info@dentalcoopplus.hu
              </h5>
              <a href="tel:0036209565480">
                <p style={{fontSize:"17px", margin: "16px" }}>
                  <PhoneIcon fontSize="28px" /> +36 20 956 5480
                </p>
              </a>
            </div>
            <div className="aboutPartnersGrid">
              <h2
                style={{
                  margin: "8px",
                  fontWeight: "300",
                  fontSize: "28px",
                  textTransform: "uppercase",
                }}
              >
                Pénzügy/Számlázás
              </h2>
              <h4 style={{ margin: "8px", fontWeight: "500" }}>
                Gergácz Viktória
              </h4>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                <EmailIcon style={{fontSize:"16px"}}/>
                g.viktoria@dentalcoopplus.hu
              </h5>
              <a href="tel:0036309303588">
                <p style={{fontSize:"17px", margin: "16px" }}>
                  <PhoneIcon fontSize="28px" /> +36 30 930 3588
                </p>
              </a>
            </div>
            <div className="aboutPartnersGrid">
              <h2
                style={{
                  margin: "8px",
                  fontWeight: "300",
                  fontSize: "28px",
                  textTransform: "uppercase",
                }}
              >
                Ügyvitel/Marketing
              </h2>
              <h4 style={{ margin: "8px", fontWeight: "500" }}>
                Strem Patrícia
              </h4>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                <EmailIcon style={{fontSize:"16px"}}/>
                s.patricia@dentalcoopplus.hu
              </h5>
              <a href="tel:0036202511002">
                <p style={{fontSize:"17px", margin: "16px" }}>
                  <PhoneIcon fontSize="28px" /> +36 20 251 1002
                </p>
              </a>
            </div>
            <div className="aboutPartnersGrid">
              <h2
                style={{
                  margin: "8px",
                  fontWeight: "300",
                  fontSize: "28px",
                  textTransform: "uppercase",
                }}
              >
                Ügyvitel
              </h2>
              <h4 style={{ margin: "8px", fontWeight: "500" }}>
                Jámbor Vanessa
              </h4>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                <EmailIcon style={{fontSize:"16px"}}/>
                j.vanessa@dentalcoopplus.hu
              </h5>
              <a href="tel:0036302273555">
                <p style={{fontSize:"17px", margin: "16px" }}>
                  <PhoneIcon fontSize="28px" /> +36 30 227 3555
                </p>
              </a>
            </div>
            <div className="aboutPartnersGrid">
              <h2
                style={{
                  margin: "8px",
                  fontWeight: "300",
                  fontSize: "28px",
                  textTransform: "uppercase",
                }}
              >
                Szerviz technikus
              </h2>
              <h4 style={{ margin: "8px", fontWeight: "500" }}>
                Bencsics László
              </h4>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                <EmailIcon style={{fontSize:"16px"}}/>
                info@dentalcoopplus.hu
              </h5>
              <a href="tel:0036307972941">
                <p style={{fontSize:"17px", margin: "16px" }}>
                  <PhoneIcon fontSize="28px" /> +36 30 797 2941
                </p>
              </a>
            </div>
            <div className="aboutPartnersGrid">
              <h2
                style={{
                  margin: "8px",
                  fontWeight: "300",
                  fontSize: "28px",
                  textTransform: "uppercase",
                }}
              >
                Szerviz technikus
              </h2>
              <h4 style={{ margin: "8px", fontWeight: "500" }}>
                Schwott András
              </h4>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                <EmailIcon style={{fontSize:"16px"}}/>
                info@dentalcoopplus.hu
              </h5>
              <a href="tel:0036209557552">
                <p style={{fontSize:"17px", margin: "16px" }}>
                  <PhoneIcon fontSize="28px" /> +36 20 955 7552
                </p>
              </a>
            </div>
            <div style={{marginBottom:"40px"}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
