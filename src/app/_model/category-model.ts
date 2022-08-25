export class Category {
    id: number;
    description: string;
    active: boolean;
    public constructor(init?: Partial<Category>) {
        Object.assign(this, init);
    }
}
