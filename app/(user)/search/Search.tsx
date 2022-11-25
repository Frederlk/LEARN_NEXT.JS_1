"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const Search = () => {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch("");
        router.push(`/search/${search}`);
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                autoComplete="off"
                type="text"
                placeholder="Enter the Search term"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
            <button type="submit" className="btn bg-blue-500">
                Search
            </button>
        </form>
    );
};

export default Search;
