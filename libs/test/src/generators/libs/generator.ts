import {
  formatFiles,
  getProjects,
  Tree,
  updateProjectConfiguration,
} from '@nrwl/devkit';

export default async function (tree: Tree) {
  const projects = getProjects(tree);


  for (const [projectName, projectConfiguration] of projects.entries()) {
    if (
      projectConfiguration.projectType === 'application' ||
      !projectConfiguration.targets['build'] ||
      projectConfiguration.targets['build'].executor ===
        '@nrwl/angular:package'
    ) {

      continue;
    }

    updateProjectConfiguration(tree, projectName, {
      ...projectConfiguration,
      targets: {
        ...projectConfiguration.targets,
        build: {
          ...projectConfiguration.targets['build'],
          executor:  '@nrwl/angular:package',
        },
      },
    });
  }

  await formatFiles(tree);
}
