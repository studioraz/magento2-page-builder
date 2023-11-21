<?php
/*
 * Copyright © 2023 Studio Raz. All rights reserved.
 * See LICENSE.txt for license details.
 */

declare(strict_types=1);

namespace SR\PageBuilder\Plugin\Wysiwyg;

use Magento\Framework\DataObject;
use Magento\PageBuilder\Model\Wysiwyg\DefaultConfigProvider;

/**
 * Class changes styles format configuration for the TinyMCE styles for the page builder
 */
class DefaultConfigProviderPlugin
{
    /**
     * @param  DefaultConfigProvider $subject
     * @param  DataObject            $result
     * @param  DataObject            $config
     * @return DataObject
     */
    public function afterGetConfig(
        DefaultConfigProvider $subject,
        DataObject $result,
        DataObject $config
    ): DataObject
    {
        $settings = $result->getData('settings');

        if (!is_array($settings)) {
            $settings = [];
        }

        /**
         * This option allows you to specify which menus should appear and the order that they appear in the menu bar at the top of TinyMCE.
         * @see https://www.tiny.cloud/docs/configure/editor-appearance/#menubar
         */
        $settings['menubar'] = true;

        /**
         * This option adds an “Advanced” tab to the image dialog allowing you to add custom styles, spacing and borders to images.
         * @see https://www.tiny.cloud/docs/plugins/opensource/image/#image_advtab
         */
        $settings['image_advtab'] = true;

        $settings['plugins'] = $this->getPlugins();

        $settings['toolbar1'] = 'magentovariable magentowidget | prosewrapper | formatselect | styleselect | fontselect | fontsizeselect | lineheight | forecolor backcolor | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | ltr rtl';
        $settings['toolbar2'] = ' undo redo | link anchor table charmap | image media insertdatetime | widget | searchreplace visualblocks  help | hr pagebreak | emoticons';
        $settings['force_p_newlines'] = false;

        $settings['valid_children'] = '+body[style]';

        $result->setData('settings', $settings);

        return $result;
    }

    private function getPlugins(): string
    {
        $plugins = [
            'advlist', // Enhances bullet and numbered lists with additional list styles
            'autolink', // Automatically converts typed URLs and email addresses into hyperlinks
            'code', // Adds a button to view and edit the HTML source code
            'colorpicker', // Enables a color picker tool for choosing colors in toolbars
            'directionality', // Adds buttons to change text direction to RTL or LTR in the editor
            'hr', // Adds a button to insert a horizontal rule (line)
            'imagetools', // Provides tools for editing images once they are uploaded (e.g., crop, resize)
            'link', // Enables link creation and editing within the editor
            'media', // Allows for embedding media elements such as video or audio
            'noneditable', // Enables non-editable elements within the editor
            'paste', // Improves the pasting of content from other sources while maintaining formatting
            'print', // Adds a print button to the toolbar
            'table', // Provides functionalities for creating and editing tables
            'textcolor', // Enables changing the text color and background color
            'toc', // Adds a table of contents based on headings in the content
            'visualchars', // Displays hidden characters like spaces, tab, and new line
            'anchor', // Allows adding anchor points (bookmarks) in the content
            'charmap', // Adds a button to insert special characters
            'codesample', // Inserts code snippets with syntax highlighting
            'contextmenu', // Provides a right-click context menu with additional options
            'help', // Adds a help button to the toolbar with editor usage information
            'image', // Adds image upload and management capabilities
            'insertdatetime', // Inserts the current date and time
            'lists', // Adds numbered and bulleted list capabilities
            'nonbreaking', // Adds a button to insert non-breaking space entities
            'pagebreak', // Inserts a page break (useful for printing)
            'preview', // Adds a button to preview the content
            'searchreplace', // Adds search and replace functionalities
            'template', // Allows the use of predefined content templates
            'textpattern', // Recognizes certain patterns in the text and applies formatting
            'visualblocks', // Shows the block-level elements with a visible border
            'wordcount', // Displays a word and character count
            'magentovariable', // Specific to Magento, allows for inserting Magento variables
            'magentowidget', // Specific to Magento, enables inserting Magento widgets
            'emoticons', // Adds a button to insert emoticons
            'prosewrapper', // Adds a button to wrap content in div with class prose for Hyva theme
        ];

        return implode(' ', $plugins);
    }
}
