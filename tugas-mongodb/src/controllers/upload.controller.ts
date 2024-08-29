import { Request, Response } from 'express';
import { toDataURI } from '../utils/encode';
import { handleUpload } from '../utils/cloudinary';

export default {
  async single(req: Request, res: Response) {
    if (!req.file) {
      return res.status(400).json({
        message: 'No file uploaded',
        data: null,
      });
    }
    const dataURI = toDataURI(req.file);

    try {
      const result = await handleUpload(dataURI);
      res.status(200).json({ message: 'File uploaded', data: result });
    } catch (error) {
      res.status(400).json({ message: 'Error uploading file', data: (error as Error).message });
    }
  },

  async multiple(req: Request, res: Response) {
    if (!req.files || (req.files as Express.Multer.File[]).length === 0) {
      return res.status(400).json({
        message: 'No files uploaded',
        data: null,
      });
    }
    const files = req.files as Express.Multer.File[];

    const dataURIs = files.map(file => toDataURI(file)).map(handleUpload);

    try {
      const results = await Promise.all(dataURIs);
      res.status(200).json({ message: 'Files uploaded', data: results });
    } catch (error) {
      res.status(400).json({ message: 'Error uploading files', data: (error as Error).message });
    }
  },
};
