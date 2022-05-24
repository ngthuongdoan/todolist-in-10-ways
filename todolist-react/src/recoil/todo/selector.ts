import { ATOMS, SELECTORS } from "../../constants/recoil-key";
import { STATUS } from "../../types/Todo";
import { selector } from "recoil";
import { todoState } from "./atom";

export const completedTodoState = selector({
	key: SELECTORS.COMPLETED_TODO_STATE, // unique ID (with respect to other atoms/selectors),
	get: ({ get }) => {
		const currentTodo = get(todoState);
		return currentTodo.filter((todo) => todo.status === STATUS.DONE);
	},
});
