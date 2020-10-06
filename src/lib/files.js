import fs from 'fs';
import path from 'path';

module.exports = {
  getCurrentDirectoryBase: () => path.basename(process.cwd()),

  directoryExists: filePath => fs.existsSync(filePath),
};
