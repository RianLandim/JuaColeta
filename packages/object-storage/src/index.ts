import { S3ObjectStorageService } from "./object-storage.service";
import { sendFile } from "./send-file";
import { PresignedPost } from "./type/IObject-storage";

const storageService = new S3ObjectStorageService();

export { storageService, sendFile, PresignedPost };
