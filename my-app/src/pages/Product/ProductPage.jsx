import { useState, useEffect, useRef, useTransition } from "react";
import getAllProducts from "../../service/getAllProducts";
import CardList from "../../components/CardList/CardList";
import Navbar from "../../components/Navbar/Navbar";
import RadioButton from "../../components/RadioButton/RadioButton";
import getAllProductCategories from "../../service/getAllProductCategories";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const radioButtonOpts = useRef([
    {
      label: "All",
      value: "all",
    },
  ]);

  const originalProducts = useRef([]);
  const [isPending, startTransition] = useTransition();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    function fetchAllProducts() {
      let allProducts = getAllProducts();
      allProducts = allProducts.length > 0 ? allProducts : [];
      originalProducts.current = allProducts;
      setProducts(allProducts);
    }

    function fetchCategories() {
      const allCategories = getAllProductCategories();
      const newCategories = allCategories.map((cat) => ({ label: cat.name, value: cat.slug })).filter((newCat) => !radioButtonOpts.current.some((existingCat) => existingCat.value === newCat.value));
      radioButtonOpts.current = [...radioButtonOpts.current, ...newCategories];
    }
    fetchCategories();
    fetchAllProducts();
  }, []);

  useEffect(() => {
    startTransition(() => {
      const filtered = originalProducts.current.filter((product) => {
        const matchedCategory = selectedCategory === "all" || product.categorySlug === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());

        return matchedCategory && matchesSearch;
      });

      return setProducts(filtered);
    });
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="bg-pink-50 min-h-screen">
      <Navbar onSearchChange={handleSearchChange} className="bg-white shadow-md"></Navbar>
      <div className="px-24 py-6 gap-4 mt-4 flex-wrap">
        <h3 className="font-medium text-pink-800 text-lg mb-3">Filter</h3>
        <div className="flex gap-3 flex-wrap bg-white p-4 rounded-lg shadow-sm border border-pink-100">
          <RadioButton options={radioButtonOpts.current} defaultValue={"all"} onChange={handleCategoryChange} className="text-pink-700 hover:bg-pink-50 focus:ring-pink-500" />
        </div>
      </div>
      <section className="container px-24 py-4">
        <main className="grid grid-cols-4 gap-6">
          <CardList products={products} isPending={isPending} className="hover:shadow-lg transition-shadow duration-300" />
        </main>
      </section>
      {isPending && (
        <div className="fixed inset-0 bg-pink-900/20 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <span className="text-pink-600">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}
