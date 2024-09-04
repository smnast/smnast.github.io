import { Icon } from '@iconify/react';

const ContactSection = () => {
    return (
        <>
            <h1>Contact Information:</h1>
            <div>
                <p>
                    <i className="bi bi-envelope"></i> - <a href="mailto:simonashton.dev@gmail.com">simonashton.dev@gmail.com</a> (preferred method of communication)
                </p>
                <p>
                    <i className="bi bi-telephone"></i> - <a href="tel:778-917-9843">778-917-9843</a>
                </p>
                <p>
                    <i className="bi bi-house-door"></i> - Please contact me directly if you need my address.
                </p>
            </div>
            <h1>More Links:</h1>
            <div>
                <p>
                    <i className="bi bi-github"></i> - <a href="https://github.com/smnast/">smnast</a> (Simon Ashton)
                </p>
                <p>
                    <i className="bi bi-discord"></i> - mrpersondev (MrPerson)
                </p>
                <p>
                    <i className="bi bi-youtube"></i> - <a href="https://youtube.com/@smnast">@smnast</a> (Simon Ashton)
                </p>
                <p>
                    <Icon icon="simple-icons:codeforces" /> - <a href="https://codeforces.com/profile/MrPerson">MrPerson</a>
                </p>
            </div>
        </>
    )
}

export default ContactSection
