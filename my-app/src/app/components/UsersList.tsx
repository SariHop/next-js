"use client";

import React, { useState } from 'react';
import User from '@/app/types/user';
import useCounter from '@/app/store/zustan';

const UsersList = () => {
    const usersList: User[] = useCounter(state => state.users);
    const deleteUser: (id: number) => void = useCounter(state => state.deleteUser);
    const updateUser: (id: number, user: User) => void = useCounter(state => state.updateUser);
    const createUser: (user: User) => void = useCounter(state => state.createUser);

    const [inputvalu, setInputvalue] = useState<string>('');

    const handleUpdate = (id: number) => {
        const user: User = { id: Date.now(), username: inputvalu };
        updateUser(id, user);
    };

    const handleCreate = () => {
        const user: User = { id:Date.now(), username: inputvalu };
        createUser(user);
    };

    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <input
                className="border rounded px-2 py-2 mb-4"
                onChange={(e) => { setInputvalue(e.target.value); }}
                placeholder="Enter username"
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded ml-2 hover:bg-blue-600"
                onClick={handleCreate}
            >
                Create
            </button>

            <div className="mt-4">
                {usersList && usersList.map((user) => (
                    <div
                        key={user.id}
                        className="flex items-center justify-between bg-white shadow-md p-2 mb-2 rounded"
                    >
                        <span>{user.username}</span>
                        <div className="space-x-2">
                            <button
                                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                                onClick={() => { handleUpdate(user.id); }}
                            >
                                Edit
                            </button>
                            <button
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                onClick={() => { deleteUser(user.id); }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UsersList;
