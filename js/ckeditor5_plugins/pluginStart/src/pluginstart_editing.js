// SEE https://ckeditor.com/docs/ckeditor5/latest/framework/guides/plugins/abbreviation-plugin/abbreviation-plugin-level-3.html
// for a detailed explanation of how to make use of a command file
// also see the BS Tooltip plugin as an example: https://git.drupalcode.org/project/ckeditor_bs_tooltip

import { Plugin } from 'ckeditor5/src/core';

// TODO: UPDATE THE IMPORT CLASS AND FILE NAME
import PluginStartCommand from "./pluginstart_command";

export default class PluginStartEditing extends Plugin {
  init() {
    this._defineSchema();
    this._defineConverters();

    this.editor.commands.add(
      'addPluginStart', new PluginStartCommand( this.editor )
    );
  }
  _defineSchema() {
    // TODO: Implement schema code, the links in the comments at the top of the file serve as a good guides on how to do this
  }
  _defineConverters() {
    // TODO: Implement converter code, the links in the comments at the top of the file serve as a good guides on how to do this
  }
}
