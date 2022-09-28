import { formatFiles, Tree } from '@nrwl/devkit';
import { LibsGeneratorSchema } from './schema';
import { libraryGenerator } from '@nrwl/js';

export default async function (tree: Tree, options: LibsGeneratorSchema) {
  await libraryGenerator(tree, {
    name: options.name,
    directory: options.directory,
    strict: true,
    buildable: true,
    unitTestRunner: 'jest',
  });
  await formatFiles(tree);
}
