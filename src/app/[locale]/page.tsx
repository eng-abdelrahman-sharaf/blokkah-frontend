import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';
import image from "@/app/[locale]/buyer/assets/building.png"
import Background from './components/background';

export default async function Home() {
  // Fetch session on the server
  const session : any = await getServerSession(authOptions);
  return (
    <main>
        {session?.user?.email}
    </main>
  );
}