import fs, { promises as fsPromiseApis } from 'fs';
const fileAction = {
  read: (path: string, encoding?: BufferEncoding): Promise<string> => {
    return fsPromiseApis.readFile(path, { encoding: encoding || 'utf8' });
  },
  write: (path: string, content: string, encoding: BufferEncoding): Promise<void> => {
    return fsPromiseApis.writeFile(path, content, { encoding: encoding || 'utf8' });
  },
  rename: (oldPath: string, newPath: string) => {
    return fsPromiseApis.rename(oldPath, newPath);
  },
  delete: (path: string) => {
    return fsPromiseApis.unlink(path);
  },
  hasFile: (path: string) => {
    return fsPromiseApis.access(path, fs.constants.F_OK);
  },
  canWrite: (path: string) => {
    return fsPromiseApis.access(path, fs.constants.W_OK);
  },
  canRead: (path: string) => {
    return fsPromiseApis.access(path, fs.constants.R_OK);
  },
};
export default fileAction;
