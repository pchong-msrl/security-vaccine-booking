interface IConfig {
  api: {
    admin: string;
    user: string;
  };
}

const config: IConfig = {
  api: {
    admin: process.env.API_ADMIN || "http://localhost:8000",
    user: process.env.API_USER || "http://localhost:5000",
  },
};
export default config;
