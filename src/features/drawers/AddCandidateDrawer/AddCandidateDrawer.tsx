import { FC } from 'react';
import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	Input as ChakraInput,
	Grid,
	Box,
	Stack,
	GridItem,
	Avatar,
	Flex,
	FormControl,
	DrawerFooter,
	Button,
} from '@chakra-ui/react';
import { infoBlockSx, inputSx } from './styles';
import { ColorPalette, Text } from 'shared';
import { Input } from './components';

interface IDrawerProps {
	onClose: () => void;
	isOpen: boolean;
}

export const AddCandidateDrawer: FC<IDrawerProps> = ({ onClose, isOpen }) => {
	return (
		<Drawer onClose={onClose} isOpen={isOpen} size='xl'>
			<DrawerOverlay />
			<DrawerContent bg={ColorPalette.GRAY_3}>
				<DrawerCloseButton />
				<DrawerHeader>
					<Text fontSize='40px'>Добавление кандидата</Text>
				</DrawerHeader>
				<DrawerBody>
					<Stack gap='20px'>
						<Box sx={infoBlockSx} className='info-block'>
							<Text fontSize='24px'>Основная информация</Text>
							<Grid
								marginTop='50px'
								templateColumns='repeat(3, 1fr)'
								templateRows='repeat(2, 1fr)'
								columnGap='20px'
								rowGap='30px'>
								<GridItem placeItems='center' className='avatar-grid'>
									<Flex
										height='100%'
										justifyContent='center'
										alignItems='center'>
										<Avatar boxSize='182px' />
									</Flex>
								</GridItem>
								<GridItem colSpan={2} className='info-grid'>
									<Stack gap='30px'>
										<FormControl>
											<Input>
												<ChakraInput
													sx={inputSx}
													size='lg'
													placeholder='Имя'
												/>
											</Input>
										</FormControl>
										<Input>
											<ChakraInput
												sx={inputSx}
												size='lg'
												placeholder='Фамилия'
											/>
										</Input>
										<Input>
											<ChakraInput
												sx={inputSx}
												size='lg'
												placeholder='Отчество'
											/>
										</Input>
									</Stack>
								</GridItem>
								<GridItem className='birth-grid'>
									<Stack gap='30px'>
										<Input>
											<ChakraInput
												sx={inputSx}
												size='lg'
												placeholder='Дата рождения'
											/>
										</Input>
										<Input>
											<ChakraInput
												sx={inputSx}
												size='lg'
												placeholder='Страна'
											/>
										</Input>
										<Input>
											<ChakraInput
												sx={inputSx}
												size='lg'
												placeholder='грейд'
											/>
										</Input>
									</Stack>
								</GridItem>
								<GridItem className='family-grid'>
									<Stack gap='30px'>
										<Input>
											<ChakraInput
												sx={inputSx}
												size='lg'
												placeholder='Семейное положение'
											/>
										</Input>
										<Input>
											<ChakraInput
												sx={inputSx}
												size='lg'
												placeholder='Регион'
											/>
										</Input>
										<Input>
											<ChakraInput
												sx={inputSx}
												size='lg'
												placeholder='Вакансия'
											/>
										</Input>
									</Stack>
								</GridItem>
								<GridItem className='citizenship-grid'>
									<Stack gap='30px'>
										<Input>
											<ChakraInput
												sx={inputSx}
												size='lg'
												placeholder='Гражданство'
											/>
										</Input>
										<Input>
											<ChakraInput
												sx={inputSx}
												size='lg'
												placeholder='Н/П'
											/>
										</Input>
										<Input>
											<ChakraInput
												sx={inputSx}
												size='lg'
												placeholder='Заработная плата'
											/>
										</Input>
									</Stack>
								</GridItem>
							</Grid>
						</Box>
					</Stack>
				</DrawerBody>
				<DrawerFooter>
					<Flex width='100%' justifyContent='space-between'>
						<Button width='200px' size='lg' colorScheme='blackAlpha'>
							Отменить
						</Button>
						<Button width='200px' size='lg' colorScheme='blue'>
							Сохранить
						</Button>
					</Flex>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};
