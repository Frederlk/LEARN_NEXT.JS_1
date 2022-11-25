"use client";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div>
            <p>Something went Wrong</p>
            <button type="button" onClick={() => reset()}>
                Reset Error Boundary
            </button>
        </div>
    );
}
