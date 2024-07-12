import { cn , fontSizesAliases} from "@/app/lib/utils";

export default function Home() {
  return (
    <main>
      <div className={cn(`text-Gray-500 ${fontSizesAliases["display-2xl"]}`)}>abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz</div>
      <div className={cn("text-Gray-500 " + fontSizesAliases["display-2xl"]) }>abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz</div>
      {/* when space is forgotten */}
          <div className={cn("text-Gray-500" + fontSizesAliases["display-2xl"])}>[Error‼️‼️‼️]abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz</div>
    </main>
  );
}