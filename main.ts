import { Plugin } from 'obsidian';
import { NekochanView, NekochanViewType } from './NekochanView';

export default class MyPlugin extends Plugin {
	view: NekochanView;

	private initView = () => {
		if (this.app.workspace.getLeavesOfType(NekochanViewType).length) {
			return;
		}

		this.app.workspace.getLeftLeaf(false)?.setViewState({
			type: NekochanViewType,
			active: true
		});
	};

	async onload() {
		this.addRibbonIcon('cat', 'nekochan', this.initView);

		this.registerView(
			NekochanViewType,
			(leaf) => this.view = new NekochanView(leaf)
		);
	}

	onunload() {

	}
}