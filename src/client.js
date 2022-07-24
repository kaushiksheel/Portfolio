import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'


export const client=sanityClient({
projectId:'f201tyh4',
dataset:'production',
apiVersion:'2022-07-23',
useCdn:'true',
token:process.env.REACT_APP_SANITY_TOKEN
});


const builder=imageUrlBuilder(client);

export const urlFor=(source)=>builder.image(source)