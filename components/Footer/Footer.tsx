import css from './Footer.module.css'

export default function Footer(){
    return(
<footer className={css.footer}>
    <div className={css.content}>
    <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
    <div className={css.wrap}>
<<<<<<< HEAD
        <p>Developer: Liudmyla Kikhai</p>
        <p>
        Contact us:
        <a href="mailto:student@notehub.app"> student@notehub.app</a>
=======
        <p>Developer: LIUDMYLA KIKHAI</p>
        <p>
        Contact us:
        <a href="mailto:lik@gmail.com"> lik@gmail.com</a>
>>>>>>> c74a224 (7.1)
        </p>
    </div>
    </div>
</footer>
    )
}
