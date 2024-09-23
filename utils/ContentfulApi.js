import { Config } from "./Config";
import { heroBannerFragment } from "./Fragments";

const defaultOptions = {
  preview: false,
};

export default class ContentfulApi {
  // heroBanner {
  //   headline
  //   subHeading
  //   body {
  //     json
  //     links {
  //       entries {
  //         block {
  //           sys {
  //             id
  //           }
  //           __typename
  //           ... on VideoEmbed {
  //             title
  //             embedUrl
  //           }
  //           ... on CodeBlock {
  //             description
  //             language
  //             code
  //           }
  //         }
  //       }
  //       assets {
  //         block {
  //           sys {
  //             id
  //           }
  //           url
  //           title
  //           width
  //           height
  //           description
  //         }
  //       }
  //     }
  //   }
  //   image {
  //     url
  //     title
  //     description
  //     width
  //     height
  //   }
  // }

  // static async getPageContentBySlug(slug) {
  //   const variables = { slug };
  // const query = `
  // query GetPageContentBySlug($slug: String!, $preview: Boolean!) {
  //   pageContentCollection(limit: 1, where: {slug: $slug}) {
  //     items {
  //       sys {
  //         id
  //       }
  //       title
  //       description
  //       slug
  //       body {
  //         json
  //         links {
  //           entries {
  //             block {
  //               sys {
  //                 id
  //               }
  //               __typename
  //               ... on VideoEmbed {
  //                 title
  //                 embedUrl
  //               }
  //               ... on CodeBlock {
  //                 description
  //                 language
  //                 code
  //               }
  //             }
  //           }
  //           assets {
  //             block {
  //               sys {
  //                 id
  //               }
  //               url
  //               title
  //               width
  //               height
  //               description
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }`;
  //   const query = `
  //   query GetPageContentBySlug($slug: String!) {
  //     pageContentCollection(limit: 1, where: {slug: $slug}) {
  //       items {
  //         title
  //         description
  //         slug
  //       }
  //     }
  //   }`;

  //   const response = await this.callContentful(query, variables);

  //   const pageContent = response.data?.pageContentCollection.items
  //     ? response.data.pageContentCollection.items
  //     : [];

  //   return pageContent.pop();
  // }

  // static async getGeneralContent() {
  //   const query = `
  //   query GetPageContent {
  //     generalCollection {
  //       items {
  //         githubLink
  //         linkedinLink
  //       }
  //     }
  //   }`;

  //   const response = await this.callContentful(query);

  //   return response.data?.generalCollection.items[0];
  // }

  // static async getPaginatedSlugs(page) {
  //   const queryLimit = 100;
  //   const skipMultiplier = page === 1 ? 0 : page - 1;
  //   const skip = skipMultiplier > 0 ? queryLimit * skipMultiplier : 0;

  //   const variables = { limit: queryLimit, skip };

  //   const query = `query GetPaginatedSlugs($limit: Int!, $skip: Int!) {
  //       blogPostCollection(limit: $limit, skip: $skip, order: date_DESC) {
  //         total
  //         items {
  //           slug
  //           }
  //         }
  //       }`;

  //   const response = await this.callContentful(query, variables);

  //   const { total } = response.data.blogPostCollection;
  //   const slugs = response.data.blogPostCollection.items
  //     ? response.data.blogPostCollection.items.map((item) => item.slug)
  //     : [];

  //   return { slugs, total };
  // }

  // static async getAllPostSlugs() {
  //   let page = 1;
  //   let shouldQueryMoreSlugs = true;
  //   const returnSlugs = [];

  //   while (shouldQueryMoreSlugs) {
  //     const response = await this.getPaginatedSlugs(page);

  //     if (response.slugs.length > 0) {
  //       returnSlugs.push(...response.slugs);
  //     }

  //     shouldQueryMoreSlugs = returnSlugs.length < response.total;
  //     page++;
  //   }

  //   return returnSlugs;
  // }

  // static async getAllPageSlugs() {
  //   let page = 1;
  //   let shouldQueryMoreSlugs = true;
  //   const returnSlugs = [];

  //   while (shouldQueryMoreSlugs) {
  //     const response = await this.getPaginatedSlugs(page);

  //     if (response.slugs.length > 0) {
  //       returnSlugs.push(...response.slugs);
  //     }

  //     shouldQueryMoreSlugs = returnSlugs.length < response.total;
  //     page++;
  //   }

  //   return returnSlugs;
  // }

  // static async getPaginatedBlogPosts(page) {
  //   const queryLimit = 10;
  //   const skipMultiplier = page === 1 ? 0 : page - 1;
  //   const skip = skipMultiplier > 0 ? queryLimit * skipMultiplier : 0;

  //   const variables = { limit: queryLimit, skip };

  //   const query = `query GetPaginatedBlogPosts($limit: Int!, $skip: Int!) {
  //       blogPostCollection(limit: $limit, skip: $skip, order: date_DESC) {
  //         total
  //         items {
  //           sys {
  //             id
  //           }
  //           date
  //           title
  //           slug
  //           excerpt
  //           tags
  //           externalUrl
  //           author {
  //             name
  //             description
  //             twitchUsername
  //             twitterUsername
  //             gitHubUsername
  //             websiteUrl
  //             image {
  //               url
  //               title
  //               width
  //               height
  //               description
  //             }
  //           }
  //           body {
  //             json
  //             links {
  //               entries {
  //                 inline {
  //                   sys {
  //                     id
  //                   }
  //                   __typename
  //                   ... on BlogPost {
  //                     title
  //                     slug
  //                   }
  //                 }
  //                 block {
  //                   sys {
  //                     id
  //                   }
  //                   __typename
  //                   ... on VideoEmbed {
  //                     title
  //                     embedUrl
  //                   }
  //                   ... on CodeBlock {
  //                     description
  //                     language
  //                     code
  //                   }
  //                 }
  //               }
  //               assets {
  //                 block {
  //                   sys {
  //                     id
  //                   }
  //                   url
  //                   title
  //                   width
  //                   height
  //                   description
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }`;

  //   const response = await this.callContentful(query, variables);

  //   const { total } = response.data.blogPostCollection;
  //   const posts = response.data.blogPostCollection.items
  //     ? response.data.blogPostCollection.items
  //     : [];

  //   return { posts, total };
  // }

  // static async getAllBlogPosts() {
  //   let page = 1;
  //   let shouldQueryMorePosts = true;
  //   const returnPosts = [];

  //   while (shouldQueryMorePosts) {
  //     const response = await this.getPaginatedBlogPosts(page);

  //     if (response.posts.length > 0) {
  //       returnPosts.push(...response.posts);
  //     }

  //     shouldQueryMorePosts = returnPosts.length < response.total;
  //     page++;
  //   }

  //   return returnPosts;
  // }

  // static async getPostBySlug(slug, options = defaultOptions) {
  //   const variables = { slug, preview: options.preview };
  //   const query = `query GetPostBySlug($slug: String!, $preview: Boolean!) {
  //     blogPostCollection(limit: 1, where: {slug: $slug}, preview: $preview) {
  //       total
  //       items {
  //         sys {
  //           id
  //         }
  //         date
  //         title
  //         slug
  //         excerpt
  //         tags
  //         externalUrl
  //         author {
  //           name
  //           description
  //           twitchUsername
  //           twitterUsername
  //           gitHubUsername
  //           websiteUrl
  //           image {
  //             url
  //             title
  //             width
  //             height
  //             description
  //           }
  //         }
  //         body {
  //           json
  //           links {
  //             entries {
  //               inline {
  //                 sys {
  //                   id
  //                 }
  //                 __typename
  //                 ... on BlogPost {
  //                   title
  //                   slug
  //                 }
  //               }
  //               block {
  //                 sys {
  //                   id
  //                 }
  //                 __typename
  //                 ... on VideoEmbed {
  //                   title
  //                   embedUrl
  //                 }
  //                 ... on CodeBlock {
  //                   description
  //                   language
  //                   code
  //                 }
  //               }
  //             }
  //             assets {
  //               block {
  //                 sys {
  //                   id
  //                 }
  //                 url
  //                 title
  //                 width
  //                 height
  //                 description
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }`;

  //   const response = await this.callContentful(query, variables, options);
  //   const post = response.data.blogPostCollection.items
  //     ? response.data.blogPostCollection.items
  //     : [];

  //   return post.pop();
  // }

  // static async getPaginatedPostSummaries(page) {
  //   const skipMultiplier = page === 1 ? 0 : page - 1;
  //   const skip =
  //     skipMultiplier > 0 ? Config.pagination.pageSize * skipMultiplier : 0;

  //   const variables = { limit: Config.pagination.pageSize, skip };

  //   const query = `query GetPaginatedPostSummaries($limit: Int!, $skip: Int!) {
  //       blogPostCollection(limit: $limit, skip: $skip, order: date_DESC) {
  //         total
  //         items {
  //           sys {
  //             id
  //           }
  //           date
  //           title
  //           slug
  //           excerpt
  //           tags
  //         }
  //       }
  //     }`;

  //   const response = await this.callContentful(query, variables);

  //   const paginatedPostSummaries = response.data.blogPostCollection
  //     ? response.data.blogPostCollection
  //     : { total: 0, items: [] };

  //   return paginatedPostSummaries;
  // }

  // static async getRecentPostList() {
  //   const variables = { limit: Config.pagination.recentPostsSize };
  //   const query = `query GetRecentPostList($limit: Int!) {
  //     blogPostCollection(limit: $limit, order: date_DESC) {
  //       items {
  //         sys {
  //           id
  //         }
  //         date
  //         title
  //         slug
  //         excerpt
  //         tags
  //       }
  //     }
  //   }`;

  //   const response = await this.callContentful(query, variables);

  //   const recentPosts = response.data.blogPostCollection.items
  //     ? response.data.blogPostCollection.items
  //     : [];

  //   return recentPosts;
  // }

  // static async getTotalPostsNumber() {
  //   const query = `
  //     {
  //       blogPostCollection {
  //         total
  //       }
  //     }
  //   `;

  //   const response = await this.callContentful(query);
  //   const totalPosts = response.data.blogPostCollection.total
  //     ? response.data.blogPostCollection.total
  //     : 0;

  //   return totalPosts;
  // }

  static async getPagesSlugs() {
    const query = `query GetPagesSlugs {
      pageContentCollection {
        total
        items {
          slug
        }
      }
    }`;

    const response = await this.callContentful(query);

    const { total } = response.data.pageContentCollection;
    const slugs = response.data.pageContentCollection.items
      ? response.data.pageContentCollection.items.map((item) => item.slug)
      : [];

    return { slugs, total };
  }

  static async getPageBySlug(slug, options = defaultOptions) {
    const variables = { slug, preview: options.preview };

    const query = `
      ${heroBannerFragment}
      query GetPageBySlug($slug: String!) {
        pageContentCollection(limit: 1, where: { slug: $slug }) {
          items {
            title
            description
            blocksCollection {
              items {
                __typename
                ...HeroBannerFragment
              }
            }
          }
        }
      }        
    `;

    const response = await this.callContentful(query, variables, options);

    console.log("xdxd", response);

    const page = response.data.pageContentCollection.items
      ? response.data.pageContentCollection.items
      : [];

    return page;
  }

  static async callContentful(query, variables = {}, options = defaultOptions) {
    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

    const accessToken = options.preview
      ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
      : process.env.CONTENTFUL_ACCESS_TOKEN;

    const fetchOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    };

    try {
      const data = await fetch(fetchUrl, fetchOptions).then((response) =>
        response.json(),
      );
      return data;
    } catch (error) {
      throw new Error("Could not fetch data from Contentful!");
    }
  }
}
