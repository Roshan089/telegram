import React from 'react';

const Messagelist = ({ chats }) => {
    console.log(chats);
    return (
        <>
            {chats.map((chat) => (
                <div key={chat.key} className="flex flex-row p-3 hover:bg-gray-200 hover:bg-opacity-5 rounded-2xl" onc>
                    <div className="relative">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                            <img src={chat.id} className="object-cover w-full h-full" alt={`${chat.creator.name}'s profile`} />
                        </div>
                        {chat.creator.name && (
                            <div className="absolute top-0 left-0 flex justify-center items-center w-12 h-12 bg-primary text-white rounded-full">
                                <span className="text-lg font-bold">{chat.creator.name.charAt(0)}</span>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col flex-1 px-4">
                        <div className="text-lg font-bold text-white">{chat.creator.name}</div>
                        <div className="text-md font-medium text-primary">{chat.id}</div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="text-xs text-primary">{chat.lastmessage}</div>
                        <div className="flex justify-end py-1">
                            <span className="bg-slate-600 rounded-xl px-2 text-white">
                                {chat.notification}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Messagelist;
