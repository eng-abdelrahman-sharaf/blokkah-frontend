import { AVButton } from "@/components/UI/Button";

export default function Home() {
  return (
    <main>
      <h1 className="text-display-2xl font-regular">
        Display 2xl
        <br />
        Regular
      </h1>
      <AVButton variation="primary" label="button" />
    </main>
  );
}
