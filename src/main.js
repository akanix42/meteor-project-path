import fs from 'fs';
import path from 'path';

const projectPath = getProjectPath(process.cwd().replace(/\\/g, '/'));
export default projectPath;

function getProjectPath(directory) {
  if (fs.existsSync(path.join(directory, '.meteor'))) {
    return directory;
  }
  const pathAbove = path.resolve(directory, '..');
  if (pathAbove === directory) {
    return null;
  }
  return getProjectPath(pathAbove);
}
