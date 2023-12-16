export const ChatHeadear = () => {
    return (
        <div className="px-5 py-5 flex justify-between items-center border-b-2">
            <div className="font-semibold text-2xl">DevRel</div>
            <div className="w-1/2">
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Найти чат по пользователю или сообщению"
                    className="rounded-2xl bg-gray-100 py-3 px-5 w-full"
                />
            </div>
            <div
                className="h-12 w-12 p-2 bg-blue-500 rounded-full text-white font-semibold flex items-center justify-center"
            >
                А
            </div>
        </div>
    )
}