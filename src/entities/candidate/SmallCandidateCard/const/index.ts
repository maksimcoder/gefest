import { ColorPalette } from 'shared';
import { GradeLocalNames } from 'shared/const/reference';

export const avatarColors: Record<GradeLocalNames, ColorPalette> = {
	[GradeLocalNames.Junior]: ColorPalette.GRAY_1,
	[GradeLocalNames.Middle]: ColorPalette.PINK_3,
	[GradeLocalNames.Senior]: ColorPalette.TURQUOISE_2,
	[GradeLocalNames.Lead]: ColorPalette.ORANGE_2,
	[GradeLocalNames.Manager]: ColorPalette.PINK_1,
	[GradeLocalNames.TopManager]: ColorPalette.BLUE_1,
};
