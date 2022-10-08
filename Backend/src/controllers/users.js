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
    if (isNaN(parseInt(id))) {
      res.status(500).json({
        error: "El parámetro id usuario debe ser numerico",
      });
    }
    const exist = await existUser(id);
    if (!exist) {
      res.status(500).json({
        error: `El usuario con id ${id} no existe.`,
      });
    }
    const user = await sql.query(`SELECT * FROM users WHERE id = ${id}`);
    res.status(200).json(user[0]);
  },
  create: async (req, res) => {
    const { user, name, email, phone, password } = req.body;
    const isValid = validateInfoUser({ user, name, email, phone, password });
    if (isValid.res) {
      const newPass = await encrypt(password, email);
      const [insert] = await sql.query(
        `INSERT INTO users 
                    (user, name, email, phone, password, admin) 
                    VALUES ("${user}", "${name}", "${email}", "${phone}", "${newPass}", false)`
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
    const { user, name, email, phone, admin } = req.body;
    const isValid = validateInfoUser({ user, name, email, phone });
    // Validamos que los datos vengan completos
    if (!isValid.res) {
      res.status(500).json({
        error: isValid.error,
      });
      return;
    }
    // Validamos que el id sea numerico
    if (isNaN(parseInt(id))) {
      res.status(500).json({
        error: "El parámetro id usuario debe ser numerico",
      });
      return;
    }
    // Validamos que el usuario exista
    const exist = await existUser(id);
    if (!exist) {
      res.status(500).json({
        error: "El usuario no existe.",
      });
      return;
    }
    // Actualizamos
    const [update] = await sql.query(
      `UPDATE users SET user = "${user}", name = "${name}", 
                  email = "${email}", phone = "${phone}", admin = ${admin} 
                  WHERE id = ${id}`
    );
    res.status(200).json(update);
  },
  delete: async (req, res) => {
    const id = req.params.id;
    if (isNaN(parseInt(id))) {
      res.status(500).json({
        error: "El parámetro id usuario debe ser numerico.",
      });
    }
    const exist = await existUser(id);
    if (!exist) {
      res.status(500).json({
        error: `El usuario con id ${id} no existe.`,
      });
    }
    const [response] = await sql.query(`DELETE FROM users WHERE id = ${id}`);
    res.status(200).json(response);
  },
  changePassword: async (req, res) => {
    const { id, email, password, newPassword } = req.body;
    // Validamos que el usuario exista
    const exist = await existUser(id);
    if (!exist) {
      res.status(500).json({
        error: "El usuario no existe.",
      });
      return;
    }
    // Validamos la contraseña actual
    if (await validatePassword(email, password)) {
      res.status(500).json({
        error: "La contraeña no puede ser la misma.",
      });
      return;
    }
    newPassword = await encrypt(newPassword, email);
    const [update] = await sql.query(
      `UPDATE users SET password = "${newPassword}" WHERE id = ${id}`
    );
    res.status(200).json(update);
  },
  validPassword: async (req, res) => {
    const { email, password } = req.body;
    const [user] = await sql.query(
      `SELECT * FROM users WHERE email = "${email}"`
    );
    if (!user[0]) {
      res.status(500).json({
        error: `El email ${email} no se encuentra registrado.`,
        valid: false,
      });
      return;
    }
    const valid = await validatePassword(email, password);
    if (!valid) {
      res.status(500).json({
        error: "Contraseña Incorrecta",
        valid: valid,
      });
      return;
    }
    res.status(200).json({
      msj: "Usuario Validado Correctamente",
      valid: valid,
      user: user[0],
    });
  },
};

export default controller;
