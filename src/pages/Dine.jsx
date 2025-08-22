import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/Dine.module.css";

import bgImage from "../assets/images/roombg.png";

// ---------------- VEG IMAGES ----------------
import sweetCornSoup from "../assets/images/veg-menu/sweetcorn-soup.jpg";
import tomatoShorba from "../assets/images/veg-menu/tomato-shorba.jpg";
import manchowSoup from "../assets/images/veg-menu/manchow.jpg";
import hotSourSoup from "../assets/images/veg-menu/hot-sour.jpg";
import paneerTikka from "../assets/images/veg-menu/paneer-tikka.jpg";
import haraBhara from "../assets/images/veg-menu/hara-bhara-kabab.jpg";
import vegSeekh from "../assets/images/veg-menu/veg-seekh.jpg";
import alooTikki from "../assets/images/veg-menu/aloo-tikki.jpg";
import paneerButter from "../assets/images/veg-menu/paneer-butter-masala.jpg";
import dalMakhani from "../assets/images/veg-menu/dal-makhani.jpg";
import chole from "../assets/images/veg-menu/chole.jpg";
import vegBiryani from "../assets/images/veg-menu/veg-biryani.jpg";
import kachumber from "../assets/images/veg-menu/kachumber-salad.jpg";
import sprouts from "../assets/images/veg-menu/sprouts-salad.jpg";
import fruitChaat from "../assets/images/veg-menu/fruit-chaat-salad.jpg";
import cornCucumber from "../assets/images/veg-menu/corn-cucumber-salad.jpg";

// ---------------- NON-VEG IMAGES ----------------
import chickenShorba from "../assets/images/nonveg-menu/chicken-shorba.jpg";
import chickenSweetCorn from "../assets/images/nonveg-menu/chicken-sweetcorn.jpg";
import hotSourChicken from "../assets/images/nonveg-menu/hot-sour-chicken.jpg";
import chickenManchow from "../assets/images/nonveg-menu/chicken-manchow.jpg";
import chickenTikka from "../assets/images/nonveg-menu/chicken-tikka.jpg";
import muttonSeekh from "../assets/images/nonveg-menu/mutton-seekh.jpg";
import chickenWings from "../assets/images/nonveg-menu/chicken-wings.jpg";
import fishAmritsari from "../assets/images/nonveg-menu/fish-amritsari.jpg";
import butterChicken from "../assets/images/nonveg-menu/butter-chicken.jpg";
import muttonRoganJosh from "../assets/images/nonveg-menu/mutton-roganjosh.jpg";
import chickenCurry from "../assets/images/nonveg-menu/chicken-curry.jpg";
import chickenBiryani from "../assets/images/nonveg-menu/chicken-biryani.jpg";
import chickenCaesar from "../assets/images/nonveg-menu/chicken-caesar.jpg";
import tandooriSalad from "../assets/images/nonveg-menu/tandoori-salad.jpg";
import fishSalad from "../assets/images/nonveg-menu/fish-salad.jpg";
import eggChickenSalad from "../assets/images/nonveg-menu/egg-chicken-salad.jpg";

// ---------------- Desserts ----------------
import gulabJamun from "../assets/images/desserts/gulab-jamun.jpg";
import rasmalai from "../assets/images/desserts/rasmalai.jpg";
import chocolateCake from "../assets/images/desserts/chocolate-cake.jpg";
import iceCream from "../assets/images/desserts/ice-cream.jpg";
import brownie from "../assets/images/desserts/brownie.jpg";
import cheesecake from "../assets/images/desserts/cheesecake.jpg";

// ---------------- Mocktails ----------------
import mojito from "../assets/images/mocktails/mojito.jpg";
import fruitPunch from "../assets/images/mocktails/fruit-punch.jpg";
import virginColada from "../assets/images/mocktails/virgin-colada.jpg";
import berryMocktail from "../assets/images/mocktails/berry-mocktail.jpg";
import lemonIcedTea from "../assets/images/mocktails/lemon-iced-tea.jpg";

// ---------------- Cocktails ----------------
import margarita from "../assets/images/cocktails/margarita.jpg";
import martini from "../assets/images/cocktails/martini.jpg";
import mojitoCocktail from "../assets/images/cocktails/mojito1.jpg";
import cosmopolitan from "../assets/images/cocktails/cosmopolitan.jpg";
import oldFashioned from "../assets/images/cocktails/old-fashioned.jpg";

// ---------------- MENU DATA ----------------
const vegMenuItems = {
  Soups: [
    { name: "Tomato Shorba", description: "Tangy tomato broth with Indian spices.", price: 180, image: tomatoShorba },
    { name: "Sweet Corn Soup", description: "Classic sweet corn with vegetables and herbs.", price: 160, image: sweetCornSoup },
    { name: "Hot & Sour Veg Soup", description: "Spicy and tangy Indo-Chinese style soup.", price: 170, image: hotSourSoup },
    { name: "Manchow Soup", description: "Spicy soy-based soup with crispy noodles.", price: 175, image: manchowSoup },
  ],
  Starters: [
    { name: "Paneer Tikka", description: "Chargrilled paneer cubes marinated in spices.", price: 250, image: paneerTikka },
    { name: "Hara Bhara Kabab", description: "Spinach and green pea patties served with chutney.", price: 220, image: haraBhara },
    { name: "Veg Seekh Kebab", description: "Spiced vegetable kebabs grilled to perfection.", price: 240, image: vegSeekh },
    { name: "Aloo Tikki Chaat", description: "Crispy potato patties with yogurt & chutneys.", price: 200, image: alooTikki },
  ],
  "Main Course": [
    { name: "Paneer Butter Masala", description: "Creamy tomato-based curry with paneer.", price: 320, image: paneerButter },
    { name: "Dal Makhani", description: "Slow-cooked black lentils with cream & butter.", price: 280, image: dalMakhani },
    { name: "Chole", description: "Punjabi-style chickpeas in spicy curry.", price: 250, image: chole },
    { name: "Veg Biryani", description: "Fragrant basmati rice with spices & vegetables.", price: 300, image: vegBiryani },
  ],
  Salads: [
    { name: "Kachumber Salad", description: "Cucumber, onion, tomato tossed with lemon & spices.", price: 150, image: kachumber },
    { name: "Sprouts Salad", description: "Protein-rich sprouts with fresh veggies.", price: 160, image: sprouts },
    { name: "Fruit Chaat Salad", description: "Seasonal fruits tossed with chaat masala.", price: 180, image: fruitChaat },
    { name: "Corn & Cucumber Salad", description: "Sweet corn with cucumber and herbs.", price: 170, image: cornCucumber },
  ],
};

const nonVegMenuItems = {
  Soups: [
    { name: "Chicken Shorba", description: "Spiced chicken broth with herbs.", price: 220, image: chickenShorba },
    { name: "Chicken Sweet Corn Soup", description: "Classic sweet corn soup with shredded chicken.", price: 200, image: chickenSweetCorn },
    { name: "Hot & Sour Chicken Soup", description: "Tangy-spicy soup with chicken and veggies.", price: 210, image: hotSourChicken },
    { name: "Chicken Manchow Soup", description: "Spicy soy-based soup with chicken & crispy noodles.", price: 215, image: chickenManchow },
  ],
  Starters: [
    { name: "Chicken Tikka", description: "Chargrilled chicken cubes marinated in spices.", price: 320, image: chickenTikka },
    { name: "Mutton Seekh Kebab", description: "Juicy spiced minced mutton kebabs.", price: 350, image: muttonSeekh },
    { name: "Chicken Wings", description: "Spicy fried chicken wings with sauce.", price: 280, image: chickenWings },
    { name: "Fish Amritsari", description: "Crispy fried fish marinated with Indian spices.", price: 340, image: fishAmritsari },
  ],
  "Main Course": [
    { name: "Butter Chicken", description: "Creamy tomato-based curry with chicken.", price: 400, image: butterChicken },
    { name: "Mutton Rogan Josh", description: "Rich Kashmiri-style mutton curry.", price: 450, image: muttonRoganJosh },
    { name: "Chicken Curry", description: "North Indian spiced chicken curry.", price: 350, image: chickenCurry },
    { name: "Chicken Biryani", description: "Fragrant basmati rice layered with spiced chicken.", price: 380, image: chickenBiryani },
  ],
  Salads: [
    { name: "Chicken Caesar Salad", description: "Grilled chicken with romaine lettuce & Caesar dressing.", price: 280, image: chickenCaesar },
    { name: "Tandoori Chicken Salad", description: "Tandoori chicken with fresh greens.", price: 300, image: tandooriSalad },
    { name: "Grilled Fish Salad", description: "Fresh greens with grilled fish and lemon dressing.", price: 320, image: fishSalad },
    { name: "Egg & Chicken Salad", description: "Boiled eggs with shredded chicken and veggies.", price: 260, image: eggChickenSalad },
  ],
};

const dessertsAndDrinks = {
  Desserts: [
    { name: "Gulab Jamun", description: "Soft fried dumplings in sugar syrup.", price: 150, image: gulabJamun },
    { name: "Rasmalai", description: "Cottage cheese patties soaked in saffron milk.", price: 180, image: rasmalai },
    { name: "Chocolate Cake", description: "Rich and moist chocolate delight.", price: 220, image: chocolateCake },
    { name: "Ice Cream", description: "Choice of vanilla, chocolate, or strawberry.", price: 120, image: iceCream },
    { name: "Brownie", description: "Chocolate brownie with nuts.", price: 200, image: brownie },
    { name: "Tiramisu", description: "Espresso-soaked ladyfingers layered with mascarpone & cocoa.", price: 250, image: cheesecake },
  ],
  Mocktails: [
    { name: "Virgin Mojito", description: "Refreshing lime & mint cooler.", price: 180, image: mojito },
    { name: "Fruit Punch", description: "Mixed fruit juice with fizz.", price: 160, image: fruitPunch },
    { name: "Virgin Colada", description: "Pineapple & coconut cream blend.", price: 200, image: virginColada },
    { name: "Berry Blast", description: "Fresh berries with soda & syrup.", price: 190, image: berryMocktail },
    { name: "Lemon Iced Tea", description: "Chilled tea with lemon zest.", price: 150, image: lemonIcedTea },
  ],
  Cocktails: [
    { name: "Margarita", description: "Classic tequila, lime & triple sec.", price: 350, image: margarita },
    { name: "Martini", description: "Gin & vermouth with olives.", price: 380, image: martini },
    { name: "Mojito (Cocktail)", description: "Rum, lime, mint & soda.", price: 360, image: mojitoCocktail },
    { name: "Cosmopolitan", description: "Vodka, cranberry, lime & triple sec.", price: 370, image: cosmopolitan },
    { name: "Old Fashioned", description: "Whiskey, bitters & sugar.", price: 400, image: oldFashioned },
  ],
};

const categories = ["All", "Soups", "Starters", "Main Course", "Salads"];
const drinkCategories = ["All", "Desserts", "Mocktails", "Cocktails"];

// ---------------- COMPONENT ----------------
const Dine = () => {
  const [activeCategoryVeg, setActiveCategoryVeg] = useState("All");
  const [activeCategoryNonVeg, setActiveCategoryNonVeg] = useState("All");
  const [activeCategoryDrinks, setActiveCategoryDrinks] = useState("All");

  const filteredVeg = activeCategoryVeg === "All" ? Object.values(vegMenuItems).flat() : vegMenuItems[activeCategoryVeg];
  const filteredNonVeg = activeCategoryNonVeg === "All" ? Object.values(nonVegMenuItems).flat() : nonVegMenuItems[activeCategoryNonVeg];
  const filteredDrinks = activeCategoryDrinks === "All" ? Object.values(dessertsAndDrinks).flat() : dessertsAndDrinks[activeCategoryDrinks];

  // -------- Menu Item Component --------
  const MenuList = ({ items }) => (
    <div className={styles['menu-grid']}>
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          className={styles['menu-card']}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.05 }}
          whileHover={{ y: -3 }}
        >
          <img src={item.image} alt={item.name} className={styles['menu-img']} />
          <div className={styles['menu-info']}>
            <div className={styles['menu-header']}>
              <h4>{item.name}</h4>
              <div className={styles['dotted-line']}></div>
              <span className={styles['menu-price']}>₹{item.price}</span>
            </div>
            <p>{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className={styles.hero}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className={styles['hero-content']}>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Dine
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className={styles.breadcrumb}>Home</span> &gt; Dine
          </motion.p>
        </div>
      </motion.section>

      {/* VEG CUISINE */}
      <section className={styles['menu-section']}>
        <span className={styles.badge}>VEG CUISINE</span>
        <h2>
          Check Our Tasty <span className={styles.highlight}>Veg Cuisine</span>
        </h2>

        {/* Tabs */}
        <div className={styles.tabs}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategoryVeg(cat)}
              className={activeCategoryVeg === cat ? `${styles.tab} ${styles.active}` : styles.tab}
            >
              {cat}
            </button>
          ))}
        </div>

        <MenuList items={filteredVeg} />
      </section>

      {/* NON-VEG CUISINE */}
      <section className={styles['menu-section']}>
        <span className={styles.badge}>NON-VEG CUISINE</span>
        <h2>
          Check Our Tasty <span className={styles.highlight}>Non-Veg Cuisine</span>
        </h2>

        <div className={styles.tabs}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategoryNonVeg(cat)}
              className={activeCategoryNonVeg === cat ? `${styles.tab} ${styles.active}` : styles.tab}
            >
              {cat}
            </button>
          ))}
        </div>

        <MenuList items={filteredNonVeg} />
      </section>

      {/* DESSERTS & DRINKS */}
      <section className={styles['menu-section']}>
        <span className={styles.badge}>Sweet Treats & Refreshing</span>
        <h2>
          Check Our Tasty{" "}
          <span className={styles.highlight}>Sweet Treats & Refreshing</span>
        </h2>

        <div className={styles.tabs}>
          {drinkCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategoryDrinks(cat)}
              className={activeCategoryDrinks === cat ? `${styles.tab} ${styles.active}` : styles.tab}
            >
              {cat}
            </button>
          ))}
        </div>

        <MenuList items={filteredDrinks} />
      </section>
    </div>
  );
};

export default Dine;
