import React, {Component} from "react";

function Footer(props) {
    return(
        <footer className="footer text-center" id = "footer">
        <div className="container px-4 px-lg-5">
            <h2 className="py-3">Find me on</h2>
            <ul className="list-inline mb-5">
                <li className="list-inline-item">
                    <a className="social-link rounded-circle text-white mr-3" href="https://www.linkedin.com/in/zachsallen/"><i className="icon-social-linkedin"></i></a>
                </li>
                <li className="list-inline-item">
                    <a className="social-link rounded-circle text-white" href="https://github.com/ZacAllen"><i className="icon-social-github"></i></a>
                </li>
            </ul>
            <p className="text-muted small mb-0">Copyright &copy; Zach Allen 2021</p>
        </div>
    </footer>
    )
}
export default Footer;