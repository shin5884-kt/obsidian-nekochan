import { Notice, Plugin } from 'obsidian';

export default class MyPlugin extends Plugin {

	async onload() {
		const ribbonIconEl = this.addRibbonIcon('cat', 'nekochan', (evt: MouseEvent) => {
			new Notice('This is a nekochan plugin!');
		});
		ribbonIconEl.addClass('my-plugin-ribbon-class');
	}

	onunload() {

	}
}