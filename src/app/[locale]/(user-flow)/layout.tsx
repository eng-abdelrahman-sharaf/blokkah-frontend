import Footer from "./home/components/footer";
import Header from "./home/components/header";
import TestingGPT from "./home/components/testingGPT";

export default function ({children}:{children:React.ReactNode}) {
    return (
        <>
            <Header />
            <TestingGPT />
            <div className="pt-24 relative z-0  bg-Gray-100 min-h-svh">
                {children}
                {/* Footer */}
                <Footer />
            </div>
        </>
    )
}