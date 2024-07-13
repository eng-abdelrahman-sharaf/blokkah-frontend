import { Button } from "@/components/UI/Button";

export default function Home() {
  return (
    <main className="flex items-center h-screen justify-center">
      <Button variant={"primary"} size={"xl"} icon={false} className="w-[75%]">
        Verify
      </Button>
    </main>
  );
}
