/*
 * All rights reserved.
 * See COPYING.txt for license details.
 */

define(
    [
        'jquery',
        'Magento_Checkout/js/view/payment/default',
        'mage/url'
    ],
    function ($, Component, url) {
        var checkoutConfig = window.checkoutConfig.payment;
        'use strict';
        return Component.extend({
            redirectAfterPlaceOrder: false,
            defaults: {
                template: 'GingerPay_Payment/payment/default'
            },
            afterPlaceOrder: function () {
                window.location.replace(url.build('ginger/checkout/redirect/'));
            },
            getInstructions: function () {
                return checkoutConfig[this.item.method].instructions;
            },
            getPaymentLogo: function () {
                return checkoutConfig[this.item.method].logo;
            }
        });
    }
);
