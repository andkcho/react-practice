import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="bd-footer text-muted">
                <div className="container-fluid p-3 p-md-5">
                    <ul className="bd-footer-links">
                        <li><a href="https://github.com/twbs/bootstrap">GitHub</a></li>
                        <li><a href="https://twitter.com/getbootstrap">Twitter</a></li>
                        <li><a href="/docs/4.1/examples/">Examples</a></li>
                        <li><a href="/docs/4.1/about/overview/">About</a></li>
                    </ul>
                    <p>Designed and built with all the love in the world by <a href="https://twitter.com/mdo" target="_blank" rel="noopener">@mdo</a> and <a href="https://twitter.com/fat" target="_blank" rel="noopener">@fat</a>. Maintained by the <a href="https://github.com/orgs/twbs/people">core team</a> with the help of <a href="https://github.com/twbs/bootstrap/graphs/contributors">our contributors</a>.</p>
                    <p>Currently v4.1.3. Code licensed <a href="https://github.com/twbs/bootstrap/blob/master/LICENSE" target="_blank" rel="license noopener">MIT</a>, docs <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="license noopener">CC BY 3.0</a>.</p>
                </div>
            </footer>
        );
    }
}

export default Footer