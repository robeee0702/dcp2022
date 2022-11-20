import React from "react";

const Impressum = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "24px" }}>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "48px",
          fontWeight: "300",
          lineHeight: "82px",
          letterSpacing: "0px",
        }}
      >
        IMPRESSZUM
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
        <h3>ÜZEMELTETŐ</h3>
        <p>Cégnév: Dentalcoopplus Kft.</p>
        <p>Székhely: 9700 Szombathely, Sárvár utca 12.</p>
        <p>Telephely / Levelezési cím: 9700 Szombathely, Sárvár utca 12.</p>
        <p>Adószám: 13686282-2-18</p>
        <p>Cégbejegyzés kelte és száma: 2006-02-27 / 18-09-106700</p>
        <p>Statisztikai számjel: 13686282-4646-113-18</p>
        <p>Bejegyző bíróság: Szombathelyi Törvényszék Cégbírósága</p>
        <p>Adatkezelési nyilvántartási szám:</p>
        <p>Cégvezető: Kenedli Flórián</p>
        <p>
          Elérhetőségek: E-mail: info@dentalcoopplus.hu | Telefon:
          +36-94-318-590
        </p>
        <p>Honlap: https://dentalcoopplus.hu/</p>
        <h3>TÁRHELYSZOLGÁLTATÓ</h3>
        <p>Név: Várnai Zsolt e.v.</p>
        <p>Postai cím / Székhely: 9700 Szombathely, Csillag u.16.</p>
        <p>Telefon: +36-94/ 500-111</p>
        <p>E-mail: info@alonmedia.hu</p>
      </div>
    </div>
  );
};

export default Impressum;
