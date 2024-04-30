'use server';
import { uploadFile } from './upload';
import { ListingSchema, TListing } from '@/utils/schema';

export const addListing = async (data: TListing, token: string) => {
  try {
    const res = await uploadFile(data.photos);
    // toast.success('photos upload success');
    console.log(res);
  } catch (error) {
    // toast.error('photos upload failed');
    console.log(error);
  }
  const userInputs = ListingSchema.parse(data);
  console.log(userInputs);
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/events`, {
      method: 'POST',
      body: JSON.stringify({
        ...userInputs,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.ok) {
      // toast.success('listing created');
    }
  } catch (error) {
    // toast.error('something went wrong');
  }
};
