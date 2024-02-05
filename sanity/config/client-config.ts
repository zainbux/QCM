import imageUrlBuilder from "@sanity/image-url"

const clientConfig = {
    projectId: '1foy2uw8',
    dataset: 'production',
    apiVersion: "2023-06-29"
  }


const builder = imageUrlBuilder(clientConfig);

export function urlFor(source: any) {
  return builder.image(source);
}

export default clientConfig;