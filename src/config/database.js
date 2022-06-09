
module.exports = {
  dialect: 'postgres',
  protocol: 'postgres',
  host: process.env.DATABASE_URL,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  dialectOptions: {
    ssl: true,
    rejectUnauthorized: false
  },
  define: {
    timestamps: true,
    underscored: true,
  },
};