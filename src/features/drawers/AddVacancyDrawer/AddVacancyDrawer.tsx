import { FC, useState } from 'react';
import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	Box,
	Stack,
	Flex,
	DrawerFooter,
	Button,
	MenuList,
	MenuButton,
	Menu,
	MenuItem,
	Alert,
	AlertIcon,
} from '@chakra-ui/react';
import { infoBlockSx } from './styles';
import { ColorPalette, IDictionaryItem, Text } from 'shared';
import { CompanyItem, useGetCompanyPositionsQuery } from 'entities/company';
import { useGetAddressesRefQuery } from 'entities/refs';
import { usePostSingleVacancyMutation } from 'entities/vacancy';

interface IDrawerProps {
	onClose: () => void;
	isOpen: boolean;
}

interface IVacancyMenuProps {
	fieldName: VacancyFormValues;
	options?: CompanyItem[];
	buttonValue?: string;
	value?: string;
	onClick?: (name: VacancyFormValues, id: string) => void;
}

const VacancyCompanyMenu: FC<IVacancyMenuProps> = ({
	options,
	fieldName,
	buttonValue,
	onClick,
}) => {
	const listElems = options?.map(({ id, name }) => {
		return (
			<MenuItem onClick={() => onClick?.(fieldName, id)} key={id}>
				{name}
			</MenuItem>
		);
	});
	return (
		<Menu>
			<MenuButton width='200px' as={Button}>
				{buttonValue}
			</MenuButton>
			<MenuList>{listElems}</MenuList>
		</Menu>
	);
};

interface IVacancyRefMenu {
	fieldName: VacancyFormValues;
	options?: IDictionaryItem[];
	buttonValue?: string;
	value?: string;
	onClick?: (name: VacancyFormValues, id: string) => void;
}
const VacancyRefMenu: FC<IVacancyRefMenu> = ({
	options,
	fieldName,
	buttonValue,
	onClick,
}) => {
	const listElems = options?.map(({ code, value }) => {
		return (
			<MenuItem onClick={() => onClick?.(fieldName, String(code))} key={code}>
				{value}
			</MenuItem>
		);
	});
	return (
		<Menu>
			<MenuButton width='200px' as={Button}>
				{buttonValue}
			</MenuButton>
			<MenuList maxHeight='35vh' overflowY='scroll'>
				{listElems}
			</MenuList>
		</Menu>
	);
};

const INITIAL_FORM_VALUES = {
	position_id: '',
	department_id: '',
	grade_id: '',
	employee_count: '',
	priority_code: '',
	salary_from: '',
	salary_to: '',
	deadline: '',
	adress_code: '',
	project: '',
	skills: '',
};

type VacancyFormValues = keyof typeof INITIAL_FORM_VALUES;

// * Из-за нехватки времени, этот компонент был сделан не так, как должен был - прошу это учитывать
export const AddVacancyDrawer: FC<IDrawerProps> = ({ onClose, isOpen }) => {
	const { data: positions } = useGetCompanyPositionsQuery();
	const [postVacancy] = usePostSingleVacancyMutation();

	const { data: addresses } = useGetAddressesRefQuery();

	const [formController, changeController] =
		useState<typeof INITIAL_FORM_VALUES>(INITIAL_FORM_VALUES);
	const fieldNames: Record<string, string> = {};

	function handleControllerChange(name: VacancyFormValues, value: string) {
		changeController((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	}
	function findItemByCode(code: number, ref?: IDictionaryItem[]) {
		return ref?.find((refItem) => refItem.code === code)?.value;
	}

	positions?.positions.forEach((item) => {
		fieldNames[item.id] = item.name;
	});

	async function handlePostVacancy() {
		const result = await postVacancy({
			position_id: formController.position_id,
			department_id: formController.department_id,
			grade_id: formController.grade_id,
			employee_count: 1,
			priority_code: 1,
			salary_from: 50000,
			salary_to: 80000,
			deadline: '2023-10-22',
			adress_code: Number(formController.adress_code),
			project: 'Gefest Pro',
		});
		console.log(result);
	}
	console.log(formController);
	return (
		<Drawer onClose={onClose} isOpen={isOpen} size='xl'>
			<DrawerOverlay />
			<DrawerContent bg={ColorPalette.GRAY_3}>
				<DrawerCloseButton />
				<DrawerHeader>
					<Text fontSize='40px'>Добавление вакансии</Text>
				</DrawerHeader>
				<DrawerBody>
					<Stack gap='20px'>
						<Box sx={infoBlockSx} className='info-block'>
							<Text fontSize='24px'>Основная информация</Text>
							<Stack marginTop='20px'>
								<Flex gap='20px'>
									<VacancyCompanyMenu
										onClick={handleControllerChange}
										fieldName='position_id'
										buttonValue={
											fieldNames[formController.position_id] ||
											'Должность'
										}
										options={positions?.positions}
									/>
									<VacancyRefMenu
										onClick={handleControllerChange}
										fieldName='adress_code'
										buttonValue={
											findItemByCode(
												Number(formController.adress_code),
												addresses
											) || 'Регион'
										}
										options={addresses}
									/>
								</Flex>
							</Stack>
						</Box>
						<Alert status='info'>
							<AlertIcon />
							К сожалению, сейчас к отправке доступны лишь 2 свойства.{' '}
							<br />
							Остальные данные будут заполнены автоматически <br />
							Остальное ожидается в версии 1.1
						</Alert>
					</Stack>
				</DrawerBody>
				<DrawerFooter>
					<Flex width='100%' justifyContent='space-between'>
						<Button width='200px' size='lg' colorScheme='blackAlpha'>
							Отменить
						</Button>
						<Button
							onClick={handlePostVacancy}
							width='200px'
							size='lg'
							colorScheme='blue'>
							Сохранить
						</Button>
					</Flex>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};
