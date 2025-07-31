import { Frame } from "./Frame";
import { Link } from "./Link";

export const enum DOF {
	X,
	Y,
	Z,
	EX,
	EY,
	EZ,
}

export const DOF_NAMES: Array<string>;

export class Joint extends Frame {
	isJoint: boolean;

	child: Link;
	isClosure: boolean;

	rotationDoFCount: number;
	translationDoFCount: number;

	dof: Array<number>;
	dofFlags: Uint8Array;
	dofValue: Float32Array;
	dofTarget: Float32Array;
	dofRestPose: Float32Array;

	minDoFLimit: Float32Array;
	maxDoFLimit: Float32Array;

	targetSet: boolean;
	restPoseSet: boolean;

	matrixDoF: Float32Array;

	clearDoF(): void;
	setDoF(...args: Array<DOF>): void;

	setDoFValues(...args: Array<number>): void;
	setDoFValue(dof: DOF, value: number): boolean;
	setDoFQuaternion(x: number, y: number, z: number, w: number): void;
	getDoFValue(dof: DOF): number;
	getDoFQuaternion(quat: Array<number>): void;
	getDoFEuler(euler: Array<number>): void;
	getDoFPosition(position: Array<number>): void;

	setRestPoseValues(...args: Array<number>): void;
	setRestPoseValue(dof: DOF, value: number): boolean;
	getRestPoseValue(dof: DOF): number;
	getRestPoseQuaternion(quat: Array<number>): void;
	getRestPoseEuler(euler: Array<number>): void;
	getRestPosePosition(position: Array<number>): void;

	setTargetValues(...args: Array<number>): void;
	setTargetValue(dof: DOF, value: number): boolean;
	getTargetValue(dof: DOF): number;
	getTargetQuaternion(quat: Array<number>): void;
	getTargetEuler(euler: Array<number>): void;
	getTargetPosition(position: Array<number>): void;

	setMinLimits(...args: Array<number>): void;
	setMinLimt(dof: DOF, value: number): void;
	getMinLimit(dof: DOF): number;

	setMaxLimits(...args: Array<number>): void;
	setMaxLimt(dof: DOF, value: number): void;
	getMaxLimit(dof: DOF): number;

	setMatrixDoFNeedsUpdate(): void;
	updateDoFMatrix(): void;

	makeClosure(child: Link): void;
	addChild(child: Link): void;
	removeChild(child: Link): void;
	attachChild(child: Link): void;
	detachChild(child: Link): void;
}
