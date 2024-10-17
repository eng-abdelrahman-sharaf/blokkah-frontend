// may be used in case we want the current date of that ip (will not appear if there is no internet and will be wrong if the user is using vpn)
/* 
async function getCurrentDate() {
    try {
        // Fetch current time from an external API
        const response = await fetch('http://worldtimeapi.org/api/ip');
        const data = await response.json();

        // Create a Date object from the retrieved datetime
        return new Date(data.datetime);
    }
    catch (error) {
        console.error('Error fetching time:', error);
        return null;
    }
}
*/

import { useState } from "react";
import SendIcon from "../../assets/SendIcon";
import { Button } from "@/app/[locale]/components/Button";
import { cn } from "@/lib/utils";
import BOTAvatar from "../../assets/BOTAvatar";

function FormatDate({date}:{date:Date}) {
    const formatter = new Intl.DateTimeFormat(undefined, {
        timeStyle:"short"
    })
    const currentTime = formatter.format(date).toString()
    // Get the day of the week
    const dayIndex = date.getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = daysOfWeek[dayIndex];
    return currentDay + " " + currentTime
}


const Message = ({ type , children}: { type: "incoming" | "outgoing"  , children:any}) => {
    const isIncoming = type == "incoming";
    const date = new Date();
    return (
        <div className={cn("flex gap-4 items-start" , !isIncoming&&"self-end")}>
            {isIncoming && <BOTAvatar className="h-12 w-12" />}
            <div className={cn("gap-1 flex flex-col w-[21rem]" , !isIncoming&&"items-end")}>
                <div className="text-Gray-700 text-medium font-medium">{isIncoming?"Ayid":"You"}</div>
                <div className={cn("text-xl font-regular px-3.5 py-2.5 max-w-[90%]", isIncoming ? "bg-Gray-100 text-Brand-600 rounded-e-lg rounded-bl-lg" : "bg-Secondary-600 text-white rounded-s-lg rounded-br-lg")}>
                    {children} 
                </div>
                <div className="text-Gray-600 text-sm font-regular">{FormatDate({date})}</div>
            </div>
        </div>
    );
}

const Separator = ({className}:{className?:string}) => (
    <div className={cn("h-[1px] bg-Gray-200" , className)}></div>
)

export default function ChatBOT({className}:{className?:string}) {
    const [message , setMessage] = useState("")
    return (
        <div className={cn("w-full grow flex-col flex gap-4 overflow-hidden [&>*]:px-10 py-5" , className)}>
            {/* chatbox */ }
            <div className="flex flex-col overflow-y-auto overflow-x-hidden grow shrink">
                {/* message 1 */}
                {/* Chat Incoming */}
                <Message type="incoming">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dicta explicabo blanditiis qui nam assumenda tempore exercitationem dolorem inventore, quasi sed deserunt delectus, voluptatem laudantium amet repellendus, alias quibusdam dignissimos!
                </Message>
                {/* message 2 */}
                {/* Chat Outgoing */}
                <Message type="outgoing">
                    Lorem.
                </Message>
                {/* message 1 */}
                {/* Chat Incoming */}
                <Message type="incoming">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dicta explicabo blanditiis qui nam assumenda tempore exercitationem dolorem inventore, quasi sed deserunt delectus, voluptatem laudantium amet repellendus, alias quibusdam dignissimos!
                </Message>
                {/* message 2 */}
                {/* Chat Outgoing */}
                <Message type="outgoing">
                    Lorem.
                </Message>
                {/* message 1 */}
                {/* Chat Incoming */}
                <Message type="incoming">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dicta explicabo blanditiis qui nam assumenda tempore exercitationem dolorem inventore, quasi sed deserunt delectus, voluptatem laudantium amet repellendus, alias quibusdam dignissimos!
                </Message>
                {/* message 2 */}
                {/* Chat Outgoing */}
                <Message type="outgoing">
                    Lorem.
                </Message>
            </div>
            {/* separator */}
            <Separator className="self-stretch mx-10"/>
            {/* chat input */}
            <div className="flex gap-2 items-center">
                <textarea placeholder="Message" name="chat-input" className="rounded-lg outline-0 border border-Gray-300 grow resize-none h-14 px-3.5 py-2.5 placeholder:text-xl placeholder:font-regular placeholder:text-Gray-500" required value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                {/* Send Button */}
                <Button icon="only" variant={"primary"} size={"md"} customIconComponent={<SendIcon className="w-5 h-5"/>} className="w-fit p-4" disabled={message.length==0}></Button>
            </div>
        </div>
    )
}