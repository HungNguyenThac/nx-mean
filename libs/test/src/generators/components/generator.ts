import { formatFiles, Tree } from '@nrwl/devkit';
import { ComponentsGeneratorSchema } from './schema';
import { componentGenerator } from '@nrwl/angular/generators';

export default async function (tree: Tree, options: ComponentsGeneratorSchema) {
  await componentGenerator(tree, {
    name: options.name,
    path: options.path,
    project: options.project,
    changeDetection: 'OnPush',
    standalone: true,
    inlineStyle: false,
    style: 'scss',
    inlineTemplate: false,
  });

  await formatFiles(tree);
}
