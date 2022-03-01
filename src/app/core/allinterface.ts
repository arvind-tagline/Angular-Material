import { ThemePalette } from "@angular/material/core";

export interface Allinterface {
}

export interface Task {
    name: string;
    completed: boolean;
    color: ThemePalette;
    subtasks?: Task[];
}

export interface DialogData {
    animal: string;
    name: string;
}
export interface Tile {
    color: string;
    cols: number;
    rows: number;
    text: string;
}