# Building a CKEditor 5 plugin in Drupal
This guide is based on what Llewellyn and I learned while building the CKEditor 5 BS Tooltip plugin, the complete code can be viewed here: https://git.drupalcode.org/project/ckeditor_bs_tooltip. This code is a good example of a fully functioning CKEditor 5 plugin for Drupal.

Building a CKEditor 5 plugin for Drupal differs quite a bit from just building it for CKEditor 5 in general so we decided to run through the steps in this guide. The general guide for creating plugins for CKEditor 5 still proves very useful despite some significant differences in how the environment is set up and how it functions thus it would be good to also read through and understand the fundamentals: https://ckeditor.com/docs/ckeditor5/latest/framework/guides/plugins/abbreviation-plugin/abbreviation-plugin-level-1.html. This guide will help you set up a new plugin and we have added comments in the files with references to the code examples above where it is applicable to hopefully make this easier to understand.

For the purpose of this guide we will make use of the starter files you can clone or download from github here: https://github.com/roaldnel/ckeditor5_plugin_drupal_start.

To get started, create a new folder for the module in modules/custom in the project folder where you want to use the new CKEditor 5 plugin. Import the starter files into this directory (If you cloned the repo the new folder will be named “ckeditor5_plugin_drupal_start“, you can rename this module folder name to whatever you like - this should be a descriptive name for your plugin.

Once you have added the starter files you can update the file names and contents:

Replace the “ckeditor5_plugin_start“ part in all three these yml files in the root directory of the plugin and update the file contents following the TODO comments:

- **ckeditor5_plugin_start**.ckeditor5.yml

- **ckeditor5_plugin_start**.info.yml

- **keditor5_plugin_start**.libraries.yml

Rename the “pluginStart“ folder in the js/ckeditor5_plugins folder, this should match the plugin references changed in the …ckeditor5.yml file in the previous step.

Replace the “pluginstart“ part in all the js file names in the js/ckeditor5_plugins/pluginStart/src directory of the plugin, this should match the plugin library changed in the …ckeditor5.yml file in the previous step. Also update the file contents following the TODO comments in the files, not all files are required so you only need to include and complete the ones you will use:

- **pluginstart**.js

- **pluginstart**_command.js

- **pluginstart**_editing.js

- **pluginstart**_ui.js

- **pluginstart**_view.js

- index.js - This is a **REQUIRED** file which is used to initialise the code that will be used.

- utils.js - This is an optional file, other files could also be added and included in the .js files above.

In the terminal, navigate to the module folder and run the following commands (this assumes yarn is available, if not, please install it first - https://classic.yarnpkg.com/lang/en/docs/install ):
```
yarn install
```
This will install the required CKEditor 5 core code in the node_modules folder (the specific code will be placed in the @ckeditor folder). You should not change anything in this code but it is good to know where your CKEditor functionality is imported from since this differs when building plugins for CKEditor 5 in Drupal. You will now be able to build the project (although the starter code will not add any functionality yet, you will need to add this):
```
yarn build
```
This will add a build folder in the js folder containing the built plugin code - this is what will be used in CKEditor 5 in Drupal.

You can now start implementing your own custom CKEditor 5 plugin, while doing this it may be a good idea to run the watch command in the terminal:
```
yarn watch
```
This will allow yarn to update the built code as you make changes so you can view the changes in your browser right away. Alternatively you can also run the build command after you have made changes for it to be applied to your project.

To install your newly added plugin navigate to [your_site-url]**/admin/modules**, search for your plugin and install it.

Once this is done you can apply the new plugin by navigating to [your_site-url]**/admin/config/content/formats**. Here you can edit the content formats that make use of CKEditor 5 and you should also be able to drag your new toolbar icon into the CKEditor 5 toolbar and save the settings for it to be made available to users.

_Important note:_ At the very least you will have to refresh your browser for changes to the code to be applied - and remember to always rebuild (or watch) your code after making changes. In some cases it may be necessary to clear the server and browser cache and if all else fails you may need to uninstall and reinstall your custom module in Drupal for code changes to be applied correctly.
