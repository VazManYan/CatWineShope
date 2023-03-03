import "./Salads.css";

function Salads(){
    class Salad {
        constructor(name, recipe,price){
            this.name=name;
            this.recipe=recipe;
            this.price=price;

        }
    }

    const Salad1 =new Salad("— SALAD PERSIMMON —"," Spicy Baby Greens / Compressed Persimmon / Tamarind-Ginger Dressing / Feta Cream / Multi Grain Cracker / Spearmint" ,"€10.5");
    const Salad2 =new Salad("— POTATO  —","Beurre Noisette Pureé / Roseval Potatoes / Mayo-Buttermilk Dressing / Pickled Mustard Salsa Verde / Oka Potato Flakes / Fried Onion-Caper Crumble/ Cured Egg Yolk / Mizuna","€11.5")
    return(
        <div className="Salads">
            <h1>{Salad1.name}</h1>
            <p>{Salad1.recipe}</p>
            <p>{Salad1.price}</p>
            <h1>{Salad2.name}</h1>
            <p>{Salad2.recipe}</p>
            <p>{Salad2.price}</p>
            
        </div>
    )
}

export default Salads;