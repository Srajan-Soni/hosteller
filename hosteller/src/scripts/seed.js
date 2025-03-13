import dotenv from 'dotenv';
dotenv.config();
import Location from '../models/Location.js';
import Hostels from '../models/Hostels.js';
import dbConnect from '@/lib/dbConnect.js';


const seedData = async () => {
  await dbConnect();

  await Location.deleteMany();
  await Hostel.deleteMany();

  console.log('🗑️ Cleared existing data');

  const locations = [
    { name: 'Delhi', image: 'https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg' },
    { name: 'Mumbai', image: 'https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg' },
    { name: 'Bangalore', image: 'https://static.toiimg.com/photo/msid-54559212,width-96,height-65.cms' },
    { name: 'Chennai', image: 'https://media.istockphoto.com/id/1211952929/photo/marina-beach-chennai-city-tamil-nadu-india-bay-of-bengal-chennai-tourism-east-coast-road.jpg?s=612x612&w=0&k=20&c=kpAeGGwy3TyyD97PJYULLBhxZV9bM_zVP0CU7f1HIZc=' },
    {name: 'Pune', image: 'https://t3.ftcdn.net/jpg/03/20/46/64/360_F_320466451_lyuLhFiKxlcp2vBZk1bV3uPrJVLmaZSB.jpg'}
  ];

  const insertedLocations = await Location.insertMany(locations);

  const hostels = [
    { name: 'ABC Hostel', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7ZSsfzytJDzm0gmshJILRMytp9x5kk7tZA&s', locationId: insertedLocations[0]._id },
    { name: 'Krishna hostel', image: 'https://a0.muscache.com/im/pictures/472e79cf-3833-4744-b0a0-23fac85e50d0.jpg?im_w=720&im_format=avif', locationId: insertedLocations[0]._id },
    { name: 'Versova hostel', image: 'https://media-cdn.tripadvisor.com/media/photo-s/12/50/8b/bf/mad-monkey-hostel-boracay.jpg', locationId: insertedLocations[1]._id },
    { name: 'Sri hostels', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxSJrT7okYJ6QCCgmnMOfNCES5X_wWIlAQg&s', locationId: insertedLocations[2]._id }
  ];

  await Hostels.insertMany(hostels);

  console.log('✅ Database seeded successfully');
  process.exit();
};

seedData().catch(err => {
  console.error('❌ Seeding failed:', err);
  process.exit(1);
});
