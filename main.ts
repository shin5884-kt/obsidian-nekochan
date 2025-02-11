import { addIcon, IconName, ItemView, Notice, Plugin } from 'obsidian';

const NekochanViewType = "nekochan";
class NekochanView extends ItemView {
	getViewType(): string {
		return NekochanViewType;
	}

	getDisplayText(): string {
		return "nekochan";
	}

	getIcon(): IconName {
		return "cat";
	}

	async onOpen() {
		const contentEl = this.containerEl.children[1];
		contentEl.empty()
	}
}

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