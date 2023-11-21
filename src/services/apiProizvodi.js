import supabase, { supabaseUrl } from "./supabase";

export async function getProizvodi() {
  let { data, error } = await supabase.from("proizvodi").select("*");

  if (error) {
    console.error(error);
    throw new Error("Proizvodi se ne mogu ocitati");
  }

  return data;
}

export async function deleteProizvod(id) {
  const { error } = await supabase.from("proizvodi").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Proizvod se ne moze obrisati");
  }
}

export async function addProizvod(newProizvod) {
  const imageName = `${Math.random()}-${newProizvod.Slika.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/Slike/${imageName}`;

  //https://vqjvqrgzyhtddyesmzms.supabase.co/storage/v1/object/public/Slike/lenor.jpg?t=2023-11-21T20%3A06%3A49.771Z

  const { data, error } = await supabase
    .from("proizvodi")
    .insert([{ ...newProizvod, Slika: imagePath }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Proizvod se ne moze dodati");
  }

  const { error: storageError } = await supabase.storage
    .from("Slike")
    .upload(imageName, newProizvod.Slika);

  if (storageError) {
    await supabase.from("proizvodi").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("Proizvod slika se ne moze dodati");
  }

  return data;
}
