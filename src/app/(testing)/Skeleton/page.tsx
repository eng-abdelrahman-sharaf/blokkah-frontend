import { Skeleton } from "@/components/UI/Skeleton";

export default function Home() {
  return (
      <main className="flex flex-col items-center space-y-5 mt-3 w-full">
          {/* repeat 10 times */}
          {Array.from({ length: 10 } ,(_ , index) => (<div key={index} className="flex flex-col space-y-3 p-3 border border-Gray-200 rounded-lg w-fit">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
              </div>
          </div>))}
    </main>
  );
}
