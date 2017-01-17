'use strict';

const siteDomain = 'diegovilarinho.dev';
const wpApi = 'wp-json/wp/v2';
const wpApiUrl = 'http://' + siteDomain + '/' + wpApi;

const apiSettings = {
	site_domain: siteDomain,
	wp_api: wpApi,
	wp_api_url: wpApiUrl
};

export default apiSettings;