import React from "react";

const LinkItemIcon = ({ children, invisible = false, isAlwaysShow = false, className, style }) => {
    let widthClassName = "w-10 md:w-12";
    const invisibleClassName = invisible ? "invisible" : "";

    if (!isAlwaysShow && invisible) {
        widthClassName = "w-px";
    } else if (invisible) {
        widthClassName = "w-10 hidden md:block invisible md:block";
    }

    return (
        <React.Fragment>
            <div
                className={`flex items-center justify-center ${widthClassName} h-10 md:h-12 rounded-full border-2 bg-white/80 bg-opacity-20 group-hover:bg-opacity-20 transition-colors ${invisibleClassName} ${className}`}
                style={style}
            >
                {children}
            </div>
        </React.Fragment>
    );
};

export default LinkItemIcon;
