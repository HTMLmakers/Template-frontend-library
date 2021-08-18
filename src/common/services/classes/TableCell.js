export class TableCell {
    constructor(caption, description) {
        this.caption = caption;
        this.description = description;
    }

    localeCompare(b) {
        return this.caption.localeCompare(b instanceof TableCell ? b.caption : b)
    }
}