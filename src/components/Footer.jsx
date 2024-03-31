export function Footer() {
    return (
        <footer className="page-footer green lighten-4">
            <div className="footer-copyright">
                <div className="conrainer">
                    © {new Date().getFullYear()} Copyright
                    <a
                        href="https://github.com/yaspichihin/react-meal"
                        className="grey-text text-lighten-4 right"
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}
