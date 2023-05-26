export const enum GradeLocalNames {
	Junior = 'Junior',
	Middle = 'Middle',
	Senior = 'Senior',
	Lead = 'Lead',
	Manager = 'Manager',
	TopManager = 'TopManager',
}

interface IGradesLocalObject {
	[index: number]: GradeLocalNames;
}

export const gradesLocal: IGradesLocalObject = {
	1: GradeLocalNames.Junior,
	2: GradeLocalNames.Middle,
	3: GradeLocalNames.Senior,
	4: GradeLocalNames.Lead,
	5: GradeLocalNames.Manager,
	6: GradeLocalNames.TopManager,
};
