import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./Init";

export const getAllProducts = async (idCategory) => {
  let refProductsCollection;

  if (idCategory) {
    refProductsCollection = query(
      collection(db, "products"),
      where("category", "==", idCategory)
    );
  } else {
    refProductsCollection = collection(db, "products");
  }
  try {
    const res = await getDocs(refProductsCollection);
    const products = res.docs.map((product) => ({
      ...product.data(),
      id: product.id,
    }));
    return products;
  } catch (error) {
    console.log("Disculpe ha ocurrido un error", error);
  }
};

export const getProduct = async (idItem) => {
  const refProduct = doc(db, "products", idItem);

  try {
    const res = await getDoc(refProduct);
    if (res.exists()) {
      const product = { ...res.data(), id: res.id };
      return product;
    } else {
      return null;
    }
  } catch (error) {
    console.log("Disculpe ha ocurrido un error", error);
  }
};

export const getShowCategory = async () => {
  let refCategoryCollection;

  refCategoryCollection = collection(db, "category");

  try {
    const res = await getDocs(refCategoryCollection);
    const category = res.docs.map((cat) => ({
      ...cat.data(),
      id: cat.id,
    }));
    return category;
  } catch (error) {
    console.log("Disculpe ha ocurrido un error", error);
  }
};
