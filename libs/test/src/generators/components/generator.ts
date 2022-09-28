import { formatFiles, Tree } from '@nrwl/devkit';
import { ComponentsGeneratorSchema } from './schema';
import { libraryGenerator } from '@nrwl/js';
import { componentGenerator } from '@nrwl/angular/generators';

export default async function (tree: Tree, options: ComponentsGeneratorSchema) {
  await componentGenerator(tree, {
    name: options.name,
    standalone: true,
    inlineStyle: false,
    inlineTemplate: false,
  });

  await libraryGenerator(tree, {
    name: options.name,
  });
  await formatFiles(tree);
}
