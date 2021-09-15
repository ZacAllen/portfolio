import React, {Component} from "react";

function Footer(props) {
    return(
        <footer class="footer text-center" id = "footer">
        <div class="container px-4 px-lg-5">
            <h2 class="py-3">Find me on</h2>
            <ul class="list-inline mb-5">
                <li class="list-inline-item">
                    <a class="social-link rounded-circle text-white mr-3" href="https://www.linkedin.com/in/zachsallen/"><i class="icon-social-linkedin"></i></a>
                </li>
                <li class="list-inline-item">
                    <a class="social-link rounded-circle text-white" href="https://github.com/ZacAllen"><i class="icon-social-github"></i></a>
                </li>
            </ul>
            <p class="text-muted small mb-0">Copyright &copy; Zach Allen 2021</p>
        </div>
    </footer>
    )
}
export default Footer;