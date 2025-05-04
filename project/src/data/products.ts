import {
  ConcreteProduct,
  StoneProduct,
  Equipment,
  ContactInfo,
} from "../types";

export const concreteProducts: ConcreteProduct[] = [
  {
    id: 1,
    name: "MakroBeton",
    basePrice: 70,
    additivePrice: 72,
    description:
      "High-quality macro concrete suitable for large-scale construction projects. Includes transport to your location.",
    image:
      "https://agrosty.ro/wp-content/uploads/2024/03/product-presentation-optimized-v1.png",
  },
  {
    id: 2,
    name: "C25-30",
    basePrice: 70,
    additivePrice: 72,
    description:
      "Standard grade concrete perfect for residential construction and general applications. Includes transport to your location.",
    image:
      "https://www.mcm-se.com/wp-content/uploads/2025/01/c25c30concrete.jpg",
  },
  {
    id: 3,
    name: "C30-37",
    basePrice: 70,
    additivePrice: 72,
    description:
      "Premium grade concrete with enhanced strength properties for demanding structural applications. Includes transport to your location.",
    image:
      "https://bcdn.products.pcc.eu/wp-content/uploads/2023/03/FOT-1-klasy-betonu.jpg",
  },
  {
    id: 4,
    name: "C37-45",
    basePrice: 70,
    additivePrice: 72,
    description:
      "High-strength concrete designed for special architectural and engineering requirements. Includes transport to your location.",
    image: "https://i.ibb.co/6R7sM11p/beton.jpg",
  },
];

export const stoneProducts: StoneProduct[] = [
  {
    id: 1,
    size: "0-2mm",
    price: 15,
    description:
      "Fine aggregate perfect for specialized concrete applications and masonry work.",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2021/4/UW/RM/PX/57751864/product-jpeg-500x500.jpg",
    applications: ["Fine concrete", "Masonry work", "Sand-cement screeds"],
  },
  {
    id: 2,
    size: "0-4mm",
    price: 10,
    description:
      "Standard sand aggregate for general construction and concrete production.",
    image:
      "https://loadsofstone.com/cdn/shop/products/limestone-dust-0-4mm-332165_800x.jpg?v=1743778822",
    applications: ["General concrete", "Paving", "Rendering"],
  },
  {
    id: 3,
    size: "4-8mm",
    price: 10,
    description:
      "Small gravel perfect for drainage applications and decorative purposes.",
    image:
      "https://5.imimg.com/data5/BD/GW/KN/SELLER-5250644/stone-aggregates.jpg",
    applications: ["Drainage", "Concrete mixes", "Landscaping"],
  },
  {
    id: 4,
    size: "8-16mm",
    price: 10,
    description:
      "Medium-sized aggregate ideal for standard concrete production and construction.",
    image:
      "https://pic.stonecontact.com/picture201511/20213/169357/grey-marble-chips-10-16mm-crushed-stone-p866683-1b.jpg",
    applications: ["Standard concrete", "Road base", "Driveways"],
  },
  {
    id: 5,
    size: "16-32mm",
    price: 10,
    description:
      "Large gravel suitable for high-strength concrete and heavy construction applications.",
    image:
      "https://pic.stonecontact.com/picture201511/20213/169357/grey-marble-chips-16-32mm-crushed-stone-p866682-1b.jpg",
    applications: ["Heavy construction", "Foundation work", "Gabion baskets"],
  },
];

export const equipmentList: Equipment[] = [
  {
    id: 1,
    name: "Concrete Batching Plant",
    description:
      "Modern automated batching plant capable of producing high volumes of precisely mixed concrete for various applications.",
    image: "https://i.ibb.co/4ZmGP3ZZ/concrete.jpg",
    category: "Production",
  },
  {
    id: 2,
    name: "Concrete Mixer Trucks",
    description:
      "Fleet of mixer trucks for reliable transport of fresh concrete to construction sites.",
    image: "https://i.ibb.co/SXV0rkKX/IMG-7310.jpg",
    category: "Transport",
  },
  {
    id: 3,
    name: "Concrete Pump",
    description:
      "Powerful concrete pump engineered to deliver precise and continuous flow of concrete to hard-to-reach areas on construction sites.",
    image: "https://i.ibb.co/svvB3qF0/pump.jpg",
    category: "Transport",
  },
  {
    id: 4,
    name: "Cement Transporter",
    description:
      "Specialized vehicle designed for safe and efficient transport of bulk cement between production facilities and construction sites.",
    image: "https://i.ibb.co/wZQYVhGn/IMG-7313.jpg",
    category: "Transport",
  },
  {
    id: 5,
    name: "Stone Crusher",
    description:
      "Industrial crusher for processing quarry materials into various sized aggregates.",
    image:
      "https://scontent.fprn1-1.fna.fbcdn.net/v/t1.6435-9/157606572_2876562849285615_1109143428042382247_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3Ree6tXfnesQ7kNvwGYkzyO&_nc_oc=Adnw2_BMAN1PBRbqCt4QqoTgdZwZTRGkbi8LlVFKOkZj6O6fnpD2cgoAj17Wqcwaajs&_nc_zt=23&_nc_ht=scontent.fprn1-1.fna&_nc_gid=WohLpc1Ay_0utr08YhXYtw&oh=00_AfEiOo2p_wkfzG5WvkC6-Y6HeH0-omyD0AX2T8ld7cCcxA&oe=683F5671",
    category: "Production",
  },
  {
    id: 6,
    name: "Excavators",
    description:
      "Heavy-duty excavators for efficient quarry operations and material handling.",
    image: "https://i.ibb.co/fYDYSVwS/IMG-7311.jpg",
    category: "Extraction",
  },
  {
    id: 7,
    name: "Front Loaders",
    description:
      "Versatile loaders for moving aggregate materials throughout the production facility.",
    image: "https://i.ibb.co/5h906Ktk/IMG-3584.png",
    category: "Transport",
  },
  {
    id: 8,
    name: "Wheel Loader",
    description:
      "Heavy-duty wheel loader designed for efficient loading, transporting, and handling of bulk construction materials on-site.",
    image: "https://i.ibb.co/bMJkqcPn/IMG-2969.jpg",
    category: "Production",
  }
];

export const contactInfo: ContactInfo = {
  address: "60000 Stanishor, Gjilan",
  phones: ["044 147 692", "044 575 736", "048 888 656"],
  email: "Agi-DaniShPK@hotmail.com",
};
