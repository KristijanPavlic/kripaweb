import FullProject from "@/app/components/FullProject";

export default function Designo() {
  return (
    <FullProject
      nextProject={"/carspot"}
      projectName={"Foto & Video Designo"}
      projectServices={"Design & Full-stack Web Development"}
      projectImages={[
        "https://rdbh1o39u7awif7j.public.blob.vercel-storage.com/images/designo-o7Gs87oZi00gVgpsyF2d0NqVs8Z3Wt.jpg",
        "https://rdbh1o39u7awif7j.public.blob.vercel-storage.com/images/designo-o7Gs87oZi00gVgpsyF2d0NqVs8Z3Wt.jpg",
      ]}
      projectInfoHeading={"Project Info"}
      projectInfo={[
        `Foto & Video Designo is a personal portfolio website created to showcase the photography and videography work of Kristina, a talented visual artist. The platform serves as a digital gallery, allowing visitors to explore Kristina's diverse projects and creative endeavors.`,
        <br key="line-break" />,
        <br key="line-break" />,
        `The website features high-quality media galleries that display Kristina's work in an organized and visually appealing manner. This design ensures that each piece is presented in the best possible light, providing an immersive experience for viewers.`,
        <br key="line-break" />,
        <br key="line-break" />,
        `An Admin Dashboard is integrated into the platform, enabling Kristina to upload and manage her images efficiently. This functionality ensures that her portfolio remains current and accurately reflects her latest projects.`,
        <br key="line-break" />,
        <br key="line-break" />,
        `To build trust and credibility, the website includes a section for client testimonials and reviews. This feature allows potential clients and collaborators to read about others' experiences working with Kristina, offering insight into her professionalism and creative process.`,
      ]}
      projectTechnoHeading={"Technologies"}
      projectTechno={
        "Next.js, TypeScript, Tailwind CSS, Cloudinary, Clerk Auth, GitHub, Figma"
      }
      projectFeaturesHeading={"Features"}
      projectFeatures={
        "High-quality media galleries, Admin Dashboard for uploading images, Client testimonials and reviews"
      }
      projectLinkHeading={"Link"}
      projectLink={"Live site"}
      projectURL={"https://foto-designo.com/"}
    />
  );
}
