import Card from "./Card";
import "./productCard.css";
const Product = () => {
  const shoes = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/27503497/pexels-photo-27503497/free-photo-of-zapatilla-negras.png?auto=compress&cs=tinysrgb&w=600",
      brand: "Adidas",
      text: "Uploaded on July 31st, 2024 at 8:11 AM",
      price: 15,
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      brand: "Adidas",
      text: "Uploaded on July 31st, 2024 at 8:11 AM",
      price: 55,
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/27503498/pexels-photo-27503498/free-photo-of-zapatillas-negras.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
      brand: "Adidas",
      text: "Uploaded on July 31st, 2024 at 8:11 AM",
      price: 25,
    },
  ];

  return (
    <div>
      {shoes.map((s) => {
        return <Card key={s.id} {...s} />;
      })}
    </div>
  );
};

export default Product;
