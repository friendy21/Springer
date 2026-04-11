'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useCustomScripts() {
    const pathname = usePathname();

    useEffect(() => {
        // We ensure jQuery is loaded
        if (typeof window !== 'undefined' && (window as any).$) {
            const $ = (window as any).$;
            
            const initScripts = () => {
                // portfolio Isotope
                if ($('.isotopeWrapper').length) {
                    const $container = $('.isotopeWrapper');
                    const $resize = $('.isotopeWrapper').attr('id');
                    
                    if ($container.isotope) {
                        $container.isotope({
                            itemSelector: '.isotopeItem',
                            resizable: false,
                            masonry: {
                                columnWidth: $container.width() / parseInt($resize || '1')
                            }
                        });
                    }

                    $("a[href='#top']").off('click').on('click', function (e: any) {
                        $("html, body").animate({ scrollTop: 0 }, "slow");               
                        return false;
                    });
                    
                    $('.navbar-inverse').off('click').on('click', 'li a', function () {                
                        $('.navbar-inverse .in').addClass('collapse').removeClass('in').css('height', '1px');
                    });
                    
                    $('#filter a').off('click').on('click', function (this: any) {
                        $('#filter a').removeClass('current');
                        $(this).addClass('current');
                        const selector = $(this).attr('data-filter');
                        if ($container.isotope) {
                            $container.isotope({
                                filter: selector,
                                animationOptions: {
                                    duration: 1000,
                                    easing: 'easeOutQuart',
                                    queue: false
                                }
                            });
                        }
                        return false;
                    });
                }

                // fancybox
                if ($(".fancybox").length && ($ as any).fancybox) {
                    $(".fancybox").fancybox();
                }

                // slider
                if ($('#da-slider').length && ($ as any).fn.cslider) {
                    ($('#da-slider') as any).cslider({
                        autoplay: true,
                        bgincrement: 0
                    });
                }
            };
            
            // Allow a small delay for DOM to render before attaching plugins
            setTimeout(initScripts, 100);
        }
    }, [pathname]);
}
