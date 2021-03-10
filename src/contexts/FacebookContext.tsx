import { createContext, ReactNode, useState } from "react";

interface FacebookContextData {
    logins: String;
    likes: String;
    profiles: String;
    photos: String;
    videoViews: String;
}

interface FacebookProviderProps {
    children: ReactNode;
}

export const FacebookContext = createContext({} as FacebookContextData);

let timeout: NodeJS.Timeout;

export function FacebookProvider({ children }) {
    const [newLikes, setNewLikes] = useState(0);
    const [newLogins, setNewLogins] = useState(0);
    const [newProfiles, setNewProfiles] = useState(0);
    const [newPhotos, setNewPhotos] = useState(0);
    const [newVideoViews, setNewVideoViews] = useState(0);

    timeout = setTimeout(() => { setNewLikes(newLikes + 17361) }, 250);
    timeout = setTimeout(() => { setNewLogins(newLogins + 3154) }, 250);
    timeout = setTimeout(() => { setNewProfiles(newProfiles + 3) }, 500);
    timeout = setTimeout(() => { setNewPhotos(newPhotos + 868) }, 250);
    timeout = setTimeout(() => { setNewVideoViews(newVideoViews + 23148.25) }, 250);

    const logins = newLogins.toLocaleString('pt-BR');
    const likes = newLikes.toLocaleString('pt-BR');
    const profiles = newProfiles.toLocaleString('pt-BR');
    const photos = newPhotos.toLocaleString('pt-BR');
    const videoViews = newVideoViews.toLocaleString('pt-BR');

    return (
        <FacebookContext.Provider value={{ logins, likes, profiles, photos, videoViews }}>
            {children}
        </FacebookContext.Provider>
    )
}