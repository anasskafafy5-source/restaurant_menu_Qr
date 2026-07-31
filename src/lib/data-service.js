import { supabase } from "./supabase";

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    throw new Error(`Failed to fetch restaurant settings: ${error.message}`);
  }

  return data;
}

// export async function getProducts() {
//   const { data, error } = await supabase.from("products").select("*");

//   if (error) {
//     throw new Error(`Failed to fetch products: ${error.message}`);
//   }

//   return data;
// }

// export async function getCategories() {
//   const { data, error } = await supabase.from("categories").select("*");

//   if (error) {
//     throw new Error(`Failed to fetch categories: ${error.message}`);
//   }

//   return data;
// }

export async function getCategoriesWithProducts() {
  const { data, error } = await supabase.from("categories").select(`
    *,
    products (*)
  `);

  if (error) {
    throw new Error(
      `Failed to fetch categories with products: ${error.message}`,
    );
  }

  return data;
}

export async function getOffers() {
  const { data, error } = await supabase
    .from("offers")
    .select("*")
    .eq("is_active", true);

  if (error) {
    throw new Error(`Failed to fetch offers: ${error.message}`);
  }

  return data;
}
