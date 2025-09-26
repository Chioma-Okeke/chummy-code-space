"use client"

import { ArrowUp } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

function BackToTop() {
    const [showScrollTopButton, setShowScrollTopButton] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                setShowScrollTopButton(true);
            } else {
                setShowScrollTopButton(false);
            }
        });
    }, []);

    function scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <>
            {showScrollTopButton && (
                <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <Button
                        onClick={() => scrollTop()}
                        variant="outline"
                        className="p-2 text-purple-600 hover:text-purple-700 rounded-full size-9 hover:scale-125 "
                    >
                        <ArrowUp className="w-6 h-6" />
                    </Button>
                </div>
            )}
        </>
    );
}

export default BackToTop;