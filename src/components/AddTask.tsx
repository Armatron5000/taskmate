import { FormEvent, SyntheticEvent } from 'react';
import { Props } from '../App';
import { format } from 'date-fns';

export const AddTask = ({ tasklist, setTasklist }: Props) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const currentDate: Date = new Date();
    //console.log(currentDate);
    const formattedCurrentDate: string = format(currentDate, 'yyyy/MM/dd @ hh:mm aa');
    const target = event.currentTarget;
    const newTask = {
      id: currentDate.getTime(),
      name: target.task.value,
      time: formattedCurrentDate
    }
    setTasklist([...tasklist, newTask]);
    target.task.value = "";
  }

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input type="text" name='task' className="task" autoComplete="off" placeholder="add task" maxLength={25} />
        <button type="submit">Add</button>
      </form>
    </section>
  )
}
