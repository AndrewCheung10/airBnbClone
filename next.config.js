/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['links.papareact.com']
	},
	env: {
		mapbox_key: "pk.eyJ1IjoicGF6dSIsImEiOiJjbDV4NDhmcW0wcGptM2xvZDZvMHdidXZhIn0.VrOiOA3nm5o-0wElAMLwPw"
	}
}

module.exports = nextConfig
