/**
 * Redimensionne et compresse une image choisie par l'utilisateur en un petit
 * carré (data URL JPEG) — assez léger pour être stocké dans le profil / le cloud
 * sans alourdir le classement.
 */
export const AVATAR_MAX = 128;

/** Quelques avatars « emoji » prêts à l'emploi (alternative à l'upload). */
export const AVATAR_PRESETS = ["🦉", "🧠", "📚", "✒️", "🏛️", "🦋", "🌳", "🔥", "⭐", "🌙", "🐝", "🎭", "🗿", "🧭", "💡", "🪶"];

export function isPresetAvatar(value: string | null | undefined): value is string {
  return !!value && !value.startsWith("data:") && !value.startsWith("http");
}

export async function fileToAvatarDataUrl(file: File): Promise<string> {
  if (!file.type.startsWith("image/")) throw new Error("Le fichier n'est pas une image.");
  const bitmap = await loadImage(file);
  const side = Math.min(bitmap.width, bitmap.height);
  const sx = (bitmap.width - side) / 2;
  const sy = (bitmap.height - side) / 2;

  const canvas = document.createElement("canvas");
  canvas.width = AVATAR_MAX;
  canvas.height = AVATAR_MAX;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Impossible de traiter l'image.");
  ctx.drawImage(bitmap, sx, sy, side, side, 0, 0, AVATAR_MAX, AVATAR_MAX);
  if ("close" in bitmap && typeof (bitmap as ImageBitmap).close === "function") (bitmap as ImageBitmap).close();
  return canvas.toDataURL("image/jpeg", 0.78);
}

async function loadImage(file: File): Promise<ImageBitmap | HTMLImageElement> {
  if (typeof createImageBitmap === "function") {
    try {
      return await createImageBitmap(file);
    } catch {
      /* fallback ci-dessous */
    }
  }
  return await new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Image illisible."));
    };
    img.src = url;
  });
}
