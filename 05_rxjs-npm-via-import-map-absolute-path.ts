import { Subject } from "@/deps/rxjs.ts";

const src = new Subject<string>();

src.subscribe((event: string) => console.log(event));

src.next("Hello");
src.next("World");
