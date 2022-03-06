// webpack.config.js
var Encore = require('@symfony/webpack-encore');
var path = require('path');

Encore
    
	// the project directory where all compiled assets will be stored
    .setOutputPath('public/build/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')
	
	/*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
     */
	.addEntry('app', './assets/js/app.js')
	.addEntry('home-page', './assets/js/home-page.js')
	
    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()
    //.disableSingleRuntimeChunk()


	/*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */

    // allow legacy applications to use $/jQuery as a global variable
    .autoProvidejQuery()
    // show OS notifications when builds finish/fail
    .enableBuildNotifications(true, (options) => {
        options.alwaysNotify = true;
    })

	.cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())

	// enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

	// enables @babel/preset-env polyfills
    .configureBabel(() => {}, {
        useBuiltIns: 'usage',
        corejs: 3
    })
	 
	/* https://github.com/symfony/webpack-encore/issues/242
	.configureBabel((config) => {
    	config.plugins.push('@babel/plugin-transform-runtime');
	})
	*/

	// enables Sass/SCSS support
	.enableSassLoader()
	
	/* copyFile plugin to copy asset from asset folder to public/build */
	.copyFiles({
		from: './assets/images',
        to: 'images/[path][name].[ext]',
	});
	
	/* Alias to require assets  in vendor or directory outside node_modules */
	/*
    .addAliases({ 
        'aliasname': path.resolve(__dirname, './vendor/path/to/assets/assetname.js'),
    })
	*/
	
	/* add entry only if not production( debud purpose)* 
	if ( !Encore.isProduction()){
		Encore.addEntry('entry-name', './assets/js/asset-name.js')
	}
	*/
    
	let config=Encore.getWebpackConfig();
    
	/* force resolve to node_modules */
	config.resolve.modules= [path.resolve(__dirname, './node_modules'), 'node_modules'];    

// export the final configuration
module.exports = config;