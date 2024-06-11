import { PresignedPost } from "./type/IObject-storage";

export async function sendFile(file?: File, presignedPost?: PresignedPost) {
  if (!file || !presignedPost) return;

  const { fields, url } = presignedPost;

  const formData = new FormData();

  for (const [key, value] of Object.entries(fields)) {
    formData.append(key, value);
  }

  formData.append("file", file);

  const response = await fetch(url, { method: "POST", body: formData });

  if (!response.ok) {
    throw new Error("Something went wrong on send file");
  }
}
