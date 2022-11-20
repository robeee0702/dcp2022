import React from "react";
import { Card } from "@mui/material";
import "../style/servicepage.css";
import SpeedIcon from "@mui/icons-material/Speed";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const ServicePage = () => {
  return (
    <div className="serviceContainer">
      <div className="serviceContainer1">
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "45px",
            fontWeight: "300",
            lineHeight: "32px",
            letterSpacing: "0px",
          }}
        >
          SZERVIZ
        </h1>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
          }}
        >
          {/* sample text */}
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="serviceLine"></div>
        </div>
        <div style={{margin:"20px"}} className="serviceText">
          <p>
            Ügyfeleinkkel hosszú távú együttműködésre törekszünk, ezért a
            kezdetektől segítséget nyújtunk akár a rendelők technikai
            tervezésében és kivitelezésében, a berendezések beüzemelésében,
            szervizelésében, finanszírozási kérdésekben, felmerülő problémák
            megoldásában. Igyekszünk vevőinknek a legmagasabb minőséget
            garantálni mind szerviztevékenységünket, mind az értékesített
            terméket illetően.
          </p>
          <p>
            A Dentalcoop Plus Kft. egyik fő alapelve, hogy naprakészek legyünk
            mind a szerviztevékenységet mind a kereskedelmi vonalat tekintve.
            Ennek biztosítása érdekében szervizes kollégáink folyamatosan
            bővítik tudásukat a neves gyártók által szervezett szakmai
            tréningeken. Kiterjedt alkatrész raktárkészletünk biztosítja a gyors
            kiszolgálást, melyet postafordultával garantálunk.
          </p>
          <p>
            Minőségi eszközökhöz, minőségi szaktudást biztosítunk a tökéletes és
            percíz megvalósításhoz.
          </p>
        </div>
        <div className="serviceButton">
          <a
            href="/contact"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
              marginBottom: "68px",
              marginTop: "60px",
              color: "#0f3d7e",
              border: "none",
            }}
          >
            <button
              className="serviceButton"
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
      <div className="inspection">
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                fontSize: "44px",
                color: "black",
                fontWeight: "300",
                lineHeight: "78px",
                letterSpacing: "0px",
              }}
            >
              KÉZIDARABOK, AUTOKLÁVOK, IMPLANTÁCIÓS <br/>
              BERENDEZÉSEK JAVÍTÁSA
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
            <div style={{margin:"30px",paddingBottom:"65px"}}>
              <p className="inspectionThings">Küldje el hozzánk kézidarabját és mi akár egy munkanap alatt javítva visszaküldjük!</p>   
              <p className="inspectionThings">Autoklávok, implantációs berendezések javítása esetén, igény illetve kapacitás függvényében cserekészüléket biztosítunk!</p>   
            </div>

          </div>
          <div className="inspection2">
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "44px",
                color: "black",
                fontWeight: "300",
                lineHeight: "78px",
                letterSpacing: "0px",
              }}
            >
              IDŐSZAKOS FELÜLVIZSGÁLAT
            </h1>
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "34px",
                color: "black",
                fontWeight: "300",
                lineHeight: "48px",
                letterSpacing: "0px",
              }}
            >
              Orvostechnikai Eszközökre 4/2009(III.17.)EüM Rendelet alapján
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
            <div>
              <p className="inspectionThings"><ArrowRightIcon/> Panoráma röntgen</p>  
              <p className="inspectionThings"><ArrowRightIcon/> Intraorális röntgen</p>  
              <p className="inspectionThings"><ArrowRightIcon/> Gőzsterilizátor, Hőlégsterilizátor </p>  
              <p style={{paddingBottom:"40px"}} className="inspectionThings"><ArrowRightIcon/> Műtőlámpa</p>
              <h3 style={{display:"flex",justifyContent:"center",padding:"20px",fontWeight:"300",color:"black"}}>Felülvizsgálatra időpontegyeztetés céljából<br></br> keressen minket elérhetőségeinken egyikén.</h3>  
            </div>

          </div>
      <div className="serviceContainer2">
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "44px",
            // color: "grey",
            fontWeight: "300",
            lineHeight: "32px",
            letterSpacing: "0px",
          }}
        >
          SZERVIZHÁLÓZAT
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
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "16px",
          }}
        >
          Minőségi kiszolgálás az ügyfelek maximális elégedettségére. Több,mint
          10 éve Magyarország egész területén.
        </h2>

        <div className="servicesCards">
          <div>
            {/* Card 1 */}
            <Card
              className="serviceCards"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                borderRadius: "12px",
                width: "300px",
                height: "220px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "6px",
                  marginBottom: "10px",
                }}
              >
                <SpeedIcon
                  sx={{ fontSize: "38px" }}
                  style={{ color: "blue" }}
                />
              </div>
              <h5
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "400",
                  marginBottom: "3px",
                  marginTop: "6px",
                }}
              >
                GYORS
              </h5>
              <p style={{ padding: "18px", fontSize: "14px" }}>
                Kiterjedt alkatrész raktárkészletünk biztosítja a gyors
                kiszolgálást, melyet postafordultával garantálunk.
              </p>
            </Card>
          </div>
          <div>
            {/* Card 2 */}
            <Card
              className="serviceCards"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                borderRadius: "12px",
                width: "300px",
                height: "220px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "6px",
                  marginBottom: "10px",
                }}
              >
                <CrisisAlertIcon
                  sx={{ fontSize: "38px" }}
                  style={{ color: "blue" }}
                />
              </div>
              <h5
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "400",
                  marginBottom: "3px",
                  marginTop: "6px",
                }}
              >
                PRECÍZ
              </h5>
              <p style={{ padding: "18px", fontSize: "14px" }}>
                Minőségi eszközökhöz, minőségi szaktudást biztosítunk a
                tökéletes és percíz megvalósításhoz.
              </p>
            </Card>
          </div>
          <div>
            {/* Card 3 */}
            <Card
              className="serviceCards"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                borderRadius: "12px",
                width: "300px",
                height: "220px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "6px",
                  marginBottom: "10px",
                }}
              >
                <CheckCircleOutlineIcon
                  sx={{ fontSize: "38px" }}
                  style={{ color: "blue" }}
                />
              </div>
              <h5
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "400",
                  marginBottom: "3px",
                  marginTop: "6px",
                }}
              >
                NAPRAKÉSZ
              </h5>
              <p style={{ padding: "18px", fontSize: "13px" }}>
                Szerviz kollégáink évente több alkalommal vesznek részt belföldi
                és külföldi továbbképzéseken, hogy naprakész szolgáltatást
                nyújtsunk.
              </p>
            </Card>
          </div>
        </div>
        <div className="servicePartners">
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "44px",
              // color: "grey",
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
          <div className="servicePartnerList">
            <div className="servicePartnersGrid">
              <h2
                style={{
                  margin: "8px",
                  fontWeight: "300",
                  fontSize: "32px",
                  textTransform: "uppercase",
                }}
              >
                <LocationOnIcon /> Baranya megye
              </h2>
              <h5 style={{ margin: "8px", fontWeight: "400" }}>
                Propszt Árpád - XR Kft.
              </h5>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                7631 Pécs, Körömvirág utca 14.
              </h5>
              <a href="tel:0036309477203">
                <p style={{ margin: "12px" }}>
                  <PhoneIcon fontSize="28px" /> +36 30 947 7203
                </p>
              </a>
            </div>
            <div className="servicePartnersGrid">
              <h2
                style={{
                  margin: "8px",
                  fontWeight: "300",
                  fontSize: "32px",
                  textTransform: "uppercase",
                }}
              >
                <LocationOnIcon /> Bács-Kiskun megye
              </h2>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                Pálmai Gábor - Turbident Kft.
              </h5>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                6500 Baja, Radnóti utca 11.
              </h5>
              <a href="tel:0036209770045">
                <p style={{ margin: "12px" }}>
                  <PhoneIcon fontSize="28px" /> +36 20 977 0045
                </p>
              </a>
            </div>           
            <div className="servicePartnersGrid">
              <h2
                style={{
                  margin: "8px",
                  fontWeight: "300",
                  fontSize: "32px",
                  textTransform: "uppercase",
                }}
              >
                <LocationOnIcon /> Borsod-Abaúj-Zemplém megye
              </h2>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                Herman István - Herman és Társa Bt.
              </h5>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                3516 Miskolc, Borbély utca 5.
              </h5>
              <a href="tel:0036303452678">
                <p style={{ margin: "12px" }}>
                  <PhoneIcon fontSize="28px" /> +36 30 345 2678
                </p>
              </a>
            </div>
            <div className="servicePartnersGrid">
              <h2
                style={{
                  margin: "8px",
                  fontWeight: "300",
                  fontSize: "32px",
                  textTransform: "uppercase",
                }}
              >
                <LocationOnIcon /> Borsod-Abaúj-Zemplém megye
              </h2>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                Hudák Csaba - Telemedica Kft.
              </h5>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                3516 Miskolc, Polya János utca 26.
              </h5>
              <a href="tel:0036209746690">
                <p style={{ margin: "12px" }}>
                  <PhoneIcon fontSize="28px" /> +36 20 974 6690
                </p>
              </a>
            </div>
            <div className="servicePartnersGrid">
              <h2
                style={{
                  margin: "8px",
                  fontWeight: "300",
                  fontSize: "32px",
                  textTransform: "uppercase",
                }}
              >
                <LocationOnIcon /> Csongrád-csanád megye
              </h2>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                Fekete Károly - Inkumed Kft.
              </h5>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                6721 Szeged, Juhász Gyula utca 28.
              </h5>
              <a href="tel:0036309784266">
                <p style={{ margin: "12px" }}>
                  <PhoneIcon fontSize="28px" /> +36 30 978 4266
                </p>
              </a>
            </div>
            <div className="servicePartnersGrid">
              <h2
                style={{
                  margin: "8px",
                  fontWeight: "300",
                  fontSize: "32px",
                  textTransform: "uppercase",
                }}
              >
                <LocationOnIcon /> Csongrád-csanád megye
              </h2>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                Lőrincz Zsolt -{" "}
              </h5>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                {" "}
                6721 Szeged{" "}
              </h5>
              <a href="tel:0036203538026">
                <p style={{ margin: "12px" }}>
                  <PhoneIcon fontSize="28px" /> +36 20 353 8026
                </p>
              </a>
            </div>
            <div className="servicePartnersGrid">
              <h2
                style={{
                  margin: "8px",
                  fontWeight: "300",
                  fontSize: "32px",
                  textTransform: "uppercase",
                }}
              >
                <LocationOnIcon /> Fejér megye
              </h2>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                Otta Viktor - Alba Dental-shop
              </h5>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                8000 Székesfehérvár, Ybl Miklós utca 13.{" "}
              </h5>
              <a href="tel:0036209442918">
                <p style={{ margin: "12px" }}>
                  <PhoneIcon fontSize="28px" /> +36 20 944 2918
                </p>
              </a>
            </div>
            <div className="servicePartnersGrid">
              <h2
                style={{
                  margin: "8px",
                  fontWeight: "300",
                  fontSize: "32px",
                  textTransform: "uppercase",
                }}
              >
                <LocationOnIcon /> Győr-Moson-Sopron megye
              </h2>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>Alpesi Kft.</h5>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                9024 Győr, Eörsy P. utca 13.
              </h5>
              <a href="tel:0036209518312">
                <p style={{ margin: "12px" }}>
                  <PhoneIcon fontSize="28px" /> +36 20 951 8312
                </p>
              </a>
            </div>
            <div className="servicePartnersGrid">
              <h2
                style={{
                  margin: "8px",
                  fontWeight: "300",
                  fontSize: "32px",
                  textTransform: "uppercase",
                }}
              >
                <LocationOnIcon /> Győr-Moson-Sopron megye
              </h2>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                Horváth Kázmér - Kázdent Kft.
              </h5>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                9081 Győrújbarát, Veres Péter utca 168.
              </h5>
              <a href="tel:0036209376659">
                <p style={{ margin: "12px" }}>
                  <PhoneIcon fontSize="28px" /> +36 20 937 6659
                </p>
              </a>
            </div>
            <div className="servicePartnersGrid">
              <h2
                style={{
                  margin: "8px",
                  fontWeight: "300",
                  fontSize: "32px",
                  textTransform: "uppercase",
                }}
              >
                <LocationOnIcon /> Hajdú-Bihar megye
              </h2>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                Lechner Károly - Dental Medica Bt.
              </h5>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                4032 Debrecen, Doberdó utca 2.
              </h5>
              <a href="tel:0036309678641">
                <p style={{ margin: "12px" }}>
                  <PhoneIcon fontSize="28px" /> +36 30 967 8641
                </p>
              </a>
            </div>
            <div className="servicePartnersGrid">
              <h2
                style={{
                  margin: "8px",
                  fontWeight: "300",
                  fontSize: "32px",
                  textTransform: "uppercase",
                }}
              >
                <LocationOnIcon /> Pest Megye
              </h2>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                Horváth László - Medical Dental Bt.
              </h5>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                1163 Budapest, Őrmester utca 5.
              </h5>
              <a href="tel:0036702825174">
                <p style={{ margin: "12px" }}>
                  <PhoneIcon fontSize="28px" /> +36 70 282 5174
                </p>
              </a>
            </div>
            <div className="servicePartnersGrid">
              <h2
                style={{
                  margin: "8px",
                  fontWeight: "300",
                  fontSize: "32px",
                  textTransform: "uppercase",
                }}
              >
                <LocationOnIcon /> Pest megye
              </h2>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                Molnár Gábor - 2M Kkt.
              </h5>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                2700 Cegléd, Szent Imre herceg utca 17.
              </h5>
              <a href="tel:0036209228004">
                <p style={{ margin: "12px" }}>
                  <PhoneIcon fontSize="28px" /> +36 20 922 8004
                </p>
              </a>
            </div>
            <div className="servicePartnersGrid">
              <h2
                style={{
                  margin: "8px",
                  fontWeight: "300",
                  fontSize: "32px",
                  textTransform: "uppercase",
                }}
              >
                <LocationOnIcon /> Pest Megye
              </h2>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                Laki Zoltán - Nexus Dent Kft.
              </h5>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                2600 Vác, Ipoly utca 9.
              </h5>
              <a href="tel:0036309270036">
                <p style={{ margin: "12px" }}>
                  <PhoneIcon fontSize="28px" /> +36 30 927 0036
                </p>
              </a>
            </div>
            <div className="servicePartnersGrid">
              <h2
                style={{
                  margin: "8px",
                  fontWeight: "300",
                  fontSize: "32px",
                  textTransform: "uppercase",
                }}
              >
                <LocationOnIcon /> Pest Megye
              </h2>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                Varagya Péter - Zebident Kft.
              </h5>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                2627 Zebegény, Naphegy utca 25.
              </h5>
              <a href="tel:0036309623671">
                <p style={{ margin: "12px" }}>
                  <PhoneIcon fontSize="28px" /> +36 30 962 3671
                </p>
              </a>
            </div>
            <div className="servicePartnersGrid">
              <h2
                style={{
                  margin: "8px",
                  fontWeight: "300",
                  fontSize: "32px",
                  textTransform: "uppercase",
                }}
              >
                <LocationOnIcon /> Pest Megye
              </h2>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                Zvekanovics Zvonko - ZZ Dental Kft.
              </h5>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                2085 Pilisvörösvár, Amur utca 12.
              </h5>
              <a href="tel:0036209421377">
                <p style={{ margin: "12px" }}>
                  <PhoneIcon fontSize="28px" /> +36 20 942 1377
                </p>
              </a>
            </div>
            <div className="servicePartnersGrid">
              <h2
                style={{
                  margin: "8px",
                  fontWeight: "300",
                  fontSize: "32px",
                  textTransform: "uppercase",
                }}
              >
                <LocationOnIcon /> Szabolcs-Szatmár-Bereg megye
              </h2>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                Mokánszki Roland-Roli-Dent Kft.
              </h5>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                Nyíregyháza, Fazekas J. tér 17.
              </h5>
              <a href="tel:0036209885334">
                <p style={{ margin: "12px" }}>
                  <PhoneIcon fontSize="28px" /> +36 20 988 5334
                </p>
              </a>
            </div>
            <div className="servicePartnersGrid">
              <h2
                style={{
                  margin: "8px",
                  fontWeight: "300",
                  fontSize: "32px",
                  textTransform: "uppercase",
                }}
              >
                <LocationOnIcon /> Pest Megye
              </h2>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                Fülöp Ottó - Dental Maximus Kft.
              </h5>
              <h5 style={{ margin: "8px", fontWeight: "300" }}>
                1182 Budapest,Királyhágó utca 79.
              </h5>
              <a href="tel:0036203832802">
                <p style={{ margin: "12px" }}>
                  <PhoneIcon fontSize="28px" /> +36 20 383 2802
                </p>
              </a>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
