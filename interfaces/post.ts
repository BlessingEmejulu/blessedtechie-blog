
export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  imageUrl?: string;
  body: any; // 'any' for rich text
}