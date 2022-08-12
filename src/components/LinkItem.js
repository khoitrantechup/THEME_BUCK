import React from "react";
import LinkItemIcon from "./LinkItemIcon";
const LinkItem = ({ link, icons: LinkStarIcons, onClickLink }) => {
    const { title, link: url, host, is_published, host_key } = link;

    const iconColors = {
        facebook: "text-blue-600 border-blue-600",
        youtube: "text-red-600 border-red-600",
        twitter: "text-blue-500 border-blue-500",
        instagram: "text-red-600 border-red-600",
        linkedin: "text-blue-600 border-blue-600",
        soundcloud: "text-red-600 border-red-600",
        telegram: "text-blue-600 border-blue-600",
        default: "text-zinc-800 border-zinc-800"
    };

    const handleClick = e => {
        e.preventDefault();
        onClickLink(link.uuid);
    };

    return (
        <React.Fragment>
            <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className={`  flex items-center group rounded-2xl py-2 px-3 md:py-3 mb-4 md:px-4 last:mb-0 transition-all border-2 bg-[#EBE1C4] hover:bg-gradient-to-r from-[#B26D28] to-[#EBE1C4] outline-none hover:scale-105 text-[#B26D28] hover:text-[#EBE1C4] ${
                    !is_published && "opacity-60"
                } shadow-md`}
                onClick={handleClick}
            >
                {/* <LinkItemIcon isAlwaysShow className={`${iconColors[host_key] || iconColors.default} opacity-70`}>
                    <LinkStarIcons hostname={host_key} size={24} />
                </LinkItemIcon>
                <div className="flex-1 px-4 font-semibold text-center">{title || host}</div>
                <LinkItemIcon invisible isAlwaysShow>
                    <LinkStarIcons hostname={host_key} size={24} />
                </LinkItemIcon> */}
                <div className="w-full xs:h-10 sm:h-10 md:h-12 lg:h-12 xl:h-12 relative">
                    <LinkItemIcon
                        isAlwaysShow
                        className={`${iconColors[host_key] || iconColors.default} opacity-70 z-10 inline`}
                    >
                        <LinkStarIcons hostname={host_key} size={24} />
                    </LinkItemIcon>
                    <div className="absolute w-full px-4 top-0 h-full xs:leading-10 sm:leading-10 md:leading-[48px] lg:leading-[48px] xl:leading-[48px] font-semibold text-center z-0 inline">
                        {title || host}
                    </div>
                    <LinkItemIcon invisible isAlwaysShow>
                        <LinkStarIcons hostname={host_key} size={24} />
                    </LinkItemIcon>
                </div>
            </a>
        </React.Fragment>
    );
};

export default LinkItem;
