import styles from './Footer.module.css';

export function Footer() {
    return (
        <section className={ styles.footer }>
            <div>
                <p>Copyright &copy; Gabriel Willms - 2025</p>
            </div>
            <div>
                <h4>willms75@gmail.com</h4>
                <p>created by @gwillms</p>
            </div>
        </section>
    )
}