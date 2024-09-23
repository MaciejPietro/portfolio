export const heroBannerFragment = `
fragment HeroBannerFragment on HeroBanner {
  name
  headline
  subHeading
  body {
    json
  }
  image {
        url
        title
  }
}
`;
