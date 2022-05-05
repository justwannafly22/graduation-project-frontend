export interface IEnviroments {
  locales: string[];
  defaultLocale: string;
  production: boolean;
  //apiUrl: string;
}

export const environment: IEnviroments = {
  locales: ['en', 'ru'],
  defaultLocale: 'en',
  production: false,
  //apiUrl: 'https://innowise-cv-generator.herokuapp.com',
};
