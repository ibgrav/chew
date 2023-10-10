export function find<T>(path: string | string[], obj: Record<string, unknown>, def: T | undefined = undefined): T | undefined {
  if (!Array.isArray(path)) path = path.split(".");

  const key = path.shift();
  if (!key) return def;

  const data = obj[key];

  if (path.length > 0) {
    if (data !== null && typeof data === "object") {
      return find(path, data as Record<string, unknown>, def);
    }

    return def;
  }

  return (data as T) ?? def;
}
