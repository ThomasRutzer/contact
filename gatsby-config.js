module.exports = {
    pathPrefix: "/contact",
    siteMetadata: {
        title: "contact card of creative developer Thomas Rutzer",
        description: "Hay! I am Thomas Rutzer – a creative developer who feels most comfortable where sophisticated design meets well structured code."
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                `IBM Plex Mono\:400,700`
                ]
            }
        },
        {
            resolve: 'gatsby-plugin-html-attributes',
            options: {
                lang: 'en'
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "contact card of creative developer Thomas Rutzer",
                short_name: "contact card of creative developer Thomas Rutzer",
                start_url: "/contact",
                background_color: "#ad57ff",
                theme_color: "#ad57ff",
                display: "standalone",
                icon: "src/images/icon.png"
            }
        },
        'gatsby-plugin-offline'
    ]
}