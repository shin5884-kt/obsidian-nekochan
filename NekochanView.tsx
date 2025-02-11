import { IconName, ItemView } from 'obsidian';
import { createRoot, Root } from 'react-dom/client';
import { ReactView } from './ReactView';

export const NekochanViewType = "nekochan";
export class NekochanView extends ItemView {
	root: Root 
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
		this.root = createRoot(this.containerEl.children[1]);
		this.root.render(
			<ReactView/>
		);
	}

    async onClose() {
        this.root.unmount();
    }
}