<?php
/*
 * Copyright © 2023 Studio Raz. All rights reserved.
 * See LICENSE.txt for license details.
 */

declare(strict_types=1);

namespace SR\PageBuilder\Plugin\Wysiwyg;


use Magento\Cms\Model\Wysiwyg\Config as Subject;
use Magento\Framework\DataObject;
use SR\PageBuilder\Model\Wysiwyg\ProseWrapper;

class ConfigPlugin
{

    /**
     * @param ProseWrapper $proseWrapper
     */
    public function __construct(protected ProseWrapper $proseWrapper)
    {}

    /**
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function afterGetConfig(Subject $subject, DataObject $config) : DataObject
    {
        $proseWrapperPluginSettings = $this->proseWrapper->getPluginSettings($config);
        $config->addData($proseWrapperPluginSettings);
        return $config;
    }
}
