export const FEATURED_MENU = [
  {
    id: "1",
    name: "Lasaña Clásica",
    price: 110,
    description: "Porción individual con pan y ensalada incluidos.",
    image: "/images/menu/lasagnas/clasica.jpg",
  },
  {
    id: "5",
    nombre: "Lasañita",
    precio: 70,
    description: "Porción individual sin acompañamientos.",
    image: "/images/menu/lasagnas/lasañita.jpg",
  },
  {
    id: "2",
    name: "Lasaña para Compartir",
    price: 300,
    description: "Ideal para compartir entre tres personas.",
    image: "/images/menu/salads/salad-1.jpg",
  },
  {
    id: "11",
    name: "Ensalada de Pollo",
    price: 110,
    description: "Incluye barria fría y aderezo de su elección.",
    image: "/images/menu/salads/salad-1.jpg",
  },
];

export const MENU = {
  lasagnas: {
    accompanied: [
      {
        id: "1",
        name: "Lasaña Clásica",
        price: 110,
        description: "Porción individual con pan y ensalada incluidos.",
        image: "/images/menu/lasagnas/clasica.jpg",
      },
      {
        id: "2",
        name: "Lasaña para Compartir",
        price: 300,
        description: "Ideal para compartir entre tres personas.",
        image: "/images/menu/salads/salad-1.jpg",
      },
      {
        id: "3",
        name: "Lasaña Familiar",
        price: 600,
        description: "Perfecta para reuniones pequeñas de 6 a 8 personas.",
        image: "/images/menu/salads/salad-1.jpg",
      },
      {
        id: "4",
        name: "Lasaña a lo Grande",
        price: 1550,
        description: "Pensada para eventos especiales de 16 a 20 personas.",
        image: "/images/menu/salads/salad-1.jpg",
      },
    ],
    notAccompanied: [
      {
        id: "5",
        nombre: "Lasañita",
        precio: 70,
        description: "Porción individual sin acompañamientos.",
        image: "/images/menu/lasagnas/lasañita.jpg",
      },
      {
        id: "6",
        name: "Lasaña para Compartir",
        price: 200,
        description: "Con 3 porciones para disfrutar en compañia.",
        image: "/images/menu/salads/salad-1.jpg",
      },
      {
        id: "7",
        name: "Lasaña Familiar",
        price: 450,
        description: "Charola con porciones para 6 a 8 personas.",
        image: "/images/menu/salads/salad-1.jpg",
      },
      {
        id: "8",
        name: "Lasaña a lo Grande",
        price: 1350,
        description: "Charola con porciones para 16 a 20 personas.",
        image: "/images/menu/salads/salad-1.jpg",
      },
    ],
    extras: [
      {
        id: "9",
        nombre: "Orden de Pan Extra",
        precio: 40,
        description: "Incluye 8 piezas de pan integral.",
        image: "/images/menu/lasagnas/pan.jpg",
      },
      {
        id: "10",
        nombre: "Orden de Ensalada Extra",
        precio: 45,
        description: "Tu decides con qué la acompañas.",
        image: "/images/menu/salads/salad-1.jpg",
      },
    ],
  },
  salads: [
    {
      id: "11",
      name: "Ensalada de Pollo",
      price: 110,
      description: "Incluye barria fría y aderezo de su elección.",
      image: "/images/menu/salads/salad-2.jpg",
    },
  ],
};
