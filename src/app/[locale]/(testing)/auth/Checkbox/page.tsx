import Checkbox from "@/app/[locale]/components/checkbox";

export default function Page() {
  return (
    <>
      <Checkbox
        labelChild={
          <div className="text-md font-medium text-Gray-500">
            {"By creating account, You agree to our "}
            <a href="#" className="text-Gray-700">
              Terms and Conditions
            </a>
          </div>
        }
      />
    </>
  );
}
