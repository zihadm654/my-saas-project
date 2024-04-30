// 'use server';
// import { TListing } from '@/utils/schema';
// import getCurrentUser from './getCurrentUser';

// export async function getListings() {
//   const user = await getCurrentUser();
//   try {
//     const res = await fetch('https://dmt-tourism.onrender.com/v1/events', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       next: { revalidate: 3600 },
//     });
//     if (res.ok) {
//       const listings = await res.json();
//       console.log(listings, 'listings');
//       return listings;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
// export default async function getListing(id: string) {
//   try {
//     const user = await getCurrentUser();
//     const token = user?.user?.token;
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/v1/events/${id}`,
//       {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     if (res.ok) {
//       return await res.json();
//     }
//   } catch (error: any) {
//     throw new Error(error);
//   }
// }
// export async function deleteListing(id: string) {
//   const user = await getCurrentUser();
//   const token = user?.user?.token;
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/v1/events/${id}`,
//       {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//   } catch (error: any) {
//     throw new Error(error);
//   }
// }
