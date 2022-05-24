export enum STATUS {
	UN_DONE,
	DONE,
}

export type TodoType = {
	id?: string;
	title: string;
	status: STATUS;
};

export type ObjectRemovedId<T> = Omit<T, "id">;
