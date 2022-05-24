import { ATOMS } from "../../constants/recoil-key";
import { TodoType } from "../../types/Todo";
import { atom } from "recoil";
import { faker } from "@faker-js/faker";

export const todoState = atom<Array<TodoType>>({
	key: ATOMS.TODO_STATE, // unique ID (with respect to other atoms/selectors)
	default: [
		{
			id: faker.datatype.uuid(),
			title: faker.lorem.paragraph(1),
			status: faker.datatype.number({ min: 0, max: 1 }),
		},
		{
			id: faker.datatype.uuid(),
			title: faker.lorem.paragraph(1),
			status: faker.datatype.number({ min: 0, max: 1 }),
		},
		{
			id: faker.datatype.uuid(),
			title: faker.lorem.paragraph(1),
			status: faker.datatype.number({ min: 0, max: 1 }),
		},
		{
			id: faker.datatype.uuid(),
			title: faker.lorem.paragraph(1),
			status: faker.datatype.number({ min: 0, max: 1 }),
		},
		{
			id: faker.datatype.uuid(),
			title: faker.lorem.paragraph(1),
			status: faker.datatype.number({ min: 0, max: 1 }),
		},
		{
			id: faker.datatype.uuid(),
			title: faker.lorem.paragraph(1),
			status: faker.datatype.number({ min: 0, max: 1 }),
		},
		{
			id: faker.datatype.uuid(),
			title: faker.lorem.paragraph(1),
			status: faker.datatype.number({ min: 0, max: 1 }),
		},
		{
			id: faker.datatype.uuid(),
			title: faker.lorem.paragraph(1),
			status: faker.datatype.number({ min: 0, max: 1 }),
		},
	], // default value (aka initial value)
});
