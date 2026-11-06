export type BlogPost = {
  id: number;
  author: BlogAuthor;
  type: string;
  categories: BlogCategory[];
  tags: BlogTag[];
  comment_count: number;
  title: string;
  slug: string;
  featured_image: string;
  description: string;
  body: string;
  configs: any;
  published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
  deleted_at: any;
};

export type BlogAuthor = {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  is_staff: boolean;
  is_active: boolean;
  date_joined: string;
};

export type BlogCategory = {
  id: number;
  title: string;
  slug: string;
  created_at: string;
  updated_at: string;
  parent: any;
};

export type BlogTag = {
  id: number;
  title: string;
  slug: string;
  created_at: string;
  updated_at: string;
};
