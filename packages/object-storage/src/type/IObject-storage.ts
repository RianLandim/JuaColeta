export interface PresignedPost {
  url: string;
  fields: Record<string, string>;
}

export interface IObjectStorageService {
  getUploadUrl(key: string): Promise<PresignedPost>;
  getFileUrl(key: string): Promise<string>;
}
