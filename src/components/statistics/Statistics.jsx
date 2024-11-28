import Hero from "../Hero";
import { Helmet } from "react-helmet-async";



const data = [
  {
    name: "Laptop Pro 15",
    rating: 4.7,
    price: 800,
  },
  {
    name: "Gaming Laptop Z5",
    rating: 4.8,
    price: 967,
  },
  {
    name: "Apple-iPhone-X",
    price: 1397,
    rating: 4.6,
  },
  {
    name: "iPhone 16 Pro Max",
    price: 1480,
    rating: 4.4,
  },
  {
    name: "Smart Watch Fit",
    price: 1520,
    rating: 4.6,
  },
  {
    name: "Bluetooth Earbuds",
    price: 1400,
    rating: 4.9,
  },
  {
    name: "MacBook Air 13",
    price: 1400,
    rating: 4.5,
  },
];

 const Statistics =() => {
  

  
    return (
      <div>
        <Helmet>
        <title>Statistics || Gadget Heaven</title>
        </Helmet>

        <div>
          <Hero></Hero>
        </div>

        <div className="md:max-w-7xl mx-auto mb-3">
          <div className="py-6">
            <h3 className="text-2xl font-bold text-gray-800">Statistics</h3>
          </div>

          <div className="bg-white rounded-lg">
            
          </div>
        </div>
      </div>
    );
  }
  export default Statistics