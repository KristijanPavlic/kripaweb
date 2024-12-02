import FullProject from "@/app/components/FullProject";

export default function Dulafra() {
  return (
    <FullProject
      nextProject={"/zrinski"}
      projectName={"Dulafra Foto Corner"}
      projectServices={"Design & Full-stack Web Development"}
      projectImages={[
        "https://rdbh1o39u7awif7j.public.blob.vercel-storage.com/images/dulafra-qj5W0upsFqiPnCmfPM8SsPPf0alw1U.png",
        "https://rdbh1o39u7awif7j.public.blob.vercel-storage.com/images/dulafra2-0Aj57A26Uu1EYsHw6srPEt3C4FDNtl.png",
        "https://rdbh1o39u7awif7j.public.blob.vercel-storage.com/images/dulafra3-lKpmCAlJYBMIIrRgKzNw2ZW25WM2QZ.png",
        "https://rdbh1o39u7awif7j.public.blob.vercel-storage.com/images/dulafra4-2nM9FVIkhOt9JQqdkArgQYFyhNeAG0.png",
        "https://rdbh1o39u7awif7j.public.blob.vercel-storage.com/images/dulafra5-4rY13M2scl95SNVbNzgY6oY908Kmq8.png",
        "https://rdbh1o39u7awif7j.public.blob.vercel-storage.com/images/dulafra6-ngcR0Ir38x486br9WhYD5dQlhQAIDZ.png",
      ]}
      projectInfoHeading={"Project Info"}
      projectInfo={[
        `Dulafra is a full-stack web application showcasing professional photography services specializing in sports events. The website is designed to be visually appealing and user-friendly, focusing on high-resolution digital photos and an intuitive user experience.`,
        <br key="line-break" />,
        <br key="line-break" />,
        `The platform allows users to search for and purchase images from various sports events. In addition to digital photos, Dulafra offers customizable products such as mugs, posters, and personalized FIFA cards. The site also details upcoming events and features a gallery showcasing their work.`,
        <br key="line-break" />,
        <br key="line-break" />,
        `Internationalization is supported through i18n localization, making the site accessible to a global audience. Cloudinary is used for efficient image management, enabling the storing, uploading, fetching, and deleting of images. Secure login to the admin dashboard is ensured through Clerk auth. The project is built with React and Next.js, leveraging server-side rendering for optimized performance, and styled with Tailwind CSS modules and inline styles for a consistent and responsive design. Version control is managed via GitHub, ensuring organized and collaborative development.`,
      ]}
      projectTechnoHeading={"Technologies"}
      projectTechno={
        "Adobe XD, Next.js, TypeScript, JavaScript, Tailwind CSS, Cloudinary, Clerk Auth, React, GitHub"
      }
      projectFeaturesHeading={"Features"}
      projectFeatures={
        "Internationalization, Image Search, Product Ordering, Optimized image loading, Admin Dashboard"
      }
      projectLinkHeading={"Link"}
      projectLink={"Live site"}
      projectURL={"https://dulafra.com"}
    />
  );
}
