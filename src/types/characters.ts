export interface Thumbnail {
  extension: string;
  path: string;
}

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
}
