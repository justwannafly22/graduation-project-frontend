export interface IEnviroments {
  locales: string[];
  defaultLocale: string;
  production: boolean;
  productApiUrl: string;
  mastersApiUrl: string;
  repairsApiUrl:string;
  replacedPartApiUrl:string;
  authApiUrl:string;
  clientsApiUrl:string;
}

export const environment: IEnviroments = {
  locales: ['en', 'ru'],
  defaultLocale: 'en',
  production: false,
  replacedPartApiUrl:'http://localhost:5012/api/v1/replacedParts',
  productApiUrl: 'http://localhost:5013/api/v1/products',
  mastersApiUrl:'http://localhost:5014/api/v1/masters',
  repairsApiUrl:'http://localhost:5011/api/v1/repairs',
  clientsApiUrl:'http://localhost:5010/api/v1/clients',
  authApiUrl:"http://localhost:5005/api/v1/auth"
};
