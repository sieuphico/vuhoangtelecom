import React from 'react';
import TodoList from '../ToDoList.js';
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import {useCallback, useState, prevState} from 'react';
import {v4} from 'uuid'

function User() {

        const [todoList, setTodoList] = useState([]);
        const [textInput, setTextInput] = useState('');
        const onTextInputChange = useCallback(
            (e) => {
                setTextInput(e.target.value);
            },[],
            );
        const onAddBtnClick = useCallback((e) => {
            //setTodoList([{name:'item 1'}]);
            setTodoList([{id:v4(), name: textInput, isComplete: false},...todoList]);
            console.log(todoList);
            setTextInput("");
        }, [textInput, todoList]);
        const onCheckBtnClick = useCallback((id) => {
            setTodoList(prevState => prevState.map(todo => todo.id === id ? {...todo, isComplete: true} : todo));
        });

        return (
            <div class="todoList">
                User profile
                <h3>Danh sachs can lam</h3>
                <Textfield name="add-todo"
                    placeholder="Them viec can lam"
                    elemAfterInput={
                        <Button isDisabled={!textInput} appearance="primary" onClick={onAddBtnClick}> Thêm</Button>
                    }
                    css={{ padding: "2px 4px 2px" }}
                    value = {textInput}
                    onChange = {onTextInputChange}
                    
                >

                </Textfield>
                <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick}></TodoList>
            </div>
        );
}
export default User;
