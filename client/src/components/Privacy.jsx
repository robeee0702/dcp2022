import React from "react";
import "../style/aboutpage.css";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const Privacy = () => {


  return (
    <center>
      <div
        style={{
          margin: "60px",
          height: "750px",
        }}
      >
        {/* Using the same version that is installed !!! */}
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
         <div style={{padding:"80px"}}>
         <Viewer fileUrl="/aszf.pdf" />
         </div>
        </Worker>
      </div>
    </center>


    // <div style={{display:"flex",flexDirection:"column",margin:"14px"}}>
    //   <h1
    //     style={{
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       fontSize: "48px",
    //       fontWeight: "300",
    //       lineHeight: "82px",
    //       letterSpacing: "0px",
    //     }}
    //   >
    //     ADATVÉDELMI NYILATKOZAT
    //   </h1>
    //   <div
    //     style={{
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <div className="aboutLine"></div>
    //   </div>
    //   <div className="aboutText">
    //     <h5>BEVEZETŐ</h5>
    //     <p>
    //       Számunkra nagyon fontos, hogy betartsuk az aktuálisan érvényes
    //       adatvédelmi szabályozást és törvényeket, így az alábbiakban
    //       részletesen tárgyaljuk, bemutatjuk a www.dentalcoopplus.hu és a
    //       Dentalcoopplus Kft. adatvédelemre irányuló lépéseit, és az
    //       adatgyűjtéssel kapcsolatos folyamatait.
    //     </p>
    //     <p>
    //       Az adatokat a honlap tulajdonos és működtetője a Dentalcoopplus Kft.
    //       kezeli. Cégünk felelősséget vállal a személyes adatok kezeléséért, a
    //       weboldal látogatók személyiségi jogainak védelméért.
    //     </p>
    //     <p>
    //       A Dentalcoopplus Kft. jogosult az adatkezelési elvek
    //       megváltoztatására, aminek esetén az új adatkezelési elveket feltölti a
    //       honlapra. A honlap használatával elfogadja az adatkezelési elveket a
    //       jelen nyilatkozat IX. pontjában foglaltak értelmében.
    //     </p>
    //     <h5>Kapcsolati adatok:</h5>
    //     <p>Teljes jogi név: Dentalcoopplus Kft.</p>
    //     <p>E-mail cím: info@dentalcoopplus.hu</p>
    //     <p>Postai cím: H-9700 Szombathely, Sárvár utca 12.</p>
    //     <p>I. KEZELT SZEMÉLYES ADATOK KÖRE, ÉS AZ ADATKEZELÉS CÉLJA</p>
    //     <h5>A személyes adatok köre:</h5>
    //     <p>
    //       A személyes adatok azok, amik egyértelműen lehetővé teszik egy egyén
    //       pontos azonosítását.
    //     </p>
    //     <h6>
    //       Az www.dentalcoopplus.hu oldalon az alábbi személyes adatokat
    //       kezeljük, a jogalap pontos megjelölésével:
    //     </h6>
    //     <h4>Kommunikációs adatok</h4>
    //     <p>
    //       Ide tartozik bármilyen üzenet, amit a weboldalon keresztül, e-mailben,
    //       közösségi média üzenetben, vagy bármilyen kommunikációs formában
    //       juttat el hozzánk. Ezeket az adatokat azért dolgozzuk fel és tartjuk
    //       meg, hogy a rendeléseket teljesíteni tudjuk, és hogy esetleges jogi
    //       igények esetén döntési alapot szolgáltassanak. A jogalapunk ennek a
    //       feldolgozására a felhasználó igazolható érdeklődése a tevékenységünk
    //       felé, ami megnyilvánul a nekünk címzett üzenetekben.
    //     </p>
    //     <h4>Felhasználói adatok</h4>
    //     <p>
    //       Amibe beletartoznak a weboldal használata során keletkező adatok, amik
    //       lehetővé teszik az oldal technikai működését, hogy az oldal
    //       biztonságát megőrizzük, hogy mentéseket tároljunk a felhasználók
    //       tevékenységéről, és hogy mindig a lehető legrelevánsabb tartalmat
    //       biztosítsuk. Az adatok feldolgozásának jogalapja a felhasználó
    //       egyértelmű érdeklődése a tevékenységünk felé, aminek a biztosításához
    //       és az oldal technikai működéséhez ezeknek a tárolása szükséges.
    //     </p>
    //     <h4>Technikai adatok</h4>
    //     <p>
    //       Amibe beletartoznak az oldal használata során keletkezett adatok, mint
    //       az IP cím, a bejelentkezési infók, böngészőadatok, az egyes oldalak
    //       látogatási ideje, oldalmegtekintések és navigációs utak, az oldalak
    //       látogatásának száma és időpontja, időzónák, és a készülék adatai,
    //       amivel az oldal megtekintésre kerül. Az adatok forrása az analitikai
    //       szoftverünk. Ezeket az adatokat azért dolgozzuk fel, hogy kielemezzük
    //       a felhasználók szokásait az oldalon, megőrizzük az oldalunk
    //       biztonságos működését, és megértsük az egyes marketingdöntéseink
    //       hasznosságát. Az adatok feldolgozásának jogalapja a felhasználó
    //       egyértelmű érdeklődése a tevékenységünk felé, ami lehetővé teszi a
    //       számunkra, hogy a biztonsági elvárásoknak megfelelően feldolgozzuk
    //       ezeket az adatokat, és az üzlet növelésére felhasználjuk a hatásosabb
    //       működés érdekében.
    //     </p>
    //     <h4>Marketing adatok</h4>
    //     <p>
    //       Amibe beletartoznak a látogató preferenciái, hogy milyen
    //       marketingtartalmat fogad tőlünk szívesen. Ezeket az adatokat azért
    //       dolgozzuk fel, hogy azokhoz a termékeinkhez/szolgáltatásainkhoz
    //       kapcsolódó reklámot küldjünk, ami felé a felhasználó érdeklődést
    //       fejezett ki. Az adatok feldolgozásának jogalapja a felhasználó
    //       egyértelmű érdeklődése a tevékenységünk felé, ami lehetővé teszi a
    //       számunkra, hogy a biztonsági elvárásoknak megfelelően feldolgozzuk
    //       ezeket az adatokat, és az üzlet növelésére felhasználjuk a hatásosabb
    //       működés érdekében. A gyűjtött adatokat időnként felhasználhatjuk olyan
    //       célokra, mint célzott, releváns hirdetések biztosítása a Facebook™
    //       platformon, illetve különböző dinamikus hirdetési felületeken, és
    //       mérjük a hirdetések hatásos működését. Az adatok feldolgozásának
    //       jogalapja a felhasználó egyértelmű érdeklődése a tevékenységünk felé,
    //       ami lehetővé teszi a számunkra, hogy a biztonsági elvárásoknak
    //       megfelelően feldolgozzuk ezeket az adatokat, és az üzlet növelésére
    //       felhasználjuk a hatásosabb működés érdekében. A tevékenységünk során
    //       nem gyűjtünk olyan érzékeny adatokat, mint etnicitás, vallási
    //       szemlélet, szexuális élet és orientáció, politikai vélemények és
    //       szakszervezeti tagság vagy egészségügyi háttér, és genetikai vagy
    //       biometrikai információk. A megrendeléssel és a számlázással
    //       kapcsolatos adatkezelés Az adatkezelés jogalapja az EU 2016/679
    //       rendelete II fejezet 6.cikk, (1) b pont, amely kimondja, hogy az
    //       adattkezelés olyan szerződés teljesítéséhez szükséges, amelyben az
    //       érintett egyik fél, vagy az a szerződés megkötését megelőzően az
    //       érintett kérésére történő lépések megtételéhez szükséges. Az
    //       adatkezelés célja a jogszabályoknak megfelelő számla kiállítása és a
    //       számviteli bizonylat-megőrzési kötelezettség teljesítése. Az Sztv. 169
    //       (1)-(2) bekezdése alapján a gazdasági társaságoknak a könyviteli
    //       elszámolást közvetlenül és közvetetten alátámasztó számviteli
    //       bizonylatot meg kell őrizniük. Kezelt adatok köre: név, cím, email
    //       cím, telefonszám Adatkezelés időtartama: A kiállított számlákat az
    //       Sztv. 169 (2) bekezdés alapján 8 évig meg kell őriznünk Műszaki háttér
    //       biztosításához kapcsolódó adatkezelés (szerviz partnerek) Az
    //       adatkezelés jogalapja az EU 2016/679 rendelete II fejezet 6.cikk, (1)
    //       c pont, amely kimondja, hogy az adattkezelés olyan szerződés
    //       teljesítéséhez szükséges, amelyben az érintett egyik fél, vagy az a
    //       szerződés megkötését megelőzően az érintett kérésére történő lépések
    //       megtételéhez szükséges. Az adatkezelés célja, hogy a termék
    //       üzemeltetéséhez szükséges műszaki hátteret, a felek között létrejött
    //       szerződéses jogviszony alapján, szerződéses partnerünk
    //       közreműködésével biztosítsuk az Ön számára. Kezelt adatok köre: név,
    //       cím, telefonszám, email cím Adatkezelés időtartama: A berendezés
    //       használatának időtartama
    //     </p>
    //     <h6>1/B) Megjegyzés a személyes adatokra vonatkozóan</h6>
    //     <p>
    //       Harmadik fél részére semmilyen célból nem kerül eladásra, ill.
    //       kölcsönzésre személyes információ. Bizonyos speciális esetekben, a
    //       következő körülmények között teszünk közzé személyes információit,
    //       továbbiakban: „támogató szolgáltatások” az alábbiak szerint
    //       részletezve, amely támogató szolgáltatások a Dentalcoopplus Kft.
    //       részére nyújtó harmadik felekre ugyanaz a magas adatvédelmi szabvány
    //       vonatkozik: IT szolgáltatók, és a számítástechnikai rendszereken
    //       hibaelhárítást és karbantartást végző szolgáltatók, támogató
    //       szolgáltatások nyújtásával megbízott harmadik fél, akiknek hozzáférése
    //       lehet az Ön által megadott információkhoz annak érdekében, hogy a
    //       szolgáltatásokat teljesíteni tudják. Szakértői partnerek, mint
    //       ügyvédek, könyvelők, bankárok, biztosítók. Kormányzati szervek, amik a
    //       tevékenységünkről kérnek beszámolást. Fizetési szolgáltatók, akik
    //       biztonságosan kezelik a bankkártya adatokat. Futárszolgálatok, akik
    //       teljesítik a bejövő rendeléseket a megadott szállítási címre.
    //     </p>
    //     <h5>Nemzetközi adattranszferek</h5>
    //     <p>
    //       A felhasználók adatait időnként az üzletmenet fenntartása érdekében
    //       szükségszerű megosztanunk az Európai Gazdasági Térségen (EGT) kívül
    //       szolgáltató partnerekkel. Az EGT-n kívüli országok sok esetben nem
    //       biztosítanak azonos szintű védelmet az adatoknak, ezért az európai
    //       törvények tiltják az adatok kivitelét, a megfelelő feltételek
    //       teljesülésének hiányában. Bármikor, amikor a személyes adatok az EGT-n
    //       kívülre kerülnek megtesszük a 4. pontban tárgyalt lépéseken felül az
    //       alábbiakat az adatok biztonságos kezelésének érdekében: -Csak olyan
    //       országokba továbbítjuk az adatokat, amiket az Európai Bizottság
    //       adatbiztonság szempontjából megfelelőnek tart. -Csak olyan USA bázisú
    //       szolgáltatásokat használunk, amik része az EU-US Privacy Shield
    //       elnevezésű adatbiztonsági kezdeményezésnek. Ha a fentiek nem
    //       teljesülnek, a kifejezett hozzájárulását kérjük a felhasználóknak az
    //       adattranszfer megtételére. A hozzájárulás bármikor visszavonható.
    //     </p>
    //     <h5>Külső oldalakra vezető linkek</h5>
    //     <p>
    //       Ez az oldal időnként tartalmaz külső oldalakra vezető linkeket, vagy
    //       az oldalba beágyazva találhatóak kódrészletek, amik külső
    //       szolgáltatások működését biztosítják. Ezeknek a linkeknek a
    //       kattintása, vagy a beágyazott megoldások használata lehetővé teheti
    //       külső partnereknek, hogy adatokat gyűjtsenek a felhasználókról. Bár
    //       mindent megteszünk a partnerek megfelelő átvizsgálása érdekében, de
    //       nincs irányításunk az ő adatvédelmi elveik felett, és nem vagyunk
    //       felelősek az ő adatkezelési elveikért.
    //     </p>
    //     <h5>II. NEM SZEMÉLYES ADATOK KÖRE</h5>
    //     <p>
    //       A Dentalcoopplus Kft. is gyűjt statisztikai célra személyes
    //       azonosításra nem alkalmas információkat az alábbi célokra: pl. a
    //       weboldal látogatók számának követése, hány felhasználó töltötte le a
    //       weboldal egyes oldalait, valamint a látogatóink
    //       internetszolgáltatóinak domain nevét. Ezeket az statisztikai
    //       információkat arra használjuk, hogy megértsük, hogyan használják
    //       látogatóink weboldalainkat, ezáltal javítva szolgáltatásainkat. Ebben
    //       a folyamatban személyes adatokat nem osztunk meg.
    //     </p>
    //     <h5>III. HOGYAN GYŰJTÜNK ADATOKAT?</h5>
    //     <p>
    //       Személyes adatokat gyűjthetünk olyan módon, hogy a felhasználó
    //       direkten biztosítja a számunkra (például hírlevélre történő
    //       feliratkozással, vagy egy üzenet küldésével). Továbbá bizonyos
    //       adatokat automatikusan kerülnek gyűjtésre az oldal használata során,
    //       például ú.n. “cookie”-kal és hasonló technológiákkal. Ezek csak a
    //       felhasználó hozzájárulásának megadása után lépnek működésbe. Bővebb
    //       információért kérjük nézze meg a Cookie Nyilatkozatunkat. Bizonyos
    //       adatokat külső partnerektől fogadunk, mint például analitikai
    //       szolgáltatóktól, mint a Google (EU-n kívüli partner), hirdetési
    //       hálózatoktól, mint a Facebook™ (EU-n kívüli partner), illetve fizetési
    //       lehetőséget biztosító partnerek.
    //     </p>
    //     <h5>IV. AZ ADATVÉDELEMMEL KAPCSOLATOS GYAKORLATI LÉPÉSEINK</h5>
    //     <p>
    //       A Dentalcoopplus Kft. számára rendkívül fontos a felhasználók
    //       adatainak védelme, és a hatályos szabályozásnak való megfelelés. Az
    //       űrlapokon megadott és oldalon keletkező adatok védelme érdekében SSL
    //       minősítést alkalmazunk a teljes weboldalon (Let’s Encrypt Authority X3
    //       certifikáció). Az oldal támadás elleni védelme érdekében prémium
    //       biztonsági szoftvert (iThemes Security Pro) alkalmazunk, hogy ú.n.
    //       “brute force” és vírusos támadások ellen védjük a tárolt adatokat. Az
    //       oldal adatbázisaiban a felhasználói adatok titkosított formában
    //       (pszeudonimizált módon) vannak tárolva, így nem olvashatóak külső fél
    //       számára. Jelen adatvédelmi nyilatkozatban űrlapokon keresztül
    //       biztosítjuk a felhasználók számára a személyes adataik kezeléséről
    //       információ igénylését, a személyes adataik módosítását vagy törlését.
    //       Időnként az üzleti tevékenységünk érdekében szükségszerű szolgáltató
    //       partnereink számára adatokat biztosítani (például tárhelyszolgáltató,
    //       futárcég, hírlevélküldő szoftver). Ilyen esetben mindig úgy
    //       választunk, hogy a GDPR rendelet elvárásainak megfeleljenek, és USA
    //       bázisú partner esetében az EU-US Privacy Shield adatvédelmi
    //       kezdeményezésben részt vegyenek, valamint adatkezelési szerződést
    //       iratunk velük alá, biztosítva az adatok felelős kezelését.
    //     </p>
    //     <h5>V. MARKETING KOMMUNIKÁCIÓ</h5>
    //     <p>
    //       A vállalkozás tevékenysége során nélkülözhetetlen fontosságú
    //       marketingkommunikáció folytatása. Az ezzel kapcsolatos adatkezelés
    //       jogalapja az érdeklődés mutatása a szolgáltatásaink felé, vagy a
    //       felhasználók kifejezett hozzájárulása. Az Európai Unió Privacy and
    //       Electronic Communications Regulations (PECR) szabályozása alapján
    //       marketingcélú üzeneteket küldünk a felhasználóinknak, ha vásároltak
    //       tőlünk, vagy kifejezetten hozzájárultak marketingüzenetek fogadásához.
    //       A hozzájárulás felfüggesztését, és az üzenetekről való leiratkozást
    //       minden esetben jól látható módon lehetővé tesszük. Minden egyes e-mail
    //       alján megtalálható a leiratkozáshoz szükséges link, vagy az
    //       adatbázisból való eltávolítás kérhető az info@dentalcoopplus.hu e-mail
    //       címen. A marketing kommunikációról való leiratkozás esetén is
    //       küldhetünk üzeneteket, de csak a rendelések teljesítésére vonatkozóan.
    //     </p>
    //     <h5>VI. ADATKEZELÉS IDŐTARTAMA</h5>
    //     <p>
    //       A felhasználók adatait mindig csak addig tároljuk, amíg
    //       jogi/könyvelési/adatszolgáltatási kötelezettségeink azt kötelezővé
    //       teszik, illetve a szolgáltatás működtetéséhez szükséges. Amikor a
    //       tárolás időtartamáról döntünk, figyelembe vesszük az adatok
    //       mennyiségét, jellegét és érzékenységét, és a kiszivárgásának
    //       potenciális hatását adatvédelmi incidens esetén. Adózási okokból
    //       szükséges megőriznünk a vásárlók számlázási és vásárlási adatait
    //       legalább 8 évig, hogy jogi kötelezettségeinknek eleget tegyünk.
    //       Bizonyos körülmények között anonimizált formában felhasználhatjuk az
    //       adatokat statisztikai célokra, ami esetben tájékoztatás nélkül
    //       tároljuk korlátlan ideig az adatokat.
    //     </p>
    //     <h5>VII. A LÁTOGATÓ JOGAI</h5>
    //     <p>
    //       Lépjen kapcsolatba velünk! Az Önnel kapcsolatos nálunk tárolt
    //       információiról másolatot kérhet, ill. bármikor visszavonhatja
    //       információinak a fent említett módon történő felhasználásra vonatkozó
    //       beleegyezését, címünkre eljuttatott felkeresésével. Az Európai Unió
    //       állampolgáraként a General Data Protection Regulation (GDPR)
    //       elnevezésű törvény a következő jogokat biztosítja az oldal
    //       felhasználóinak: a, Hozzáférés a személyes adatokhoz Az oldal
    //       felhasználóinak jogában áll kérnie egy másolatot a Dentalcoopplus Kft.
    //       által tárolt személyes adatokról. A kérés általános esetben ingyenesen
    //       teljesítésre kerül, a kérvényezés után 14 napon belül. Ismételt,
    //       visszaélésszerű, indok nélküli adatkérvényezés esetén a Dentalcoopplus
    //       Kft. egy mérsékelt összeget számíthat fel az adatok biztosítására, és
    //       további időre lehet szükség az adatok biztosításához. Továbbá a
    //       Dentalcoopplus Kft. kéri a személyazonosság bizonyítását az adatok
    //       kiadása előtt, megelőzendő a visszaélésszerű használatot. A személyes
    //       adatok kikéréséhez kérjük lépjen velünk kapcsolatba az
    //       info@detnalcoopplus.hu email címen. A mail tárgyában kérjük tüntesse
    //       fel az Ön által kért adatmódosítást, mely a következő lehet:
    //       Adatigénylés / Adattörlés /Adatkorlátozás. b, Személyes adatok
    //       módosítása Amennyiben a személyes adatok módosultak, vagy tévesen
    //       lettek megadva, a felhasználóknak joga van az adatok módosítását
    //       kérni. A személyes adatok módosításához kérjük keressen fel minket az
    //       a info@dentalcoopplus.hu e-mail címen. c, Személyes adatok törlésének
    //       kérése A felhasználóknak joga van az összes személyes adatuk törlését
    //       kérni. A kérést ingyenesen teljesítjük a kérést követő 14 napon belül.
    //       A személyes adatok törlése után a felhasználói fiók nem lesz elérhető,
    //       így az esetleg megvásárolt anyagok is elérhetetlenné válnak, mivel a
    //       felhasználói fiókhoz kapcsolódó személyes adatok elengedhetetlenül
    //       szükségesek a szolgáltatás eléréséhez. A Dentalcoopplus Kft. kéri a
    //       személyazonosság bizonyítását a személyes adatok törlése előtt,
    //       megelőzendő a visszaélésszerű használatot. A személyes adatok
    //       törléséhez kérjük használja a fenti kapcsolatfelvételi űrlapot. d, A
    //       személyes adatok feldolgozásának korlátozásának kérése A
    //       felhasználóknak joga van kérésben korlátozni az adataik rendelkezésére
    //       bocsátását harmadik felek (szolgáltató partnerek) számára. A kérés
    //       benyújtása során megnevezhetőek a korlátozni kívánt szolgáltató
    //       partnerek is. Fontos megjegyezni, hogy bizonyos szolgáltatókkal való
    //       együttműködés nélkülözhetetlen az oldal működéséhez (pl: Barion, mint
    //       fizetési szolgáltató), így az ő korlátozásuk esetén az oldal
    //       szolgáltatásai elérhetetlenné válnak a felhasználó számára. A
    //       Dentalcoopplus Kft. kéri a személyazonosság bizonyítását a személyes
    //       adatok átadásának korlátozása előtt, megelőzendő a visszaélésszerű
    //       használatot. A személyes adatok átadásának korlátozásához kérjük
    //       használja a fent említett mail címet.
    //     </p>
    //     <h6>Nemzeti Adatvédelmi és Információszabadság Hatóság</h6>
    //     <p>
    //       Magyarországon az adatvédelemmel foglalkozó hivatalos szerv a Nemzeti
    //       Adatvédelmi és Információszabadság Hatóság (NAIH). A felhasználók az
    //       adatvédelemmel kapcsolatos jogaikról a NAIH honlapján tájékozódhatnak
    //       bővebben.
    //     </p>
    //     <h6>Nemzeti Adatvédelmi és Információszabadság Hatóság,</h6>
    //     <p>
    //       1125 Budapest, Szilágyi Erzsébet fasor 22/C., Levelezési cím: 1530
    //       Budapest, Pf.: 5.,
    //     </p>
    //     <p>Telefon: 06.1.391.1400,</p>
    //     <p>Fax: 06.1.391.1410,</p>
    //     <p>E-mail: ugyfelszolgalat@naih.hu</p>
    //     <p>Honlap: http://www.naih.hu</p>
    //     <h5>VIII. ANONIMIZÁLT ADATOK ÉS “COOKIE-K”</h5>
    //     <p>
    //       A www.dentalcoopplus.hu oldalon, e-mail üzenetekben és hirdetésekben
    //       használ ú.n. “cookie”-kat vagy ismertebb néven sütiket és hasonló
    //       technológiákat, mint követőkódok, re-marketing címkék, pixelek, amik a
    //       felhasználó hozzájárulása után lépnek működésbe. Ezek a technológiák
    //       segítenek nekünk jobban megérteni a felhasználók viselkedését és
    //       érdeklődését, így segítve a magasabb színvonalú és hatékonyabb
    //       működésünket. A célunk az, hogy a www.dentalcoopplus.hu használata
    //       felhasználóbarát és személyes legyen. Amennyiben a felhasználó
    //       szeretné megtiltani ezeknek a technológiáknak a nem személyes adatok
    //       rögzítését, az megtehető az alábbi módokon: – a webhelyen megjelenő
    //       cookie figyelmeztetések segítségével letiltható ezek betöltődése. – a
    //       böngészőben a “cookie”-k letiltásával. Bármilyen esetben is használunk
    //       sütiket, nem gyűjtünk össze olyan információkat, amelyek személyesen
    //       azonosítják Önt. Az egyetlen olyan személyes azonosító információ,
    //       amelyet a Dentalcoopplus kft. közvetlenül begyűjt, az az Ön által
    //       önkéntesen megadott információ. Önnek módjában áll engedélyeznie vagy
    //       elutasítania a sütiket. A legtöbb Internetes böngésző automatikusan
    //       engedélyezi a sütiket, de böngészője beállításainak módosításával Ön
    //       elutasíthatja ezeket, illetve, amennyiben úgy kívánja, a süti
    //       tárolását megelőzően figyelmeztetést is kaphat. Kérjük, amennyiben
    //       többet szeretne megtudni ezekről a funkciókról, és pontosítani kívánja
    //       süti beállításait, tekintse meg Internetes böngészőjének utasításait
    //       vagy segítő képernyőjét. Amennyiben úgy dönt, hogy a sütiket
    //       elutasítja, előfordulhat, hogy Honlapunk vagy más honlapok interaktív
    //       funkcióit nem tudja majd teljes egészében kihasználni. A
    //       www.dentalcoopplus.hu található további cookie-kkal és követőkódokkal
    //       kapcsolatban további információt találhat a Cookie Nyilatkozatunkban.
    //     </p>
    //     <h5>IX. MÓDOSÍTÁSOK </h5>
    //     <p>
    //       Alkalmanként módunkban áll megváltoztatni jelen Adatvédelmi
    //       Nyilatkozatunkat. Amennyiben lényegbevágó változtatásunkat hajtunk
    //       végre, ezekről értesítést is közölhetünk honlapunkon. Szeretnénk
    //       javasolni, hogy időnként tekintse át újra jelen Adatvédelmi
    //       Nyilatkozatunkat annak érdekében, hogy naprakész tájékoztatást
    //       kaphasson arról, hogy milyen módon próbáljuk megvédeni az általunk
    //       begyűjtött személyes azonosító információkat. Honlapunk folyamatos
    //       használatával Ön elfogadja Adatvédelmi Nyilatkozatunkat és az általunk
    //       végrehajtott változtatásokat is. Az anyag aktualizálásának dátuma:
    //       2019.szeptember 02.
    //     </p>
    //   </div>
    // </div>
  );
};

export default Privacy;
