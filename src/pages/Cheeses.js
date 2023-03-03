import "./Cheeses.css";


function Cheeses (){

    class Cheese {
        constructor(name,milk,country,price) {
            this.name = name;
            this.milk = milk;
            this.country = country;
            this.price =price;
            this.getFullInfo = () => {
                return this.milk+"/"+this.country ;
            };
        }
    }
    const Cheese1 = new Cheese("—  LORI FROM EGHEGNUT —", "30 Months Old/100% Cow's Milk", "Armenia", "€10.5");
    const Cheese2 = new Cheese("—  VOLAKI FROM ANDROS  — ", "100% Cow's Milk", "Greece", "€4.0");
    const Cheese3 = new Cheese("— BLEU DE QUEYRAS  —", "Cow", "France","€7.5");
    const Cheese4 = new Cheese("—  REBETIKO FROM SYROS  — ", "Cow & Goat","Greece","€6.0");
    
    
    
    return (
      <div className="Cheeses">
        <h1>{Cheese1.name}</h1>
        <p>{Cheese1.getFullInfo()}</p>
        <p>{Cheese1.price}</p>
        <h1>{Cheese2.name}</h1>
        <p>{Cheese2.getFullInfo()}</p>
        <p>{Cheese2.price}</p>
        <h1>{Cheese3.name}</h1>
        <p>{Cheese3.getFullInfo()}</p>
        <p>{Cheese3.price}</p>
        <h1>{Cheese4.name}</h1>
        <p>{Cheese4.getFullInfo()}</p>
        <p>{Cheese4.price}</p>
      </div>
          
    );
    
};



 
export default Cheeses;