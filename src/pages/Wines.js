import "./Wines.css";

function Wines() {

    class Wine {
        constructor(name,grapeVariety,city,country,price){
            this.name = name;
            this.grapeVariety=grapeVariety;
            this.city=city;
            this.country=country;
            this.price=price;
            this.getFullInfo = () => {
                return this.grapeVariety+"/"+this.city+"/"+this.country;
            };

        };
    };

    const WineRose1 = new Wine("— ROSE DE XINOMAVRO ’21 —", "Thymiopoulos Vineyards", "Naoussa","Greece","€7.5 / €30");
    const WineRose2 = new Wine("— PAMIDI ’21 —", "Vourvoukeli Estate", "Xanthi","Greece","€8.5 / €35");
    const WineRose3 = new Wine("— Areni Siro ’22 —", "Areni", "Vayots Dzor","Armenia","€8 / €32");
    const WineRed1 = new Wine("— Noravank ’15 —","Areni", "Vayots Dzor","Armenia","€20 / €100");
    const WineRed2 = new Wine("— MV ’19 —","Mavroudi-Cabernet Sauvignon", " Xanthi","Greece","€9.5 / €39");
    const WineRed3 = new Wine("— RAPSANI TOURTOURA OLD VINES ’19 —","Xinomavro-Krasato-Stavroto", "Larisa","Greece","€18.5 / €80");
    const WineRed4 = new Wine("—  BELLE LURETTE ’20  —","Carignan-Mourvèdre-Grenache", "Faugeres","France","€12 / €48");
    const WineRed5 = new Wine("— Armenia ’18 —","Areni", "Ararat","Armenia","€11 / €55");
    const WineWhite1 =new Wine("— Takri ’22 —","80% Kangoun, 20% Rkatsiteli", "Artsakh","Armenia","€15.5 / €63");
    const WineWhite2 =new Wine("— MALAGOUZIA ’22 —","Assyrtiko", "Pieria","Greece","€9.5 / €39");
    const WineWhite3 =new Wine("— Karas ’22 —","Kangun 50%, Chardonnay 40%, Viognier 10%", "Armavir","Armenia","€12.5 / €57");
    const WineWhite4 =new Wine("— Pieria —","Assyrtiko", "Drama","Greece","€8 / €32");
    const WineWhite5 =new Wine("— VACQUEYRAS MINÉRAL ’17 —","Grenache blanc-Roussanne-Bourboulenc", "Rhône","France","€20.5 / €82");

    return(
     <div className="Wines">
        <div className="Rose">
            <h1>ROSE</h1>
            <h2>{WineRose1.name}</h2>
            <p>{WineRose1.getFullInfo()}</p>
            <p>{WineRose1.price}</p>
            <h2>{WineRose2.name}</h2>
            <p>{WineRose2.getFullInfo()}</p>
            <p>{WineRose2.price}</p>
            <h2>{WineRose3.name}</h2>
            <p>{WineRose3.getFullInfo()}</p>
            <p>{WineRose3.price}</p>
        </div>
        <div className="WinesBack"> </div>
        <div className="REDendWHITE">
            <div className="Red">
                <h1>RED</h1>
                <h2>{WineRed1.name}</h2>
                <p>{WineRed1.getFullInfo()}</p>
                <p>{WineRed1.price}</p>
                <h2>{WineRed2.name}</h2>
                <p>{WineRed2.getFullInfo()}</p>
                <p>{WineRed2.price}</p>
                <h2>{WineRed3.name}</h2>
                <p>{WineRed3.getFullInfo()}</p>
                <p>{WineRed3.price}</p>
                <h2>{WineRed4.name}</h2>
                <p>{WineRed4.getFullInfo()}</p>
                <p>{WineRed4.price}</p>
                <h2>{WineRed5.name}</h2>
                <p>{WineRed5.getFullInfo()}</p>
                <p>{WineRed5.price}</p>


            </div>
            <div className="White">
                <h1>WHITE</h1>
                <h2>{WineWhite1.name}</h2>
                <p>{WineWhite1.getFullInfo()}</p>
                <p>{WineWhite1.price}</p>
                <h2>{WineWhite2.name}</h2>
                <p>{WineWhite2.getFullInfo()}</p>
                <p>{WineWhite2.price}</p>
                <h2>{WineWhite3.name}</h2>
                <p>{WineWhite3.getFullInfo()}</p>
                <p>{WineWhite3.price}</p>
                <h2>{WineWhite4.name}</h2>
                <p>{WineWhite4.getFullInfo()}</p>
                <p>{WineWhite4.price}</p>
                <h2>{WineWhite5.name}</h2>
                <p>{WineWhite5.getFullInfo()}</p>
                <p>{WineWhite5.price}</p>


            </div>

        </div>

     </div>
    )

}

export default Wines;