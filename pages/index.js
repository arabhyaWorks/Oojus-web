import { useState, useEffect } from "react";
import { onValue, ref } from "firebase/database";
import database from "../firebase/config";


export default function Home() {
  const [products, setProducts] = useState();

  const fetchProducts = async () => {
    const dbRef = ref(database, "oojus-web");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      setProducts(data);
      console.log("data", data);  
    });
  }

  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <div>
      <h1 style={{color:"black"}}>this is text</h1>
    </div>
  );
}
