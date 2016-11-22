export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export const FilterState = {
    showAll: "SHOW_All",
    showActive: "SHOW_ACTIVE",
    showCompleted: "SHOW_COMPLETED"

}

export interface AppState {
    todos: Todo[],
    visibilityFilter: string
}

