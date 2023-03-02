# Magento 2 module to change the page builder Tyne MCE settings

## Features
1. Changes the Tyne MCE settings for the Page Builder
2. Adds new styles for the Text Area Editor in Page Builder

## Installation

1. To access Studio Raz *private* packages in Composer, configure authentication for the project:
    ```
    composer config --auth http-basic.repo.packagist.com <username> <password>
    ```
2. Set up the custom repository with the following command
    ```
    composer config repositories.private-packagist composer https://repo.packagist.com/studioraz/
    composer config repositories.packagist.org false
    ```

3. Install this module within Magento 2 using composer
    ```
    composer require studioraz/magento2-{module-name}
    ```

4. After this, enable the module as usual
    ```
    bin/magento mo:e SR_{ModuleName} &&
    bin/magento s:up
    ```
