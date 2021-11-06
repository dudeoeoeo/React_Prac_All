import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
import { List } from 'react-virtualized';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRender = useCallback(
    ({index, key, style}) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      )
    },
    [onRemove, onToggle, todos],  
  )

  return (
    <List
      className="TodoList"
      width={497}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRender} // 항목을 렌더링할 때 쓰는 함수
      list={todos} // 배열
      style={{outline: 'none'}} // List에 기본 적용되는 outline 스타일 제거
    />
  );
};

export default React.memo(TodoList);
