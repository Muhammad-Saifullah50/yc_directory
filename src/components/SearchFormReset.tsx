'use client'

import { LucideX, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const SearchFormReset = () => {

    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;

        if (form) form.reset()
    }

    return (
        <Button type='reset' onClick={reset}  className="search-btn text-white">
            <Link href={'/'}>
                <X />
            </Link>
        </Button>
    )
}

export default SearchFormReset
