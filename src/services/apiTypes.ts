export interface Wrapper<Data> {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: Container<Data>;
}

export interface Container<Data> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Data[];
}

export interface PageParams {
  limit?: number;
  offset?: number;
  orderBy?: "name" | "modified" | "-name" | "-modified";
}
