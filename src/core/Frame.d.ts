export class Frame {
	name: string;
	quaternion: Float32Array;
	position: Float32Array;

	matrix: Float32Array;
	matrixWorld: Float32Array;

	parent: Frame | null;
	children: Array<Frame>;

	setPosition(x: number, y: number, z: number): void;
	setEuler(x: number, y: number, z: number): void;
	setQuaternion(x: number, y: number, z: number, w: number): void;
	setWorldPosition(x: number, y: number, z: number): void;
	setWorldEuler(x: number, y: number, z: number): void;
	setWorldQuaternion(x: number, y: number, z: number): void;

	getWorldPosition(array: Array<number>): void;
	getWorldQuaternion(array: Array<number>): void;

	traverseParents(cb: (parent: Frame) => boolean): void;
	traverse(cb: (child: Frame) => boolean): void;
	find(cb: (child: Frame) => boolean): Frame;

	addChild(child: Frame): void;
	removeChild(child: Frame): void;

	attachChild(child: Frame): void;
	detachChild(child: Frame): void;

	computeMatrixWorld(): void;
	setMatrixNeedsUpdate(): void;
	setMatrixWorldNeedsUpdate(): void;
	updateMatrix(): void;
	updateMatrixWorld(updateChildren: boolean): void;
}
