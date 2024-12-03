import Image from "next/image";
import Link from "next/link";

export interface BlogEntryProps {
  category: string;
  date: string;
  author: string;
  title: string;
  image: string;
  description: string;
  href: string;
}

export default function BlogEntry(props: BlogEntryProps) {
  return (
    <article className="group row-span-4 grid grid-rows-subgrid gap-0 overflow-hidden rounded-lg shadow-md backdrop-blur-xs">
      <Image
        width={500}
        height={250}
        className="h-40 w-full object-cover object-center"
        src={props.image}
        alt="content"
      />

      <header className="flex flex-col gap-1 p-4">
        <h3 className="text-accent rounded-full text-xs font-medium tracking-widest uppercase">
          {props.category}
        </h3>
        <h2 className="text-lg font-semibold">{props.title}</h2>
      </header>

      <div className="px-4 py-1">
        <p className="text-muted-foreground text-base leading-relaxed">
          {props.description}
        </p>
      </div>

      <footer className="p-4 pt-6">
        <div className="flex items-center justify-end gap-4 text-xs">
          <span className="text-muted-foreground">{props.date}</span>
          <p className="text-muted-foreground">
            Autor: <span className="font-bold">{props.author}</span>
          </p>
        </div>

        <Link
          href={props.href}
          className="text-accent mt-4 block font-bold group-hover:underline hover:underline"
        >
          Leer más
        </Link>
      </footer>
    </article>
  );
}
