import React, { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from '@mui/icons-material/Email';
import GroupIcon from '@mui/icons-material/Group';
import MessageIcon from '@mui/icons-material/Message';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import "../style/contactpage.css";
import axios from "axios";
import { TextField } from "@mui/material";

const ContactPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);

  
  const handleSubmit = async (e) => {
    if (email && phone && fullName && subject !== "") {
      if (message !== "") {
        e.preventDefault();
        setLoading(true);
        console.log({ email, message, fullName, subject, phone });

        const body = {
          email,
          message,
          subject,
          fullName,
          phone,
        };

        await axios
          .post("/contactmail", body, {
            headers: {
              "Content-type": "application/json",
            },
          })
          .then((res) => {
            alert("Email Sent Successfully");
            setLoading(false);
            console.log(res);
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      } else {
        alert("Compose Email");
      }
    } else {
      alert("Please fill all required filled");
    }
  };

  return (
<div>

    <button style={{display:"flex",justifyContent:"center", alignItems:"center",border:"none",
    fontSize:"34px",fontWeight:"300",borderRadius:"34px",color:"black",backgroundColor:"white",padding:"8px",
    marginLeft:"30px",marginTop:"14px"}} onClick={()=> setShow(!show)}>MUNKATÁRSAINK<GroupIcon style={{fontSize:"34px",marginLeft:"14px"}}/><KeyboardDoubleArrowDownIcon style={{fontSize:"28px",color:"grey"}}/></button>

    <div className={`contactPartners ${show ? "contactPartners--active" : ""}`} >

    {/* <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop:"30px"
      }}
    >
      <div className="contactLine"></div>
    </div> */}
    <div className="contactPartnerList">
      <div className="contactPartnersGrid">
        <h2
          style={{
            margin: "8px",
            fontWeight: "300",
            fontSize: "22px",
            textTransform: "uppercase",
          }}
          >
          ÉRTÉKESÍTÉS/SZERVIZ
        </h2>
        <h5 style={{ margin: "4px", fontWeight: "500" }}>
          Kenedli Flórián
        </h5>
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
      <div className="contactPartnersGrid">
        <h2
          style={{
            margin: "8px",
            fontWeight: "300",
            fontSize: "22px",
            textTransform: "uppercase",
          }}
          >
          Pénzügy/Számlázás
        </h2>
        <h5 style={{ margin: "4px", fontWeight: "500" }}>
          Gergácz Viktória
        </h5>
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
      <div className="contactPartnersGrid">
        <h2
          style={{
            margin: "8px",
            fontWeight: "300",
            fontSize: "22px",
            textTransform: "uppercase",
          }}
          >
          Ügyvitel/Marketing
        </h2>
        <h5 style={{ margin: "4px", fontWeight: "500" }}>
          Strem Patrícia
        </h5>
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
      <div className="contactPartnersGrid">
        <h2
          style={{
            margin: "8px",
            fontWeight: "300",
            fontSize: "22px",
            textTransform: "uppercase",
          }}
          >
          Ügyvitel
        </h2>
        <h5 style={{ margin: "4px", fontWeight: "500" }}>
          Jámbor Vanessa
        </h5>
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
      <div className="contactPartnersGrid">
        <h2
          style={{
            margin: "8px",
            fontWeight: "300",
            fontSize: "22px",
            textTransform: "uppercase",
          }}
          >
          Szerviz technikus
        </h2>
        <h5 style={{ margin: "4px", fontWeight: "500" }}>
          Bencsics László
        </h5>
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
      <div className="contactPartnersGrid">
        <h2
          style={{
            margin: "8px",
            fontWeight: "300",
            fontSize: "22px",
            textTransform: "uppercase",
          }}
        >
          Szerviz technikus
        </h2>
        <h5 style={{ margin: "4px", fontWeight: "500" }}>
          Schwott András
        </h5>
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






    <div className="contactContainer">
      <div className="contactContainer1">
        <h1
        className="contactH1"
          style={{
            display: "flex",
            marginLeft: "30px",
            fontWeight: "300",
            fontSize: "34px",
            lineHeight: "54px",
            letterSpacing: "0px",
          }}
        >
          KAPCSOLATFELVÉTEL <MessageIcon style={{marginLeft:"14px",fontSize: "34px"}} />
        </h1>
        <div className="contactForm">
          <form onSubmit={handleSubmit} method="post">
            <TextField
              style={{ width: "100%", marginBottom: "6px",}}
              onChange={(e) => setFullName(e.target.value)}
              required
              label="Teljes név"
              value={fullName}
              type="text"
              placeholder="Teljes név"
            />

            <TextField
              style={{ width: "100%", marginBottom: "6px" }}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              type="email"
              label="Email cím"
            />

            <TextField
              style={{ width: "100%", marginBottom: "6px" }}
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              label="Telefonszám"
            />

            <TextField
              style={{ width: "100%", marginBottom: "6px" }}
              value={subject}
              type="text"
              label="Tárgy"
              onChange={(e) => setSubject(e.target.value)}
              />

            <TextField
              style={{ width: "80%", marginBottom: "6px" }}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              label="Írjon nekünk..."
              multiline
              rows={4}
              />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "12px",
              }}
            >
              <label></label>
              <button
                className="contactButton2"
                style={{
                  border: "none",
                  color: "blue",
                  backgroundColor: " rgb(210, 208, 208)",
                  padding: "6px",
                  fontSize: "22px",
                  borderRadius: "12px"
                }}
                disabled={loading}
                type="submit"
              >
                {loading ? "Pillanat..." : "Email küldése"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="contactContainer2">
        <h3 style={{ fontSize: "32px", fontWeight: "300" }}>
          Dentalcoop Plus Kft.
        </h3>
        <p>
          <PhoneIcon /> Tel.: +36 94 318 590 ,+36 20 956 5480
        </p>
        <p>
          <PlaceIcon /> Székhely: 9700 Szombathely, Sárvár utca 12.
        </p>
        <iframe
          id="iframe1"
          width="500"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          src="https://maps.google.com/maps?width=500&amp;height=450&amp;hl=en&amp;q=dental coop plus&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          />
      </div>
    </div>
</div>
  );
};

export default ContactPage;
