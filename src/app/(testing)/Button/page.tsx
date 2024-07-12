import { Button } from "@/components/UI/Button";

export default function Home() {
  return (
    <main className="flex items-center h-screen justify-center">
      <Button variant={"secondaryGray"} size={"2xl"} icon={false}>
        Click me
      </Button>
    </main>
  );
}
