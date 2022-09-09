const products = [
  {
    id: "1",
    name: "Velador Nordico",
    price: 5500,
    stock: 10,
    pictureUrl: "/assets/products/veladores/1.jpg",
    category: "veladores",
    description:
      "Velador de 3 patas de madera de eucalipto, con pantalla ecologica",
    sold: "1550",
    trademark: "MS Carpinteria",
    measurement: {
      width: 30,
      height: 60,
    },
  },
  {
    id: "2",
    name: "Velador Colgante",
    price: 2500,
    stock: 15,
    pictureUrl: "/assets/products/veladores/2.jpg",
    category: "veladores",
    description:
      "Velador de madera colgante, con bombilla multifilamento de luz suave, y cable forrado para brindarle mas estetica",
    sold: "150",
    trademark: "MS Carpinteria",
    measurement: {
      width: 10,
      height: 25,
    },
  },
  {
    id: "3",
    name: "Velador en C inclinado",
    price: 3500,
    stock: 25,
    pictureUrl: "/assets/products/veladores/3.jpg",
    category: "veladores",
    description:
      "Velador de apoyo, en forma de C inclinado con madera laqueada y bombilla visible de multifilamento",
    sold: "150",
    trademark: "MS Carpinteria",
    measurement: {
      width: 15,
      height: 30,
    },
  },
  {
    id: "4",
    name: "Velador Minimalista",
    price: 1500,
    stock: 105,
    pictureUrl: "/assets/products/veladores/4.jpg",
    category: "veladores",
    description:
      "Velador con forma minimalista, cuadrado pequeño con bombilla a la vista de multifilamento",
    sold: "550",
    trademark: "MS Carpinteria",
    measurement: {
      width: 10,
      height: 20,
    },
  },
  {
    id: "5",
    name: "Velador Recto en C",
    price: 3500,
    stock: 105,
    pictureUrl: "/assets/products/veladores/5.jpg",
    category: "veladores",
    description:
      "Velador recto en forma de C, madera cruda con bombilla visible multifilamento",
    sold: "1550",
    trademark: "MS Carpinteria",
    measurement: {
      width: 25,
      height: 35,
    },
  },
  {
    id: "6",
    name: "Velador Rectangular",
    price: 4500,
    stock: 58,
    pictureUrl: "/assets/products/veladores/6.jpg",
    category: "veladores",
    description:
      "Velador rectangular con base en madera y cemento, una combinacion de ambas logrando una armonia con la bombilla de multifilamento visible",
    sold: "1550",
    trademark: "MS Carpinteria",
    measurement: {
      width: 15,
      height: 40,
    },
  },
  {
    id: "7",
    name: "Velador Escondido",
    price: 5500,
    stock: 13,
    pictureUrl: "/assets/products/veladores/7.jpg",
    category: "veladores",
    description:
      "Velador con base y contornos en cemento, y portafoco en madera con bombilla multifilamento visible",
    sold: "3550",
    trademark: "MS Carpinteria",
    measurement: {
      width: 20,
      height: 50,
    },
  },
  {
    id: "8",
    name: "Velador People",
    price: 5500,
    stock: 10,
    pictureUrl: "/assets/products/veladores/8.jpg",
    category: "veladores",
    description:
      "Velador con estructura en madera con pantalla enfocando abajo",
    sold: "1550",
    trademark: "MS Carpinteria",
    measurement: {
      width: 30,
      height: 60,
    },
  },
  {
    id: "9",
    name: "Llavero MinWick",
    price: 2500,
    stock: 15,
    pictureUrl: "/assets/products/llaveros/1.jpg",
    category: "llaveros",
    description:
      "Llavero con 3 macetitas para adornar con suculentas o plantines a gusto, y posee 3 anclajes para alojar llaves",
    sold: "1500",
    trademark: "MS Carpinteria",
    measurement: {
      width: 30,
      height: 15,
    },
  },
  {
    id: "10",
    name: "Maceta con pie",
    price: 500,
    stock: 1500,
    pictureUrl: "/assets/products/macetas/1.jpg",
    category: "macetas",
    description: "Maceta pequeña de madera laqueada, con pie de apoyo",
    sold: "2000",
    trademark: "MS Carpinteria",
    measurement: {
      width: 10,
      height: 10,
    },
  },
  {
    id: "11",
    name: "Maceta TwoComponents",
    price: 2500,
    stock: 15,
    pictureUrl: "/assets/products/macetas/2.jpg",
    category: "macetas",
    description:
      "Maceta con base de madera de eucalipto, y cuerpo de cemento alisado color gris",
    sold: "154",
    trademark: "MS Carpinteria",
    measurement: {
      width: 10,
      height: 10,
    },
  },
  {
    id: "12",
    name: "Maceta Minimal",
    price: 1500,
    stock: 19,
    pictureUrl: "/assets/products/macetas/3.jpg",
    category: "macetas",
    description: "Maceta de madera pino seco al natural, pintada con aquarela",
    sold: "85",
    trademark: "MS Carpinteria",
    measurement: {
      width: 10,
      height: 10,
    },
  },
  {
    id: "13",
    name: "Maceta TetraWei",
    price: 1756,
    stock: 165,
    pictureUrl: "/assets/products/macetas/4.jpg",
    category: "macetas",
    description:
      "Maceta de madera pino seco al natural, con 3 orificios, con mitad de la misma pintada con colores pastel",
    sold: "7841",
    trademark: "MS Carpinteria",
    measurement: {
      width: 10,
      height: 10,
    },
  },
  {
    id: "14",
    name: "Maceta Triple",
    price: 1841,
    stock: 1123,
    pictureUrl: "/assets/products/macetas/5.jpg",
    category: "macetas",
    description:
      "Maceta natural, con posibilidad de introducir 3 suculentas diferentes",
    sold: "23123",
    trademark: "MS Carpinteria",
    measurement: {
      width: 10,
      height: 10,
    },
  },
  {
    id: "15",
    name: "Maceta Tetris",
    price: 1,
    stock: 1,
    pictureUrl: "/assets/products/macetas/6.jpg",
    category: "macetas",
    description: "Maceta con encastre tipo ladrillo con texturas añejas",
    sold: "231",
    trademark: "MS Carpinteria",
    measurement: {
      width: 10,
      height: 10,
    },
  },
  {
    id: "16",
    name: "Mesa de Luz Luxury",
    price: 15000,
    stock: 18,
    pictureUrl: "/assets/products/mesa/1.jpg",
    category: "mesa",
    description:
      "Mesa de luz, realizada en madera de primera calidad, cuenta con 1 cajon y esta revestida con enchapada de textura",
    sold: "1234",
    trademark: "MS Carpinteria",
    measurement: {
      width: 80,
      height: 60,
      depth: 30,
    },
  },
  {
    id: "17",
    name: "Mesa de Luz Caoba",
    price: 21900,
    stock: 185,
    pictureUrl: "/assets/products/mesa/2.jpg",
    category: "mesa",
    description:
      "Mesa de luz, realizada en madera de primera calidad, con 1 cajon y una bandeja de reposo en el inferior",
    sold: "123",
    trademark: "MS Carpinteria",
    measurement: {
      width: 50,
      height: 60,
      depth: 30,
    },
  },
  {
    id: "18",
    name: "Mesa de Luz Classic",
    price: 9000,
    stock: 187,
    pictureUrl: "/assets/products/mesa/3.jpg",
    category: "mesa",
    description:
      "Mesa de luz, realizada en madera de primera calidad, con 1 cajon y patas en T",
    sold: "432",
    trademark: "MS Carpinteria",
    measurement: {
      width: 40,
      height: 60,
      depth: 30,
    },
  },
  {
    id: "19",
    name: "Mesa de Luz Minimal3",
    price: 6500,
    stock: 431,
    pictureUrl: "/assets/products/mesa/4.jpg",
    category: "mesa",
    description:
      "Mesa de luz en cubo, con 1 cajon forrado con entretejido crudo, color natural laqueado",
    sold: "431",
    trademark: "MS Carpinteria",
    measurement: {
      width: 40,
      height: 50,
      depth: 30,
    },
  },
  {
    id: "20",
    name: "Comoda Deluxes",
    price: 18500,
    stock: 18,
    pictureUrl: "/assets/products/mesa/5.jpg",
    category: "mesa",
    description:
      "Comoda con 2 cajones, forrados en cuero negro con detalles en los laterales 3d",
    sold: "4",
    trademark: "MS Carpinteria",
    measurement: {
      width: 120,
      height: 90,
      depth: 45,
    },
  },
  {
    id: "21",
    name: "Perchero Truck",
    price: 3600,
    stock: 18,
    pictureUrl: "/assets/products/percheros/1.jpg",
    category: "percheros",
    description: "Perchero con individuales colgadores rebatibles, en 2 tonos",
    sold: "4",
    trademark: "MS Carpinteria",
    measurement: {
      width: 60,
      height: 15,
    },
  },
  {
    id: "22",
    name: "Perchero Rack",
    price: 8500,
    stock: 198,
    pictureUrl: "/assets/products/percheros/2.jpg",
    category: "percheros",
    description:
      "Perchero con estante superior, y en el inferior 5 botones cromados para colgar",
    sold: "423",
    trademark: "MS Carpinteria",
    measurement: {
      width: 55,
      height: 15,
    },
  },
  {
    id: "23",
    name: "Perchero Industrial",
    price: 4300,
    stock: 14,
    pictureUrl: "/assets/products/percheros/3.jpg",
    category: "percheros",
    description:
      "Perchero industrial de madera laqueada, con 3 Ls de acero negro",
    sold: "95",
    trademark: "MS Carpinteria",
    measurement: {
      width: 35,
      height: 15,
    },
  },
  {
    id: "24",
    name: "Perchero Vintage",
    price: 8500,
    stock: 1413,
    pictureUrl: "/assets/products/percheros/4.jpg",
    category: "percheros",
    description:
      "Perchero Vintage, con repisa para adornos y 4 ganchos dobles de bronce",
    sold: "4123",
    trademark: "MS Carpinteria",
    measurement: {
      width: 45,
      height: 20,
    },
  },
  {
    id: "25",
    name: "Perchero V",
    price: 7500,
    stock: 185,
    pictureUrl: "/assets/products/percheros/5.jpg",
    category: "percheros",
    description:
      "Perchero vertical de madera, con brazos movibles, con detalles de acero",
    sold: "43212",
    trademark: "MS Carpinteria",
    measurement: {
      width: 15,
      height: 45,
    },
  },
];

export const getData = () => {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
};

export const getCategory = (idCategory) => {
  return new Promise((resolve, reject) => {
    resolve(products.filter((prod) => prod.category === idCategory));
  });
};

export const getItemDetail = (idItem) => {
  return new Promise((resolve, reject) => {
    resolve(products.find((prod) => prod.id === idItem));
  });
};
