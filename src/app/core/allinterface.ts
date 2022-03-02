import { ThemePalette } from "@angular/material/core";

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

export interface Section {
    name: string;
    updated: Date;
}

export interface Food {
    value: string;
    viewValue: string;
}
export interface Animal {
    name: string;
    sound: string;
}

export interface Dessert {
    calories: number;
    carbs: number;
    fat: number;
    name: string;
    protein: number;
}

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
