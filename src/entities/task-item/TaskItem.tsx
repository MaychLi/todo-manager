import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
import {useEffect, useState} from 'react';
import ButtonGroup from '../../features/task-filters/TaskFilters';
import ControlledCheckbox from '../../shared/ui/checkbox/checkbox.tsx';
import styles from './TaskItem.module.scss';
import { Todo } from '../../app/redux/tasks/asyncAction';

const Item = styled(Paper)(({theme}) => ({
	backgroundColor: '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'left',
	overflowWrap: 'break-word',
	wordBreak: 'break-word',
	whiteSpace: 'normal',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginTop: '1px !important',
	color: theme.palette.text.secondary,
	...theme.applyStyles('dark', {
		backgroundColor: '#1A2027',
		borderBlockColor: '#EDEDED',
	}),
}));

interface BasicProps {
	tasks: string[];
}
export default function BasicStack({tasks}: BasicProps) {
	const mapObject = tasks.map((task, index) => ({
		id: index,
		todo: task,
		userId: 1,
		completed: false,
	}));
	const [taskList, setTaskList] = useState(mapObject);
	const [filter, setFilter] = useState('All Tasks');
	
	const updateTaskList = (prevTasks: Todo[]) => {
		const existingTaskIds = prevTasks.map(task => task.todo);
		const newTasks = mapObject.filter(task => !existingTaskIds.includes(task.todo))
		return [...prevTasks, ...newTasks]
	};
	
	const clearCompleted = (() => {
		setTaskList(taskList.filter((todo) => !todo.completed))
	})
	
	useEffect(() => {
		setTaskList(prevTasks => updateTaskList(prevTasks))
	}, [tasks]);


	const onChangeClick = (id: number) => {
		setTaskList(prevTasks =>
			prevTasks.map(task => (task.id === id ? {...task, completed: !task.completed} : task)),
		);
	};

	const filteredTasks = taskList.filter(task => {
		switch (filter) {
			case ('Active'):
				return !task.completed;
			case ('Completed'):
				return task.completed;
			default:
				return true;
		}
	});

	return (
		<Box sx={{ width: '75ch' }}>
			<Stack spacing={2}>
				{filteredTasks.map(task => (
					<Item key={task.id}>
						<div className={`${styles.root} ${task.completed ? styles.completed : ''}`}>{task.todo}</div>
						<ControlledCheckbox onClick={() => onChangeClick(task.id)} />
					</Item>
				))}
			</Stack>
			<div className={styles.group}>
				<ButtonGroup onFilterChange={setFilter} />
			</div>
			{taskList.some(todo => todo.completed) && (
				<div className={styles.clear}>
					<button className={styles.button} onClick={clearCompleted}>clear</button>
				</div>
			)}
		</Box>
	);
}
