import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  Categories,
  categoryState,
  customCategories,
  toDoSelector,
} from '../atoms';
import CreateCustomCategories from './CreateCustomCategories';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const customCategory = useRecoilValue(customCategories);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  console.log(customCategory, 'category111');
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
        {customCategory?.map((item) => (
          <option value={item}>{item} </option>
        ))}
      </select>
      <div>
        <CreateToDo />
        <CreateCustomCategories />
      </div>
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
