import { Box, SystemStyleObject } from '@chakra-ui/react';
import { FC } from 'react';

type HammerSize = 'small' | 'semiSmall' | 'medium' | 'large';

interface IHammerLogoProps {
	rotate?: number;
	color?: string;
	size?: HammerSize;
	sx?: SystemStyleObject;
}

interface IHammerSizes {
	main: {
		width: string;
		height: string;
	};
	handle: {
		width: string;
		height: string;
	};
	head: {
		width: string;
		height: string;
	};
}

const HammerLogo: FC<IHammerLogoProps> = ({
	color = 'white',
	size = 'large',
	rotate = 0,
	sx,
}) => {
	function defineHammerSize(size: HammerSize): IHammerSizes {
		switch (size) {
			case 'large':
				return {
					main: { width: '210.75px', height: '180.32px' },
					head: { width: '160.03px', height: '83.22px' },
					handle: { width: '106.69px', height: '34.14px' },
				};
			case 'medium':
				return {
					main: { width: '134.08px', height: '114.72px' },
					head: { width: '101.81px', height: '52.94px' },
					handle: { width: '67.88px', height: '21.72px' },
				};
			case 'semiSmall':
				return {
					main: { width: '56.45px', height: '48.3px' },
					head: { width: '42.86px', height: '22.29px' },
					handle: { width: '28.58px', height: '9.14px' },
				};
			case 'small':
				return {
					main: { width: '34.12px', height: '29.19px' },
					head: { width: '25.91px', height: '13.47px' },
					handle: { width: '17.27px', height: '5.53px' },
				};
			default:
				return {
					main: { width: '210.75px', height: '180.32px' },
					head: { width: '160.03px', height: '83.22px' },
					handle: { width: '106.69px', height: '34.14px' },
				};
		}
	}

	function defineHammerBottomPosition(size: HammerSize): string {
		switch (size) {
			case 'large':
				return '30px';
			case 'medium':
				return '20px';
			case 'semiSmall':
				return '10px';
			case 'small':
				return '5px';
		}
	}

	const { main, head, handle } = defineHammerSize(size);
	const border = size === 'small' ? `1px solid ${color}` : `3px solid ${color}`;

	const baseStyles: SystemStyleObject = {
		position: 'absolute',
		left: 0,
		right: 0,
		margin: '0 auto',
	};

	const boxSx: SystemStyleObject = {
		...main,
		position: 'relative',
		transform: `rotate(${rotate}deg)`,
	};

	const headSx: SystemStyleObject = {
		...head,
		...baseStyles,
		border,
		borderRadius: '3px',
	};

	const handleSx: SystemStyleObject = {
		...handle,
		...baseStyles,
		border,
		bottom: defineHammerBottomPosition(size),
		transform: 'rotate(90deg)',
	};

	return (
		<Box sx={{ ...boxSx, ...sx }} className='Hammer'>
			<Box className='Hammer__head' sx={headSx} />
			<Box className='Hammer_handle' sx={handleSx} />
		</Box>
	);
};

export { HammerLogo };
