export interface IEnviroments {
  locales: string[];
  defaultLocale: string;
  production: boolean;
  productApiUrl: string;
}

export const environment: IEnviroments = {
  locales: ['en', 'ru'],
  defaultLocale: 'en',
  production: false,
  productApiUrl: 'http://localhost:5013/api/v1/products',
};
