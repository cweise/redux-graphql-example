import hash from "object-hash";

export const createHash = string => hash(string.replace(/\s+/g, " ").trim());
