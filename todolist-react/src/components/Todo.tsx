import { todoState } from "../recoil/todo/atom";
import { STATUS, TodoType } from "../types/Todo";
import { useRecoilState } from "recoil";

type TodoProps = {
	todo: TodoType;
};

const Todo: React.FC<TodoProps> = ({ todo }) => {
	const [todoList, setTodoList] = useRecoilState(todoState);

	function changeTodoStatus(status: STATUS) {
		const tempTodo = [...todoList];
		const updatedTodo = tempTodo.find((t) => todo.id === t.id);
		if (updatedTodo) {
			const newTodoList = tempTodo.map((t) => {
				if (t.id === updatedTodo?.id) {
					return {
						...updatedTodo,
						status: +!updatedTodo.status,
					};
				} else {
					return t;
				}
			});

			setTodoList(newTodoList);
		}
	}

	function renderButton() {
		switch (todo.status) {
			case STATUS.DONE:
				return (
					<button
						className=" w-full p-2 border-2 rounded hover:text-white text-gray-800 border-gray-800 hover:bg-gray-800"
						onClick={() => changeTodoStatus(STATUS.UN_DONE)}
					>
						Not Done
					</button>
				);
			case STATUS.UN_DONE:
				return (
					<button
						className="w-full p-2 border-2 rounded hover:text-white text-green-800 border-green-800 hover:bg-green-800"
						onClick={() => changeTodoStatus(STATUS.DONE)}
					>
						Done
					</button>
				);
			default:
				return null;
		}
	}

	return (
		<div className="flex mb-4 items-center gap-4">
			<p
				className={`w-full flex-grow ${
					todo.status === STATUS.DONE
						? "line-through text-green-800"
						: "text-gray-900"
				}`}
			>
				{todo.title}
			</p>
			<div className="flex items-center justify-between w-3/4 gap-2">
				{renderButton()}
				<button className="w-full p-2 border-2 rounded text-red-800 border-red-800 hover:text-white hover:bg-red-800">
					Remove
				</button>
			</div>
		</div>
	);
};

export default Todo;
