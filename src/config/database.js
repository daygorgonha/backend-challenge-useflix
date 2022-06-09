module.exports = {
  dialect: 'postgres',
  protocol: 'postgres',
  host: process.env.DB_URL,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  dialectOptions: {
    ssl: parseInt(process.env.ENABLE_SSL) === 1 ? true : false,
    rejectUnauthorized: false
  },
  define: {
    timestamps: true,
    underscored: true,
  },
};