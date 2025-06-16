import crypto from "crypto";

export function hashTitle(title: string): string {
  return crypto.createHash('sha1').update(title).digest('hex').slice(0, 8);
}
