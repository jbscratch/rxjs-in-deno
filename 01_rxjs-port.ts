import { Subject } from "https://deno.land/x/rxjs@v1.0.2/mod.ts";

const src = new Subject<string>();

src.subscribe((event) => console.log(event));

src.next("Hello");
src.next("World");
