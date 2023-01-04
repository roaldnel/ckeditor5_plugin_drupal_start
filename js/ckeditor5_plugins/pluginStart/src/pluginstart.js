// TODO: UPDATE THE IMPORT CLASS AND FILE NAMES
import PluginStartEditing from './pluginstart_editing';
import PluginStartUI from './pluginstart_ui';

// This one does not need to be updated
import { Plugin } from 'ckeditor5/src/core';

// TODO: UPDATE THE CLASS NAME
export default class PluginStart extends Plugin {
  static get requires() {
    // TODO: UPDATE THE IMPORTED CLASS NAMES TO RETURN
    return [PluginStartEditing, PluginStartUI];
  }
}
