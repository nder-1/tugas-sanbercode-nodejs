import { Buffer } from 'buffer';

export const toDataURI = (file: Express.Multer.File) => {
  const data = file.buffer.toString('base64');
  return `data:${file.mimetype};base64,${data}`;
};
