import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
	plugins: [
		createHtmlPlugin({
			entry: './app/js/main.js',

			inject: {
				data: {
					metaTags: `<meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />`,
					header: `
          <div class="header">
            <div class="container">
                <div class="header__inner">
                    <nav class="menu">
                        <ul class="menu__list">
                            <li class="menu__list-item">
                                <a class="menu__list-link" href="#">
                                    About
                                </a>
                            </li>
                            <li class="menu__list-item">
                                <a class="menu__list-link" href="#">
                                    About
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <a class="logo" href="#">
                        <img src="./app/images/logo.svg" alt="logo">
                    </a>

                    <nav class="menu">
                        <ul class="menu__list">
                            <li class="menu__list-item">
                                <a href="#" class="menu__list-link">
                                    Blog
                                </a>
                            </li>
                            <li class="menu__list-item">
                                <a href="#" class="menu__list-link">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <button class="header__burger" type="button">
                        <img src="./app/images/burger.svg" alt="burger-menu">
                    </button>
                </div>
            </div>
        </div>
          `,
					footer: `
          <footer class="footer">
                <div class="footer__content">
                    <div class="container">
                        <div class="footer__inner">
                            <div class="footer__info">
                                <h4 class="footer__info-title">Contact Us</h4>
                                <p class="footer__info-text">
                                    Keffiyeh poutine etsy, paleo cray put a bird on it microdosing schlitz you probably
                                    occupy
                                </p>
                                <a class="footer__info-email" href="mailto:envelopeouremailaddress@email.com">
                                    envelope
                                    ouremailaddress@email.com
                                </a>
                                <form class="footer__form">
                                    <input type="email" class="footer__form-input" placeholder='Subscribe by email'>
                                    <button type='submit' class="footer__form-btn">
                                        Send
                                    </button>
                                </form>
                            </div>
                            <ul class="footer_social">
                                <li class="footer_social-item">
                                    <a href="#" class="footer_social-link footer--facebook">
                                        Facebook
                                    </a>
                                </li>
                                <li class="footer_social-item">
                                    <a href="#" class="footer_social-link footer--instagram">
                                        Instagram
                                    </a>
                                </li>
                                <li class="footer_social-item">
                                    <a href="#" class="footer_social-link footer--pinterest">
                                        Pinterest
                                    </a>
                                </li>
                                <li class="footer_social-item">
                                    <a href="#" class="footer_social-link footer--whatsapp">
                                        WhatsApp
                                    </a>
                                </li>
                                <li class="footer_social-item">
                                    <a href="#" class="footer_social-link footer--youtube">
                                        Youtube
                                    </a>
                                </li>
                            </ul>
                            <nav class="footer__nav">
                                <ul class="footer__nav-list">
                                    <li class="footer__nav-item">
                                        <a class="footer__nav-link" href="$">Delivery</a>
                                    </li>
                                    <li class="footer__nav-item">
                                        <a class="footer__nav-link" href="$">FAQ</a>
                                    </li>
                                    <li class="footer__nav-item">
                                        <a class="footer__nav-link" href="$">Help</a>
                                    </li>
                                    <li class="footer__nav-item">
                                        <a class="footer__nav-link" href="$">More About Us</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="footer__copyright">
                    <div class="container">
                        <p class="footer__copyright-text">
                            674 Gonzales Drive. Washington, PA 15301
                        </p>
                    </div>
                </div>
            </footer>
          `,
					sidebar: `
          <div class="sidebar">
                <button class="sidebar__close" type='button'>
                    <img src="./app/images/icon-close.svg" alt="btn-close">
                </button>
                <div class="sidebar__content">
                    <a class="sidebar__content-logo" href="#">
                        <img src="./app/images/big-logo.png" alt="logo">
                    </a>
                    <h3 class="sidebar__content-title">
                        Furniture for life
                    </h3>
                    <p class="sidebar__content-text">
                        Sustainable hot chicken skateboard, dreamcatcher meggings actually squid. Slow-carb everyday
                        carry +1 art party
                        microdosing, put a bird on it brooklyn
                    </p>
                    <img class="sidebar__content-img" src="./app/images/sidebar-image.jpg" alt="sidebar-image">
                </div>
            </div>
            <div class="backdrop"></div>
          `,
				},
			},
		}),
	],
})
