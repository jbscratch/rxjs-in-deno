import { Subject } from "npm:rxjs@7.5.6";

const src = new Subject<string>();

src.subscribe((event: string) => console.log(event));

src.next("Hello");
src.next("World");
