import { Frame } from "./Frame";
import { SOLVE_STATUS } from "./ChainSolver";

export class Solver {
	useSVD: boolean;

	maxIterations: number;
	stallThreshold: number;
	dampingFactor: number;
	divergeThreshold: number;
	restPoseFactor: number;

	translationConvergeThreshold: number;
	rotationConvergeThreshold: number;

	translationFactor: number;
	rotationFactor: number;

	translationStep: number;
	rotationStep: number;

	translationErrorClamp: number;
	rotationErrorClamp: number;

	roots: Array<Frame>;

	constructor(roots: Frame | Array<Frame>);
	updateStructure(): void;
	solve(): Array<SOLVE_STATUS>;
}
