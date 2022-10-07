export const PORT = process.env.PORT || 3000;

//LOCAL
// export const DB_HOST = process.env.DB_HOST || "localhost";
// export const DB_USER = process.env.DB_USER || "root";
// export const DB_PASSWORD = process.env.DB_PASSWORD || "AguaPanela_11";
// export const DB_NAME = process.env.DB_NAME || "report_now";
// export const DB_PORT = process.env.DB_PORT || 3306;

//DEV
export const DB_HOST = process.env.DB_HOST || "containers-us-west-34.railway.app";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "3ZoNEbQCwgQQkONVDsnR";
export const DB_NAME = process.env.DB_NAME || "railway";
export const DB_PORT = process.env.DB_PORT || 6912;