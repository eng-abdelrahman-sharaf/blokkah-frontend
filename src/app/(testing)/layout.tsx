export default function Layout({children}:Readonly<{ children:React.ReactNode}>){

    return (
        <div className="w-screen min-h-screen flex justify-center items-center bg-Gray-400">
            {children}
        </div>
    )
}