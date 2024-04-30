'use server';
import { revalidatePath } from 'next/cache';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const s3Client = new S3Client({
  region: process.env.AWS_S3_REGION as string,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

async function uploadFileToS3(file: Buffer, fileName: string) {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME as string,
    Key: `photos/${fileName}`,
    Body: file,
    ContentType: 'image/jpg',
  };

  const command = new PutObjectCommand(params);
  try {
    const response = await s3Client.send(command);
    console.log('File uploaded successfully:', response);
    return fileName;
  } catch (error) {
    throw error;
  }
}

export async function uploadFile(formData: any) {
  try {
    const file = formData.get('file') as Blob;

    if (file.size === 0) {
      return { status: 'error', message: 'Please select a file.' };
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    await uploadFileToS3(buffer, file.name);

    revalidatePath('/listing');
    return { status: 'success', message: 'File has been upload.' };
  } catch (error) {
    return { status: 'error', message: 'Failed to upload file.' };
  }
}
