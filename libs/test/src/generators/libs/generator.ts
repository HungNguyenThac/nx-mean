import { formatFiles, Tree } from '@nrwl/devkit';
import { LibsGeneratorSchema } from './schema';
import { libraryGenerator } from '@nrwl/js';

export default async function (tree: Tree, options: LibsGeneratorSchema) {
  /**
   * bước 1: cài đặt nx-plugin: npm install @nrwl/nx-plugin
   *
   * bước 2: tạo một plugin: npx nx g @nrwl/nx-plugin:plugin [plugin_Name]
   * trong plugin sẽ chứa các generator của chính nó.
   *
   * bước 3: tạo thêm generator và plugin có sẵn:
   * npx nx generate @nrwl/nx-plugin:generator [generator_Name] --project=[plugin_Name].
   *
   * bước 4: custom generator trong file generator.ts
   *
   * bước 5: chạy generator:
   *
   * npx nx g @[nx_workspace-name]/[plugin_name]:[generator_name] [name_lib] [directory:optional]
   *
   * lib generator giúp ta tạo các lib thông qua nx-plugin.
   *
   * trong file schema.json mục properties sẽ giúp chúng ta khai báo những option cho việc tạo lib
   * như name và thư mục nơi chứa lib.
   * phần require sẽ khai báo các properties bắt buộc cần bổ sung khi generate lib
   *
   * sử dụng   "$default": {
   *            "$source": "argv",
   *            "index": 0
   *           },
   * để khai báo thứ tự các option, các option là optional cũng được khai báo thứ tự
   *
   * schema.d.ts khai báo interface với các option bổ sung khi tạo lib,
   * việc require hay optional sẽ tương ứng với khai báo bên schema.json
   *
   */

  await libraryGenerator(tree, {
    name: options.name,
    directory: options.directory,
    strict: true,
    buildable: true,
    unitTestRunner: 'jest',
  });
  await formatFiles(tree);
}
