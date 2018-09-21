declare module 'egg' {
  interface Application {
    thunkRedis: any;
  }

  interface EggAppConfig {
    thunkRedis: any;
  }
}