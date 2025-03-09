import FullProject from "@/app/components/FullProject";

export default function CarSpot() {
  return (
    <FullProject
      nextProject={"/dulafra"}
      projectName={"CarSpot"}
      projectServices={"Design & Full-stack Web Development"}
      projectImages={[
        "https://rdbh1o39u7awif7j.public.blob.vercel-storage.com/images/carspot1-xcwd5dDB2N0wLoyXnQkf9nd2dRa8tU.png",
        "https://rdbh1o39u7awif7j.public.blob.vercel-storage.com/images/carspot2-mv6iKdZvIOUZ8aToN6lyaEQJuWeC32.png",
        "https://rdbh1o39u7awif7j.public.blob.vercel-storage.com/images/carspot3-5p9fu71WZBxwlkbXC3V4NTpiAASNBx.png",
      ]}
      projectInfoHeading={"Project Info"}
      projectInfo={[
        `CarSpot enables users to explore and connect through unique car sightings. With its powerful search feature, users can effortlessly look up car spots, apply filters, and discover exciting finds shared by others. The platform also offers Spotter Profiles, allowing users to view all spots of their favourite spotters and stay updated on their latest sightings.`,
        <br key="line-break" />,
        <br key="line-break" />,
        `One standout feature of CarSpot is its Global Map View. This interactive map visually showcases car spots worldwide, providing users with precise locations and offering a global perspective on the car-spotting community.`,
        <br key="line-break" />,
        <br key="line-break" />,
        `To ensure accuracy and maintain high-quality content, CarSpot includes a Spot Validation process when uploading spots. This feature verifies uploaded details such as location accuracy and photo authenticity, ensuring the platform remains a trusted source for car enthusiasts.`,
        <br key="line-break" />,
        <br key="line-break" />,
        `CarSpot features a simple sign-up process for those eager to share their discoveries. Once registered, users can post their car spots, complete with validated photos and location details, contributing to a vibrant and reliable community of car enthusiasts.`,
      ]}
      projectTechnoHeading={"Technologies"}
      projectTechno={
        "Next.js, TypeScript, JavaScript, Tailwind CSS, Kinde Auth, Convex, Cloudinary, GitHub, Figma"
      }
      projectFeaturesHeading={"Features"}
      projectFeatures={
        "World map with spots, Uploading spots Validation, Optimized image loading, Admin Dashboard"
      }
      projectLinkHeading={"Link"}
      projectLink={"Live site"}
      projectURL={"https://car-spot.vercel.app/"}
    />
  );
}
