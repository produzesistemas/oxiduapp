
export class State {
    description: string;
    initials: string;

    public constructor(init?: Partial<State>) {
        Object.assign(this, init);
    }
}
