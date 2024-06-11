import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { PresignedPost, createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { IObjectStorageService } from "./IObject-storage";

export class S3ObjectStorageService implements IObjectStorageService {
  private readonly s3Client: S3Client;

  constructor() {
    this.s3Client = new S3Client({
      region: process.env.S3_REGION ?? "",
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID ?? "",
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY ?? "",
      },
    });
  }

  async getUploadUrl(key: string): Promise<PresignedPost> {
    const presignedPost = await createPresignedPost(this.s3Client, {
      Bucket: process.env.S3_BUCKET ?? "",
      Key: key,
      Fields: {
        acl: "public-read",
      },
      Conditions: [
        { acl: "public-read" },
        { bucket: process.env.S3_BUCKET ?? "" },
        ["content-length-range", 0, 10485760],
      ],
      Expires: 15 * 60,
    });

    return presignedPost;
  }

  async getFileUrl(key: string, query?: string): Promise<string> {
    return Promise.resolve(
      `https://${env.S3_BUCKET}.s3.${env.S3_REGION ?? ""}.amazonaws.com/${key}${
        query ? `?t=${query}` : ""
      }`,
    );
  }

  async getSignedUrl(
    key: string,
    opts?: { expiresIn?: number },
  ): Promise<string> {
    const url = await getSignedUrl(
      this.s3Client,
      new GetObjectCommand({
        Bucket: process.env.S3_BUCKET,
        Key: key,
      }),
      { expiresIn: opts?.expiresIn ?? 5 * 60 },
    );

    return url;
  }
}
