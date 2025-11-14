import React from "react";
import Livre from "./Livre";


const livres = [
  { title: "1984", author: "George Orwell", publicationYear: 1949, genre: "Dystopian", price: "89.99", image: "/logo192.png" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", publicationYear: 1960, genre: "Classic", price: "92.50", image: "/logo192.png" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publicationYear: 1925, genre: "Classic", price: "85.00", image: "/logo192.png" },
  { title: "Pride and Prejudice", author: "Jane Austen", publicationYear: 1813, genre: "Romance", price: "88.75", image: "/logo192.png" },
  { title: "Moby-Dick", author: "Herman Melville", publicationYear: 1851, genre: "Adventure", price: "90.00", image: "/logo192.png" },
  { title: "War and Peace", author: "Leo Tolstoy", publicationYear: 1869, genre: "Historical Fiction", price: "95.20", image: "/logo192.png" },
  { title: "The Alchemist", author: "Paulo Coelho", publicationYear: 1988, genre: "Philosophical Fiction", price: "90.97", image: "/logo192.png" }
];
function ListLivre() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {livres.map((livre, index) => (
        <Livre
          key={index}
          image={livre.image}
          title={livre.title}
          author={livre.author}
          year={livre.publicationYear}
          price={livre.price}
        />
      ))}
    </div>
  );
}

export default ListLivre;
