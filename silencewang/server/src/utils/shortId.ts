import { v4 as uuidv4 } from 'uuid';

const CHARSET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const generateShortId = (): string => {
  const uuid = uuidv4().replace(/-/g, '');
  let shortId = '';

  for (let i = 0; i < 8; i++) {
    const hex = parseInt(uuid.substr(i * 2, 2), 16);
    shortId += CHARSET[hex % CHARSET.length];
  }

  return shortId;
};

export const generateFullId = (): string => {
  return uuidv4();
};
