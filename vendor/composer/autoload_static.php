<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit58d73172b3ff0f1bdb30c2d79ff91341
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit58d73172b3ff0f1bdb30c2d79ff91341::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit58d73172b3ff0f1bdb30c2d79ff91341::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
