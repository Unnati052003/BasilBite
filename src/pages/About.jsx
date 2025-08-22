import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        At Pedro's Pizzeria, we believe that great pizza brings people together. What started as a small neighborhood kitchen with a big dream has now grown into a place where flavor, freshness, and family meet. Every pizza we make is crafted with love — from our hand-tossed dough and freshly made sauces to the finest locally sourced toppings.

Our mission is simple: to serve delicious, affordable, and unforgettable pizzas that keep our customers coming back for more. Whether you’re a fan of the classics like Margherita and Pepperoni, or you love to explore bold flavors like our PedroTech Special, we’ve got something for everyone.

We’re not just about food — we’re about creating memories. Every slice tells a story, and we’re honored to be a part of yours. So, grab a slice, share a laugh, and join us in celebrating the joy of pizza.
        </p>
      </div>
    </div>
  );
}

export default About;
