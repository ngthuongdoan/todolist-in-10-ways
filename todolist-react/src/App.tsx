import { useRecoilValue } from "recoil";
import Todo from "./components/Todo";
import { todoState } from "./recoil/todo";

function App() {
	const todoList = useRecoilValue(todoState);

	return (
		<div className="h-screen w-full flex items-center justify-center bg-teal-lightest font-sans">
			<div className="bg-white rounded shadow p-6 m-4 w-full lg:max-w-lg">
				<div className="mb-4">
					<h1 className="text-gray-900">Todo List</h1>
					<div className="flex mt-4">
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-600"
							placeholder="Add Todo"
						/>
						<button className="flex-no-shrink p-2 border-2 rounded text-teal-800 border-teal-800 hover:text-white hover:bg-teal-800">
							Add
						</button>
					</div>
				</div>
				<div className="max-h-[300px] w-full overflow-y-auto">
					{todoList.length > 0 &&
						todoList.map((todo) => <Todo key={todo.id} todo={todo} />)}
				</div>
			</div>
		</div>
	);
}

export default App;
