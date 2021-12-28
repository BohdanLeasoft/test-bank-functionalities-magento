# EMS Online plugin for Magento 2
By integrating your webshop with EMS Online you can accept payments from your customers in an easy and trusted manner with all relevant payment methods supported.
      
## Version number                 
 
* Latest version 1.1.0
 
## Requirements:
- PHP v7.0 to v7.4
- Magento v2.2.x to v2.4.3
                              
## Supported methods ##
* Afterpay
* Amex
* Apple Pay
* Bancontact
* Banktransfer
* Creditcard
* iDEAL
* Klarna Pay Later
* Klarna Pay Now
* Klarna Direkt Debit
* Google-pay
* Sofort
* Payconiq
* Paypal
* Tikkie

## Installation using Composer ##
Magento® 2 uses the Composer to manage the module package and the library. Composer is a dependency manager for PHP. Composer declares the libraries your project depends on and it will manage (install/update) them for you.

Check if your server has composer installed by running the following command:
```
composer –v
``` 
If your server doesn’t have composer installed, you can easily install it by using this manual: https://getcomposer.org/doc/00-intro.md

Step-by-step to install the Magento® 2 extension through Composer:

1.	Connect to your server running Magento® 2 using SSH or another method (make sure you have access to the command line).
2.	Locate your Magento® 2 project root.
3.	Install the Magento® 2 extension through composer and wait till it's completed:
```
composer require emspay/ems-online-magento-2
``` 
4.	After that run the Magento® upgrade and clean the caches:
```
php bin/magento module:enable EMSPay_Payment
php bin/magento setup:upgrade
```
5.  If Magento® is running in production mode you also need to redeploy the static content:
```
php bin/magento setup:static-content:deploy
```
6.  After the installation: Go to your Magento® admin portal and open ‘Stores’ > ‘Configuration’ > ‘Payment Methods’ > ‘EMSPay’.


## Additional ways to install ##

### Installation by curl ###

1. Go to app/code folder 
2. Run command:
```
curl -s https://raw.githubusercontent.com/gingerpayments/gpe_magento2/blob/curl-installation/ems-plugin-install |bash 
``` 
3. Continue installation from step 4 in "Installation using Composer"

### Manual instalation ###

1. Go to app/code folder 
2. Create directories GingerPay/Payment
3. Unzip ems-online.zip file wich attached to release 
4. Continue installation from step 4 in "Installation using Composer"
