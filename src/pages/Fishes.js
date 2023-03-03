import "./Fishes.css";

function Fishes(){
    class Fish {
        constructor(name, recipe,price){
            this.name=name;
            this.recipe=recipe;
            this.price=price;

        }
    }

    const Fish1=new Fish("— TARAMAS - TOMATO  —","Tomato Fish Roe Salad / Baked Tomato / Bottarga / Parsley Oil","€8.5");
    const Fish2=new Fish("— WALDORF TUNA —","Nori Crust Tuna Fillet / Green Apple / Celery / Roasted Grape / Tarragon / Pecan / Sheeps Milk Yogurt Dressing / Apple-Celery Sauce","€13");
    const Fish3=new Fish("— OCTOPUS SKEWER  —","Deep Fried Polenta / Harissa Ezme / Bell Pepper Cream","€16");

    return (
        <div className="Fishes">
            <h1>{Fish1.name}</h1>
            <p>{Fish1.recipe}</p>
            <p>{Fish1.price}</p>
            <h1>{Fish2.name}</h1>
            <p>{Fish2.recipe}</p>
            <p>{Fish2.price}</p>
            <h1>{Fish3.name}</h1>
            <p>{Fish3.recipe}</p>
            <p>{Fish3.price}</p>

        </div>
    )
}

export default Fishes;