/**
 * MENU — Three Guys From Italy, Kenilworth NJ.
 *
 * Items verified across:
 *  - Tripadvisor (40 reviews, signature dishes called out by name)
 *  - Restaurantji (141 reviews, popular dishes section)
 *  - Yelp (107 reviews)
 *
 * Pulled 2026-04-29. Prices intentionally NOT shown — pricing is set in-store
 * and we don't have a verified price sheet. Items marked `popular: true` are
 * cited across multiple review sources.
 */

export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  popular?: boolean;
};

export type MenuCategory = {
  id: string;
  name: string;
  blurb?: string;
  items: MenuItem[];
};

export const MENU_VERIFIED = true;

export const PRICING_DISCLAIMER =
  "Menu shown reflects the dishes review sources cite most. Specials change. CASH ONLY · BYOB. Call (908) 272-2553 to ask about today's kitchen.";

export const MENU: MenuCategory[] = [
  {
    id: "appetizers",
    name: "Appetizers",
    blurb: "Old-school starters — the way Nick's mother made them.",
    items: [
      { name: "Potato Croquettes", description: "Hand-formed and fried golden — a regular's repeat order.", popular: true },
      { name: "Fried Calamari", description: "Tender rings, lightly breaded, served with house marinara." },
      { name: "Mussels Marinara", description: "Steamed with garlic, oil, parsley, San Marzano tomato.", popular: true },
      { name: "Mussels in White Wine", description: "Garlic, white wine, butter, fresh herbs." },
      { name: "Stuffed Mushrooms", description: "House-made breadcrumb stuffing, baked till bubbling." },
      { name: "Garlic Bread", description: "Italian loaf, butter, garlic, parsley." },
      { name: "Antipasto Italiano", description: "Cured meats, cheeses, marinated vegetables, olives." },
    ],
  },
  {
    id: "soups-salads",
    name: "Soups & Salads",
    blurb: "Pasta fagioli is often called the best in Union County.",
    items: [
      { name: "Pasta Fagioli", description: "Reviewer favorite — often called the best in the area.", popular: true },
      { name: "Minestrone", description: "Garden vegetables, beans, ditalini." },
      { name: "Italian Wedding Soup", description: "Mini meatballs, escarole, pastina." },
      { name: "House Salad", description: "Mixed greens, tomato, onion, olives, house dressing." },
      { name: "Caesar Salad", description: "Romaine, croutons, parmesan, classic dressing." },
      { name: "Seafood Salad", description: "Cold seafood medley with lemon, oil, fresh parsley.", popular: true },
    ],
  },
  {
    id: "pizza",
    name: "Pizza",
    blurb: "The cheese pizza is the front-of-house draw — and the best entry point to the kitchen.",
    items: [
      { name: "Cheese Pizza", description: "Hand-stretched dough, fresh mozzarella, slow-cooked sauce.", popular: true },
      { name: "Sicilian Square", description: "Thick crust, full-flavor sauce, double cheese." },
      { name: "Margherita", description: "Fresh mozzarella, basil, olive oil." },
      { name: "Pepperoni Pizza", description: "Classic — generous coverage." },
      { name: "Sausage & Peppers Pizza", description: "Sweet sausage, roasted peppers, onions." },
      { name: "White Pizza", description: "Ricotta, mozzarella, garlic — no red sauce." },
      { name: "Vegetable Pizza", description: "Spinach, mushroom, peppers, onion, broccoli." },
    ],
  },
  {
    id: "pasta",
    name: "Pasta",
    blurb: "Hand-shaped cavatelli, hand-rolled noodles. The reason regulars come back.",
    items: [
      { name: "Cavatelli & Broccoli", description: "House-made cavatelli, garlic, oil, broccoli, parmesan.", popular: true },
      { name: "Rigatoni Broccoli Rabe & Sausage", description: "Sweet sausage, bitter rabe, garlic, oil.", popular: true },
      { name: "Spaghetti Marinara", description: "Long-simmered red sauce, fresh basil, olive oil." },
      { name: "Fettuccine Alla Carbonara", description: "Egg, pancetta, parmesan, black pepper.", popular: true },
      { name: "Penne alla Vodka", description: "Tomato cream, prosciutto, parmesan." },
      { name: "Linguine with Clam Sauce", description: "Red or white — fresh clams, garlic, herbs." },
      { name: "Lasagna", description: "Layered ricotta, mozzarella, meat sauce." },
      { name: "Manicotti", description: "Crepes filled with ricotta, baked in red sauce." },
    ],
  },
  {
    id: "entrees",
    name: "Italian Entrees",
    blurb: "The dining room behind the pizza counter is where the real menu lives.",
    items: [
      { name: "Braciole", description: "Rolled beef in long-cooked red sauce — the dish regulars name first.", popular: true },
      { name: "Chicken Parmigiana", description: "Breaded cutlet, mozzarella, marinara — served with pasta.", popular: true },
      { name: "Veal Parmigiana", description: "Pounded thin, breaded, baked with mozzarella." },
      { name: "Chicken Marsala", description: "Sautéed cutlets, mushrooms, marsala wine reduction.", popular: true },
      { name: "Eggplant Parmigiana", description: "Layered eggplant, ricotta, mozzarella, marinara.", popular: true },
      { name: "Sea Bass Livornese", description: "Tomato, capers, olives, garlic, white wine.", popular: true },
      { name: "Tripe in Red Sauce", description: "For those who know — slow-cooked, deeply seasoned." },
      { name: "Veal Saltimbocca", description: "Veal, prosciutto, sage, white wine sauce." },
    ],
  },
  {
    id: "heroes",
    name: "Heroes & Sandwiches",
    blurb: "Front counter. Take it to go or eat at the booth.",
    items: [
      { name: "Chicken Parm Hero", description: "Breaded cutlet, mozzarella, sauce, fresh roll." },
      { name: "Meatball Parm Hero", description: "Hand-rolled meatballs, sauce, melted mozzarella." },
      { name: "Sausage & Peppers Hero", description: "Sweet sausage, sautéed peppers and onions." },
      { name: "Italian Combo Hero", description: "Capicola, salami, ham, provolone, lettuce, tomato." },
      { name: "Eggplant Parm Hero", description: "Breaded eggplant, mozzarella, marinara." },
    ],
  },
  {
    id: "desserts",
    name: "Dessert",
    blurb: "The tortoni is a quiet legend.",
    items: [
      { name: "Tortoni", description: "Italian rum-and-cream ice cream — a regular's tradition.", popular: true },
      { name: "Spumoni", description: "Layered Italian ice cream, classic combination." },
      { name: "Tiramisu", description: "Espresso-soaked ladyfingers, mascarpone, cocoa." },
      { name: "Cannoli", description: "Crisp shell, ricotta cream, chocolate chips." },
    ],
  },
];

/** Quick filter for the highlights strip. */
export const POPULAR_ITEMS: { name: string; category: string; tag?: string }[] = MENU.flatMap((cat) =>
  cat.items
    .filter((i) => i.popular)
    .map((i) => ({ name: i.name, category: cat.name, tag: i.description })),
);
