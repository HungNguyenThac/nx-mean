import {formatFiles, Tree,} from '@nrwl/devkit';
import {ComponentsGeneratorSchema} from './schema';

export default async function (tree: Tree, options: ComponentsGeneratorSchema) {
  await formatFiles(tree);
}
