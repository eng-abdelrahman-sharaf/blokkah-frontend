import { Button } from "@/app/[locale]/components/Button";

export default function ({onClick}:{onClick: () => void}) {
    return (
        <Button size={"lg"} icon={false} variant={"tertiaryGray"} onClick={onClick}>
            Reset
        </Button>
    )
}