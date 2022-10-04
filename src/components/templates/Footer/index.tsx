import React from 'react';

const Footer: React.FC = () => {
    return (
        <React.Fragment>
            { [
                'assets/vendor/object-fit-images/dist/ofi.min.js',
                'assets/vendor/popper.js/dist/umd/popper.min.js',
                'assets/vendor/scrollreveal/dist/scrollreveal.min.js',
                'assets/vendor/animejs/lib/anime.min.js',
                'assets/vendor/bootstrap/dist/js/bootstrap.min.js',
                'assets/vendor/jarallax/dist/jarallax.min.js',
                'assets/vendor/swiper/js/swiper.min.js',
                'assets/vendor/fancybox/dist/jquery.fancybox.min.js',
                'assets/vendor/jquery-countdown/dist/jquery.countdown.min.js',
                'assets/vendor/moment/min/moment.min.js',
                'assets/vendor/moment-timezone/builds/moment-timezone-with-data.min.js',
                'assets/vendor/jquery-daterangepicker/lib/dist/jquery.daterangepicker.min.js',
                'assets/vendor/slider-revolution/js/jquery.themepunch.tools.min.js',
                'assets/vendor/slider-revolution/js/jquery.themepunch.revolution.min.js',
                'assets/vendor/imagesloaded/imagesloaded.pkgd.min.js',
                'assets/vendor/isotope-layout/dist/isotope.pkgd.min.js',
                'assets/vendor/ion-rangeslider/js/ion.rangeSlider.min.js',
                'assets/vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js',
                'assets/vendor/bootstrap-validator/dist/validator.min.js',
                'assets/js/damageinc.min.js',
                'assets/js/damageinc-init.js'
            ].map((script, index) => {
                return <script src={ `https://dmginc.gg/${script}` } key={ index } />;
            }) }

            <script
                type="text/javascript"
                src="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.min.js"
            />
        </React.Fragment>
    );
};

export default React.memo(Footer);
