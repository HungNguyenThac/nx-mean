import { formatFiles, Tree } from '@nrwl/devkit';
import { LibsGeneratorSchema } from './schema';
import { libraryGenerator } from '@nrwl/js';

export default async function (tree: Tree, options: LibsGeneratorSchema) {
  await libraryGenerator(tree, {
    name: options.name,
  });
  await formatFiles(tree);
}
