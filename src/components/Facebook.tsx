import { useContext } from 'react'
import { FacebookContext } from '../contexts/FacebookContext'
import Styles from '../styles/components/Facebook.module.css'

export function Facebook() {
    const { logins, likes, profiles, photos, videoViews } = useContext(FacebookContext);

    return (
        <div className={Styles.facebookContainer}>
            <div>
                <img src="icons/f.png" alt="Facebook" />
                <p>Facebook</p>
                <span>{likes}</span>
                <p>Likes</p>
            </div>
            <div className={Styles.hoverContainer}>
                <p>Facebook</p>
                <p>Logins: {logins}</p>
                <p>Novos Perfis: {profiles}</p>
                <p>Novas Fotos: {photos}</p>
                <p>Visualizações</p>
                <p>de Vídeos: {videoViews}</p>
            </div>
        </div>
    )
}