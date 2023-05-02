import './footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className='links'>
                <a href='https://www.linkedin.com/company/newtrun/?
                trk=public_profile_experience-item_profile-section-card_image-click
                &originalSubdomain=in'>
                    Linkedin
                </a>

                <p>For support and careers<br/> you can contact <a href='mailto:neha@newtrun.com'>here</a></p>
            </div>
            <p className='copyright'>NEWTRUN Labs &copy; 2023</p>
        </div>
    );
}

export default Footer