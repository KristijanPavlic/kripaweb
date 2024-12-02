import FullProject from "@/app/components/FullProject";

export default function Zrinski() {
  return (
    <FullProject
      nextProject="/carspot"
      projectName={"Zrinski Photography"}
      projectServices={"Design & Full-stack Web Development"}
      projectImages={[
        "https://rdbh1o39u7awif7j.public.blob.vercel-storage.com/images/zrinski-SKeQOTdOBgTIZG3KOBm0fm85qcHDJs.png",
        "https://rdbh1o39u7awif7j.public.blob.vercel-storage.com/images/zrinski2-GZrellQclS0pzFZl6SvaoQASk8HDJc.png",
        "https://rdbh1o39u7awif7j.public.blob.vercel-storage.com/images/zrinski3-92TAUxtHAFacx35ScYcYnXcHP9i2Xm.png",
        "https://rdbh1o39u7awif7j.public.blob.vercel-storage.com/images/zrinski4-f8LllWJOIvTSMynFSVCjvNkcxtcFmV.png",
        "https://rdbh1o39u7awif7j.public.blob.vercel-storage.com/images/zrinski5-AGFPL0m9CyrPuant3pPiimXa6vUZ6V.png",
        "https://rdbh1o39u7awif7j.public.blob.vercel-storage.com/images/zrinski6-0POBpqFUOUPyu6Jqc0mnnvQ8M9Q96N.png",
      ]}
      projectInfoHeading={"Project Info"}
      projectInfo={[
        `Zrinski Photography delivers high-quality professional photography services, specializing in capturing the essence of events, portraits, and various projects. The project is built with React and leverages Next.js for optimized performance and server-side rendering. Styling is managed through Tailwind CSS modules and inline styles, ensuring a consistent and responsive design.`,
        <br key="line-break" />,
        <br key="line-break" />,
        `The Next.js Image component is utilized for efficient image loading and optimization. The project is version-controlled on GitHub, facilitating organized and collaborative development. Design and prototyping were executed in Adobe XD, providing a solid foundation for the project's visual and functional aspects.`,
        <br key="line-break" />,
        <br key="line-break" />,
        `i18n localization is implemented to support multiple languages, enhancing accessibility for a global audience. Cloudinary is used for robust image management, including storing, uploading, fetching, and deleting images. Clerk auth ensures secure login to the admin dashboard, providing a safe and efficient user experience.`,
      ]}
      projectTechnoHeading={"Technologies"}
      projectTechno={
        "Adobe XD, Next.js, TypeScript, JavaScript, Tailwind CSS, Cloudinary, Clerk Auth, React, GitHub"
      }
      projectFeaturesHeading={"Features"}
      projectFeatures={
        "Internationalization, Optimized image loading, Admin Dashboard"
      }
      projectLinkHeading={"Link"}
      projectLink={"Live site"}
      projectURL={"https://zrinski-photo.com"}
    />
  );
}
