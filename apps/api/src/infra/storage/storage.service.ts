import { Injectable } from '@nestjs/common';

import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { PresignedPost, createPresignedPost } from '@aws-sdk/s3-presigned-post';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { ConfigService } from '@nestjs/config';
import { ConfigurationProps } from '@utils/configuration.validator';

@Injectable()
export class StorageService {
  private readonly s3Client: S3Client;

  constructor(private configService: ConfigService<ConfigurationProps>) {
    this.s3Client = new S3Client({
      region: this.configService.get('S3_REGION'),
      forcePathStyle: true,
      credentials: {
        accessKeyId: this.configService.get('S3_ACCESS_KEY_ID'),
        secretAccessKey: this.configService.get('S3_SECRET_ACCESS_KEY'),
      },
    });
  }

  async getUploadUrl(key: string): Promise<PresignedPost> {
    const presignedPost = await createPresignedPost(this.s3Client, {
      Bucket: this.configService.get('S3_BUCKET'),
      Key: key,
      Fields: {
        acl: 'public-read',
      },
      Conditions: [
        { acl: 'public-read' },
        { bucket: this.configService.get('S3_BUCKET') },
        ['content-length-range', 0, 10485760],
      ],
      Expires: 15 * 60,
    });

    return presignedPost;
  }

  async getFileUrl(key: string, query?: string): Promise<string> {
    if (this.configService.get('MINIO_URL')) {
      return Promise.resolve(
        `${this.configService.get('MINIO_URL')}/${this.configService.get('S3_BUCKET')}/${key}`,
      );
    } else {
      return Promise.resolve(
        `https://${this.configService.get('S3_BUCKET')}.s3.${this.configService.get('S3_REGION')}.amazonaws.com/${key}${
          query ? `?t=${query}` : ''
        }`,
      );
    }
  }

  async getSignedUrl(
    key: string,
    opts?: { expiresIn?: number },
  ): Promise<string> {
    const url = await getSignedUrl(
      this.s3Client,
      new GetObjectCommand({
        Bucket: this.configService.get('S3_BUCKET'),
        Key: key,
      }),
      { expiresIn: opts?.expiresIn ?? 5 * 60 },
    );

    return url;
  }
}
