import Logo from "../assets/logo";

const CreatedByBlokkah = () => (
        <div className="flex border bg-Gray-50 border-Gray-300 px-6 py-3 rounded-full w-fit gap-2">
            <span className={`text-sm font-semibold`}>Created by</span>
            <Logo className="h-7"/>
        </div>
)

export default CreatedByBlokkah;