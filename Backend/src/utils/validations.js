import { sql } from "../bd.js";
import { encrypt, decrypt } from "../services/crypto.js";

export async function existUser(id) {
  const [query] = await sql.query(
    `SELECT count(*) AS n FROM users WHERE id = ${id}`
  );
  return query[0].n > 0 ? true : false;
}

export function validateInfoUser(data) {
  for (var prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (data[prop] === "" || data[prop] === " ") {
        return {
          res: false,
          error: `La propiedad ${prop} no puede estar vacia.`,
        };
      }
      if (typeof data[prop] === "undefined") {
        return {
          res: false,
          error: `Falta la propiedad ${prop}.`,
        };
      }
    }
  }
  return {
    res: true,
  };
}

export async function validatePassword(email, password) {
  const current = decrypt(password);
  const [user] = await sql.query(
    `SELECT password AS pass FROM users WHERE email = "${email}"`
  );

  if (user[0].pass === current) {
    return {
      valid: false,
      error: "La contraseña no puede ser la misma.",
    };
  }
  return {
    valid: true,
    password: encrypt(password, email),
  };
}
