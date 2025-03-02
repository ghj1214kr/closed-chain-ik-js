import { Joint, DOF } from "./Joint";

export class Goal extends Joint {
	isGoal: boolean;

	setGoalDoF(...args: Array<DOF>): void;
	setFreeDoF(...args: Array<DOF>): void;
}
