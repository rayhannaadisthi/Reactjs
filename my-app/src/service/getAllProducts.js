export default function getAllProducts() {
  return [
    //OK
    {
      id: "BB-FBB-001",
      slug: "bouquet-babybreath-01",
      name: "White BabyBreath",
      category: `Bouquet Babybreath`,
      categorySlug: "bouquet-babybreath",
      price: 999_000,
      stock: 100,
      imageUrl: "/assets/images/BABYBREATH-2.jpeg",
      description: `Known for its delicate and airy appearance, this flower symbolizes purity and eternal love. Its soft, cloud-like charm adds a romantic and graceful touch to the arrangement.`,
    },
    {
      id: "RS-FRS-002",
      slug: "bouquet-roses-02",
      name: "Pink Roses",
      category: `Bouquet Roses`,
      categorySlug: "bouquet-roses",
      price: 999_000,
      stock: 100,
      imageUrl: `/assets/images/ROSES-1.jpeg`,
      description: `A timeless symbol of love and admiration, roses exude elegance and sophistication. Each petal tells a story of passion and deep emotions, making them the heart of any bouquet.`,
    },
    {
      id: "TL-FTL-002",
      slug: "bouquet-tulips-02",
      name: "Pink Tulips",
      category: `Bouquet Tulips`,
      categorySlug: "bouquet-tulips",
      price: 999_000,
      stock: 90,
      imageUrl: `/assets/images/TULIPS-2.jpeg`,
      description: `With their vibrant colors and sleek shapes, tulips are a symbol of perfect love and renewal. They bring a cheerful and uplifting energy, making the arrangement truly captivating.`,
    },

    //ALMOST SOLD
    {
      id: "RS-FRS-001",
      slug: "bouquet-roses-01",
      name: "Red Roses",
      category: `Bouquet Roses`,
      categorySlug: "bouquet-roses",
      price: 999_000,
      stock: 5,
      imageUrl: `/assets/images/ROSES-2.jpeg`,
      description: `A timeless symbol of love and admiration, roses exude elegance and sophistication. Each petal tells a story of passion and deep emotions, making them the heart of any bouquet.`,
    },
    {
      id: "BB-FBB-002",
      slug: "bouquet-babybreath-02",
      name: "Pink BabyBreath",
      category: `Bouquet Babybreath`,
      categorySlug: "bouquet-babybreath",
      price: 999_000,
      stock: 2,
      imageUrl: "/assets/images/BABYBREATH-1.jpeg",
      description: `Known for its delicate and airy appearance, this flower symbolizes purity and eternal love. Its soft, cloud-like charm adds a romantic and graceful touch to the arrangement.`,
    },
    {
      id: "TL-FTL-003",
      slug: "bouquet-tulips-03",
      name: "Blue Tulips",
      category: `Bouquet Tulips`,
      categorySlug: "bouquet-tulips",
      price: 999_000,
      stock: 10,
      imageUrl: `/assets/images/TULIPS-3.jpeg`,
      description: `With their vibrant colors and sleek shapes, tulips are a symbol of perfect love and renewal. They bring a cheerful and uplifting energy, making the arrangement truly captivating.`,
    },

    //OUT OF STOCK
    {
      id: "TL-FTL-001",
      slug: "bouquet-tulips-01",
      name: "White Tulips",
      category: `Bouquet Tulips`,
      categorySlug: "bouquet-tulips",
      price: 999_000,
      stock: 0,
      imageUrl: `/assets/images/TULIPS-1.jpeg`,
      description: `With their vibrant colors and sleek shapes, tulips are a symbol of perfect love and renewal. They bring a cheerful and uplifting energy, making the arrangement truly captivating.`,
    },
    {
      id: "RS-FRS-003",
      slug: "bouquet-roses-03",
      name: "Blue Roses",
      category: `Bouquet Roses`,
      categorySlug: "bouquet-roses",
      price: 999_000,
      stock: 0,
      imageUrl: `/assets/images/ROSES-3.jpeg`,
      description: `A timeless symbol of love and admiration, roses exude elegance and sophistication. Each petal tells a story of passion and deep emotions, making them the heart of any bouquet.`,
    },
    {
      id: "TBB-FBB-003",
      slug: "bouquet-babybreath-03",
      name: "Red Babbybreath",
      category: `Bouquet Babybreath`,
      categorySlug: "bouquet-babybreath",
      price: 999_000,
      stock: 0,
      imageUrl: `/assets/images/BABYBREATH-3.jpeg`,
      description: `Known for its delicate and airy appearance, this flower symbolizes purity and eternal love. Its soft, cloud-like charm adds a romantic and graceful touch to the arrangement.`,
    },
  ];
}