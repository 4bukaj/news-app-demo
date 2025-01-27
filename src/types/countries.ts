export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      [languageCode: string]: {
        official: string;
        common: string;
      };
    };
  };
  cca2: string;
  translations: {
    [languageCode: string]: {
      official: string;
      common: string;
    };
  };
  flags: {
    png: string;
    svg: string;
  };
}
