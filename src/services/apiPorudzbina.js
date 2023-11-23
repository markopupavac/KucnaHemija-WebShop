import supabase from "./supabase";

export async function createOrder(newOrder) {
  const { data, error } = await supabase
    .from("porudzbine")
    .insert([newOrder])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Porudzbina se ne moze kreirati");
  }

  return data;
}

export async function getOrders() {
  let { data: porudzbine, error } = await supabase
    .from("porudzbine")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("Porudzbina se ne moze dobiti");
  }

  return porudzbine;
}

export async function deletePorudzbina(id) {
  const { error } = await supabase.from("porudzbine").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Porudzbina se ne moze obrisati");
  }
}
