import supabase from "./supabase";

export async function updateFormData(newData) {
  const { data, error } = await supabase
    .from("formData")
    .insert([newData])
    .select();

  if (error) throw new Error("Failed to upload.");
  return data;
}
