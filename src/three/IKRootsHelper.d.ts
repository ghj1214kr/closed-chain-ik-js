import { Frame } from "../core/Frame";
import { Group } from "three";

export class IKRootsHelper extends Group {
	constructor(roots: Array<Frame>);

	setJointScale(scale: number): void;
	updateStructure(): void;
	dispose(): void;
}
