export class Tablasch {
    name: string; // column name
    dataKey: string; // name of key of the actual data in this column
    position?: 'right' | 'left'; // should it be right-aligned or left-aligned?
    isSortable?: boolean; // can a column be sorted?
    constructor(name: string, dataKey: string, position?: 'right' | 'left', isSortable?: boolean) {
        this.name = name;
        this.dataKey = dataKey;
        this.position = position;
        this.isSortable = isSortable;

    }
}
