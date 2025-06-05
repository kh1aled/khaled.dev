import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const onMouseMove = (e) => {
            if (cursorRef.current) {
                cursorRef.current.style.left = e.clientX + "px";
                cursorRef.current.style.top = e.clientY + "px";
            }
        };

        window.addEventListener("mousemove", onMouseMove);

        return () => window.removeEventListener("mousemove", onMouseMove);
    }, []);

    return (
        <>
            {/* نخفي مؤشر الماوس الأصلي */}
            <style>{`body { cursor: none; }`}</style>

            {/* الكيرسر الجديد */}
            <div
                ref={cursorRef}
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    pointerEvents: "none",
                    transform: "translate(-50%, -50%)",
                    transition: "background-color 0.3s ease, transform 0.15s ease",
                    zIndex: 9999,
                }}
            />
        </>
    );
};

export default CustomCursor;
