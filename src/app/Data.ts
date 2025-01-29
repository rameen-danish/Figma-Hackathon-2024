export interface Product {
  id: number;
  name : string;
  price: number;
  description: string;
  image: string;
  link: string;
  quantity :number;
  features: string[];
  dimensions: {
    height: string , width : string , depth : string
  };
}
export const products : Product[] = [
  {
    id: 1,
    name : "The Dandy Chair",
    price: 250,
    image: "/Photo.png",
    link: "/ProductListingBlog/[cart]",
    quantity: 1,
    description:
    "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    features: ["Premium material", "Handmade upholstery", "Quality timeless classic"],
    dimensions: { height: "110cm", width: "75cm", depth: "50cm" },
  },
  {
    id: 2,
    name : "Rustic Vase Set",
    price: 155,
    image: "/Vase set.png",
    link: "/cart?page=${product.id}",
    quantity: 1,
    description:
    "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    features: ["Premium material", "Handmade upholstery", "Quality timeless classic"],
    dimensions: { height: "110cm", width: "75cm", depth: "50cm" },
  },
  {
    id: 3,
    name : "The Silky Vase",
    price: 125,
    image: "/Vase.png",
    link: "/cart?page=${product.id}",
    quantity: 1,
    description:
    "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    features: ["Premium material", "Handmade upholstery", "Quality timeless classic"],
    dimensions: { height: "110cm", width: "75cm", depth: "50cm" },
  },
  {
    id: 4,
    name : "The Lucy Lamp",
    price: 399,
    image: "/Lamp.png",
    link: "/cart?page=${product.id}",
    quantity: 1,
    description:
    "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    features: ["Premium material", "Handmade upholstery", "Quality timeless classic"],
    dimensions: { height: "110cm", width: "75cm", depth: "50cm" },
  },
  {
    id: 5,
    name : "Modern Gold Pendant Lamps",
    price: 250,
    image: "/pic1.png",
    link: "/cart?page=${product.id}",
    quantity: 1,
    description:
    "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    features: ["Premium material", "Handmade upholstery", "Quality timeless classic"],
    dimensions: { height: "110cm", width: "75cm", depth: "50cm" },
  },
  {
    id: 6,
    name : "Ceramic Vase Set",
    price: 155,
    image: "/pic2.png",
    link: "/cart?page=${product.id}",
    quantity: 1,
    description:
    "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    features: ["Premium material", "Handmade upholstery", "Quality timeless classic"],
    dimensions: { height: "110cm", width: "75cm", depth: "50cm" },
  },
  {
    id: 7,
    name : "Industrial Minimalist Stool",
    price: 125,
    image: "/pic3.png",
    link: "/cart?page=${product.id}",
    quantity: 1,
    description:
    "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    features: ["Premium material", "Handmade upholstery", "Quality timeless classic"],
    dimensions: { height: "110cm", width: "75cm", depth: "50cm" },
  },
  {
    id: 8,
    name : "The Rustic Chair",
    price: 399,
    image: "/pic4.png",
    link: "/cart?page=${product.id}",
    quantity: 1,
    description:
    "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    features: ["Premium material", "Handmade upholstery", "Quality timeless classic"],
    dimensions: { height: "110cm", width: "75cm", depth: "50cm" },
  },
  {
    id: 9,
    image: "/ProductImage.png",
    name : "Graystone vase",
    description: "A timeless ceramic vase with a tri-color grey glaze.",
    price: 85,
    quantity: 1,
    link: "/cart?page=${product.id}",
    features: ["Premium material", "Handmade upholstery", "Quality timeless classic"],
    dimensions: { height: "110cm", width: "75cm", depth: "50cm" },
  },
  {
    id: 10,
    image: "/ProductImage1.png",
    name : "Basic White Vase",
    description: "Beautiful and simple, this is one for the classics.",
    price: 125,
    quantity: 1,
    link: "/cart?page=${product.id}",
    features: ["Premium material", "Handmade upholstery", "Quality timeless classic"],
    dimensions: { height: "110cm", width: "75cm", depth: "50cm" },
  },
];