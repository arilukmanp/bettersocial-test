export interface Post {
  id: number;
  user: {
    fullname: string;
    avatar: string | null;
  };
  content: {
    caption: string | null;
    image: string | null;
    likes: number;
    comments: number;
  };
  isPublic: boolean;
  isDisappear: boolean;
  location: string | null;
  createdAt: string;
}
