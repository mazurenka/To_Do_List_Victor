import {FilterValuesType, TodoListType} from "../App"
import {v1} from "uuid";

type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST'
    id: string
}

type AddTodolistActionType = {
    type: 'ADD-TODOLIST'
    title: string
}

type ChangeTodolistTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE'
    id: string
    title: string
}

type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER'
    id: string
    filter: FilterValuesType
}

export type ActionType =
    RemoveTodolistActionType
    | AddTodolistActionType
    | ChangeTodolistTitleActionType
    | ChangeTodolistFilterActionType


export function taskReduser(state: Array<TodoListType>, action: ActionType): Array<TodoListType> {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(tl => tl.id !== action.id)
        case 'ADD-TODOLIST':
            const newTodolist: TodoListType = {
                id: v1(),
                title: action.title,
                filter: 'all'
            }
            return [...state, newTodolist]
        case 'CHANGE-TODOLIST-TITLE':
            const todoLists = state.map(tl => {
                if (tl.id === action.id) {
                    return {...tl, title: action.title}
                }
                return tl
            })
            return todoLists
        case 'CHANGE-TODOLIST-FILTER': {
            const todoLists = state.map(tl => {
                if (tl.id === action.id) {
                    return {...tl, filter: action.filter}
                }
                return tl
            })
            return todoLists
        }
        default:
            return state
    }
}


export const RemoveTodoListAC = (id: string): RemoveTodolistActionType => {
    return {type: 'REMOVE-TODOLIST', id: id}
}