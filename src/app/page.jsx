import Image from 'next/image';

const Homepage = () => {
  return (
    <div className="flex flex-col">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 relative rounded-lg overflow-hidden" style={{ height: "300px"}}> {/* Adjust height as needed */}
        <Image src='/hero.jpg' alt='Hero Image' layout="fill" className='object-contain ' />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2"></div>
    </div>
  );
};

export default Homepage;
