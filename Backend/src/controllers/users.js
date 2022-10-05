import { sql } from "../bd.js";
import {
  existUser,
  validateInfoUser,
  validatePassword,
} from "../utils/validations.js";
import { encrypt } from "../services/crypto.js";

const controller = {
  list: async (req, res) => {
    const [rows] = await sql.query("SELECT * from users");
    res.status(200).json(rows);
  },
  get: async (req, res) => {
    const id = req.params.id;
    if (!isNaN(parseInt(id))) {
      if (await existUser(id)) {
        const user = await sql.query(`SELECT * FROM users WHERE id = ${id}`);
        res.status(200).json(user[0]);
      } else {
        res.status(500).json({
          error: `El usuario con id ${id} no existe.`,
        });
      }
    } else {
      res.status(500).json({
        error: "El parámetro id usuario debe ser numerico",
      });
    }
  },
  create: async (req, res) => {
    const { user, name, email, phone, password } = req.body;
    const isValid = validateInfoUser({ user, name, email, phone, password });
    if (isValid.res) {
      const newPass = encrypt(password, email);
      const [insert] = await sql.query(
        `INSERT INTO users 
                    (user, name, email, phone, password) 
                    VALUES ("${user}", "${name}", "${email}", "${phone}", "${newPass}")`
      );
      res.status(200).json(insert);
    } else {
      res.status(500).json({
        error: isValid.error,
      });
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    const { user, name, email, phone, password } = req.body[0];
    const isValid = validateInfoUser({ user, name, email, phone, password });
    if (isValid.res) {
      if (!isNaN(parseInt(id))) {
        if (await existUser(id)) {
          const passValid = validatePassword(email, password);
          if (!passValid.valid) {
            res.status(500).json({
              error: passValid.error,
            });
            return;
          }
          const [update] = await sql.query(
            `UPDATE users SET user = "${user}", name = "${name}", 
                        email = "${email}", phone = "${phone}", password = "${passValid.password}" 
                        WHERE id = ${id}`
          );
          res.status(200).json(update);
        }
      } else {
        res.status(500).json({
          error: "El parámetro id usuario debe ser numerico",
        });
      }
    } else {
      res.status(500).json({
        error: isValid.error,
      });
    }
  },
  delete: async (req, res) => {
    const id = req.params.id;
    if (!isNaN(parseInt(id))) {
      if (await existUser(id)) {
        const [response] = await sql.query(
          `DELETE FROM users WHERE id = ${id}`
        );
        res.status(200).json(response);
      } else {
        res.status(500).json({
          error: `El usuario con id ${id} no existe.`,
        });
      }
    } else {
      res.status(500).json({
        error: "El parámetro id usuario debe ser numerico",
      });
    }
  },
};

export default controller;
