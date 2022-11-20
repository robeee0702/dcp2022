import { minHeight } from "@mui/system";
import React from "react";

const Szechenyi = () => {
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
        SZÉCHENYI 2020 PROJECT
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
      <div style={{ display: "flex", flexDirection: "column", margin: "36px" }}>
        <h2>ÜZEMELTETŐ</h2>
        <p>A projekt megvalósításának kezdete: 2020.11.25.</p>
        <p>A projekt fizikai befejezési határideje: 2021.01.14</p>
        <p>Támogatás összege: 5 184 318,- Ft</p>
        <p>Támogatás mértéke: 70%</p>
        <p>Pályázó neve: Dentalcoop Plus Kereskedelmi és Szolgáltató Kft.</p>
        <p>Projekt címe: Technológiai megújulás a Dentalcoop Plus Kft-nél</p>
        <p>Szerződés száma: GINOP-1.2.8-20-2020-02582</p>
        <p></p>
        <table style={{border:"1px solid lightblue"}}>
          <thead>
            <tr style={{backgroundColor:"lightblue"}}>
              <th style={{padding:"6px"}}>A projekt támogatásával beszerzett eszközök</th>
              <th>Mennyiség</th>
              <th>Nettó beszerzési ár</th>
            </tr>
          </thead>
          <tbody >
            <tr style={{}}>
              <td style={{padding:"6px"}}>EBI 12-TP231 hőmérséklet / nyomás adatgyűjtő</td>
              <td>2</td>
              <td>2 260 300</td>
            </tr>
            <tr style={{}}>
              <td style={{padding:"6px"}}>Canon iRC3125i A/3 színes másoló szett</td>
              <td>1</td>
              <td>495 285</td>
            </tr>
            <tr style={{}}>
              <td style={{padding:"6px"}}>HP EliteDesk 705 G4 SFF Ryzen 5 Pro 2400G/8GB/256G</td>
              <td>4</td>
              <td>823 276</td>
            </tr>
            <tr style={{}}>
              <td style={{padding:"6px"}}>Apple iPad Pro 11 2020 256GB (MXDC2HC/A) tablet</td>
              <td>2</td>
              <td>574 646</td>
            </tr>
            <tr style={{}}>
              <td style={{padding:"6px"}}>Piranha Dental (255) w. Panoramic Holder</td>
              <td>1</td>
              <td>1 850 000</td>
            </tr>
            <tr style={{}}>
              <td style={{padding:"6px"}}>Lenovo ThinkPad T14s G1</td>
              <td>2</td>
              <td>862 662</td>
            </tr>
            <tr style={{}}>
              <td style={{padding:"6px"}}>OCEAN Professional (Stand-alone) szoftver</td>
              <td>1</td>
              <td>540 000</td>
            </tr>
            <tr style={{margin:"20px",minHeight:"20px"}}>
              <td></td>
              <td></td>
            </tr>
            <tr style={{margin:"20px"}}>
              <td style={{padding:"12px"}}>Projekt költségvetés összesen:</td>
              <td></td>
              <td>7 406 169</td>
            </tr>
          </tbody>
        </table>
        <p></p>
        <p>
          2019 októberében cégünk sikeresen megszerezte a jogosultságot az
          „Időszakos Felülvizsgálat Orvostechnikai Eszközökre 4/2009 (III.17.)
          EüM Rendelet Alapján”, mely alapján jogosulttá vált a panorámaröntgen,
          intraorális röntgen, autokláv és hőlégsterilizátor berendezések
          időszakos felülvizsgálatára. Ezzel a jogosultsággal versenyelőnyre
          tett szert, hiszen így már teljes szerviz-szolgáltatást tud nyújtani a
          forgalmazott/szervizelt termékek tekintetében, melyet nem sok hasonló
          termékkínálattal rendelkező forgalmazó mondhat el magáról. Úgy
          gondoljuk, hogy ezen tevékenység továbbfejlesztése jelentőse
          bevétel-növekedést eredményezhet a cég számára, hiszen a piaci
          kereslet jelenleg nagyobb, mint a kínálat, így az igények minél
          gyorsabb és minél precízebb kiszolgálása lehet a versenyelőny
          megtartásának a kulcsa.
        </p>
        <p>
          A tervezett beruházás egyik fontos lépése a felülvizsgálathoz
          szükséges eszközpark bővítése a hatékonyság növelése érdekében.
          Amennyiben a tervezett eszközbeszerzés megvalósulna, úgy szervizes
          kollégáink egyszerre egy időben több helyen is végezhetnék az
          időszakos felülvizsgálatot azonos készülékeken is, melyre jelenleg
          nincs lehetőségünk.
        </p>
        <p>
          Ehhez elengedhetetlen 2 darab Ebro EBI 12 TP-231 típusú
          hőmérséklet-nyomás adatgyűjtő, mellyel az autoklávok és
          hőlégsterilizátorok megfelelőségét vizsgáljuk, mely a tevékenység
          esszenciális része.
        </p>
        <p>
          Piranha Dental (255) Ocean Professional szoftverrel egymultifunkciós
          minőségellenőrző eszköz fogászati intraoralis és panoráma röntgenhez,
          mely szintén a felülvizsgálati tevékenységhez szükséges. A jelenlegi
          eszközünkhöz a szoftverrel nem rendelkezünk még, ezért is jelentene
          nagy előnyt, ha a kiértékelést a szoftver elvégezné és nem kellene a
          szakembernek a számolással foglalkoznia, mely a hibák kiküszöböléséhez
          is hozzájárulna.
        </p>
        <p>
          A Canon IRC3125l típusú nyomtató segítségével a jegyzőkönyvek
          nyomtatása gazdaságossá és gyorsabbá válna, mint a jelenlegi
          alapfunkciós nyomtatón. Szintén ehhez a tevékenységhez vált
          szükségessé 2 további hordozható, csúcstechnológiás laptop beszerzése:
          LenovoThinkPad E14 20RA005MHV, és 2 db Apple iPad Pro 11 2020 256 GB
          Tablet beszerzése, mellyel szervizes kollégáink már a helyszíne
          kiértékelhetik a felülvizsgálat során kapott eredményeket, így a
          kisebb javításokat akár a helyszínen is elvégezheti. Ennek másik célja
          az utazási költségek csökkentése hiszen, ha a helyszínen biztossá
          válik, hogy az eszköz hibás és javítást igényel, úgy akár a helyszínen
          javítható, vagy elhozható a műhelybe anélkül, hogy még egyszer emiatt
          utazni kellene a helyszínre.
        </p>
        <p>
          A tevékenység gyakorlásával elérhető bevétel növekedés eredményeként a
          munka folytonossága következében stabilan biztosítottá válna a 7 fő
          foglalkoztatása, valamint a bővülés lehetőségével akár új
          munkavállalók felvétele is lehetségessé válna, a megnövekedett igények
          kiszolgálására.
        </p>
        <p>
          A 4 darab HP EliteDesk 705 G4 SFF (4KV26EA) asztali számítógép
          beszerzése azért vált szükségessé, mert cégünk a korábbiakban nem
          rendezkedett be a járványügyi helyzet következtében létfontosságúvá
          vált otthoni munkavégzésre. Az irodai felszereltség részenként a 4
          darab számítógép lehetővé tenné, hogy munkatársaink otthonról,
          laptopok segítségével rácsatlakozzanak a hálózatra és elvégezzék az
          irodai munka kb. 90%-át úgy, hogy közben otthon vannak. Azért fontos
          az asztali számítógépek beszerzése, mivel a hálózati programok
          (szállítólevek készítése, számlázás) csak az irodában érhetőek el.
        </p>
        <p>
          A technológiai megújulás hatására jelentős mértékben megnövekszik a
          vállalkozás szolgáltatói kapacitása, a dolgozók munkavégzésének
          hatékonysága. Az új eszközök a korábbiaknál nagyobb
          energiahatékonyságúak, így használatukkal jelentős
          költségmegtakarítást tudunk elérni.
        </p>
        <p>
          A technológiai korszerűsítés azonnal érzékelhető hatást gyakorol a
          vállalkozás működésére, javul a versenyképességünk, képesek leszünk
          megfelelni az új kihívásoknak. Piaci pozícióink megerősödésével
          biztosítani tudjuk a foglalkoztatottak megtartását, a létszám
          mérsékelt ütemű növelését.
        </p>
      </div>
    </div>
  );
};

export default Szechenyi;
