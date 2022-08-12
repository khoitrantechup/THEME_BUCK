import React from "react";
import LinkItem from "./components/LinkItem";
import ExampleLinkStarIcons from "./components/LinkStarIcons";
import exampleThemeConfigs from "./data/theme_configs.data";
import exampleUserData from "./data/user.data";
const coverImage = "https://i.pinimg.com/originals/cf/1c/49/cf1c4955df97ddbc4879e2dcab3e581b.png";
const coverAvatar = "https://i.pinimg.com/originals/8f/00/58/8f005822c4fd212ee09f26625f286c2d.png";
export const App = ({
    user: userData = exampleUserData,
    themeConfigs = exampleThemeConfigs,
    icons: LinkStarIcons = ExampleLinkStarIcons,
    onClickLink
}) => {
    return (
        <React.Fragment>
            {userData && LinkStarIcons && (
                <div className="linkstar ">
                    <div className="relative w-full h-full group ">
                        <div className="absolute w-full h-full pt-10">
                            <img
                                src={
                                    userData?.cover_img_absolute ||
                                    themeConfigs?.cover ||
                                    userData.avatar_img_absolute ||
                                    themeConfigs?.default_avatar
                                }
                                className="object-fill  w-full h-full"
                                alt={userData.username}
                            />
                        </div>
                        <div className="relative  grid min-h-full backdrop-blur-2xl bg-cover bg-[#01481B]">
                            <div className="relative z-10 flex flex-col h-full text-stone-700">
                                <div>
                                    {userData.cover_img_absolute || coverImage ? (
                                        <div className="w-full aspect-[5/2] sm:aspect-[4] xs:aspect-[3/2]  xl:aspect-[5/1] px-3 pt-3 mx-auto sm:px-6 sm:pt-6 lg:px-8 lg:pt-8 xl:px-36 xl:py-0">
                                            <img
                                                src={userData.cover_img_absolute || coverImage}
                                                alt={`${userData.username}'s cover`}
                                                className="object-cover object-center w-full h-full bg-gray-100 shadow-md rounded-2xl shadow-black/10 xl:rounded-t-none"
                                            />
                                        </div>
                                    ) : (
                                        <div className="h-24 md:h-32"></div>
                                    )}
                                </div>
                                <div className="w-full  max-w-screen-sm mx-auto mb-6 -mt-14 md:-mt-[3.75rem]">
                                    <div className="mt-3 sm:mt-1 rounded-3xl z-50 md:mt-0 relative text-center">
                                        <div className="lg:h-56 md:h-56 sm:h-56 w-56 xs:h-40 m-auto relative">
                                            <div
                                                className={`w-20 h-20 sm:w-24  md:w-28 sm:h-24 md:h-28 mx-auto overflow-hidden border-4 shadow-md   rounded-full bg-white ${
                                                    !userData.avatar_img_absolute && "p-4"
                                                }`}
                                            >
                                                <img
                                                    src={userData.avatar_img_absolute || themeConfigs.default_avatar}
                                                    className="object-cover object-center w-full h-full"
                                                    alt={userData.username}
                                                />
                                            </div>
                                            <img
                                                className="lg:w-56 lg:h-56 md:w-56 md:h-56 sm:w-56 sm:h-56 xs:h-40 xs:w-40 z-10 absolute top-0  lg:left-0  md:left-0  sm:left-0  xs:left-8"
                                                src={coverAvatar}
                                                alt={userData.username}
                                            ></img>
                                        </div>
                                        <div className="mt-2 text-[#EBE1C4]  font-semibold text-xs text-center  md:text-lg">
                                            <div className="drop-shadow-md">
                                                {userData.display_name ||
                                                    userData.last_name + " " + userData.first_name}
                                            </div>
                                            <div className="drop-shadow-md">@{userData.username}</div>
                                        </div>
                                    </div>
                                    <div className="flex-1 px-4 mt-10  md:mt-16 md:px-0">
                                        {userData.user_links.map(link => (
                                            <LinkItem
                                                key={link.uuid}
                                                link={link}
                                                icons={LinkStarIcons}
                                                onClickLink={onClickLink}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="mx-auto mt-auto">
                                    <div className="flex flex-col items-center text-white w-full pb-8 mx-auto mt-10">
                                        <div className="mb-1 text-sm font-semibold">Powered By</div>
                                        <img src={themeConfigs?.linkstar_logo} alt="LinkStar" className="h-10" />
                                        <div className="mt-1 text-sm font-semibold">
                                            © LinkStar. All rights reserved.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};
