import DisplayName from "@/components/displayName";
import Header from "@/components/header";
import ImageCaption, { Camera, Film, Lens } from "@/components/imageCaption";
import SocialLink from "@/components/socialLink";
import Timeline from "@/components/timeline";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconFileCv,
} from "@tabler/icons-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-orange-50/20">
      <div className="max-w-screen-xl px-2 md:px-8 mx-auto text-red-400 pt-12">
        <Header pageTitle="swe portfolio" canGoBack></Header>
        <Image
          unoptimized
          src={"/background_dev.jpg"}
          alt="background"
          width={1920}
          height={1080}
          className="max-w-full max-h-[60vh] object-cover rounded-3xl my-4 shadow"
        ></Image>
        <ImageCaption
          camera={Camera.OLYMPUS_OM2N}
          lens={Lens.ZUIKO_50MM_1_8}
          film={Film.CINESTILL_800T}
        ></ImageCaption>
        <div className="flex-col md:items-center flex md:flex-row justify-between">
          <DisplayName></DisplayName>
          <div className="grid grid-cols-2 place-items-stretch md:flex md:flex-col md:items-end gap-2 sm:gap-5 text-sm [&>*]:flex-row-reverse md:[&>*]:flex-row">
            <SocialLink href="https://github.com/ddannyll" label="Github">
              <IconBrandGithub></IconBrandGithub>
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/ddannyll/"
              label="LinkedIn"
            >
              <IconBrandLinkedin></IconBrandLinkedin>
            </SocialLink>
            <SocialLink href="mailto:danielnguyen17373@gmail.com" label="Gmail">
              <IconBrandGmail></IconBrandGmail>
            </SocialLink>
            <SocialLink href="" label="Resume">
              <IconFileCv></IconFileCv>
            </SocialLink>
          </div>
        </div>
        <Timeline
          className="right-0 py-20 overflow-y-hidden"
          nodes={[
            {
              title: "Software Engineer Intern @ Freelancer",
              side: "left",
              subtitle: "Dec 2023 - Mar 2024",
              description:
                "Supported product engineering teams in incorporating AI into their features by actively contributing to the development of the company's AI framework. Additonally, led development of a TUS protocol PHP client for use in uploads to Freelancer’s file storage microservice",
            },
            {
              title: "SafetyCulture A{i} Accelerator Program",
              side: "right",
              subtitle: "Aug 2023 - Sep 2023",
              description:
                "Participated in a 4-week hackathon-style AI workshop, learning and applying engineering skills through informative seminars and invaluable mentorship. Finished the program achieving the 'People's Choice' award.",
            },
            {
              title: "1st Place in CSESoc Flagship Hackathon",
              side: "left",
              subtitle: "July 2023",
              description:
                "Particpated in a 24 hour hackathon, conceptualising and developing a working solution with 4 other students. Finished the hackathon acheiving 1st place in the Code Stream out of 20+ submissions.",
            },
            {
              title: "UNSW Casual Academic",
              side: "right",
              subtitle: "May 2023 - Sep 2023",
              description:
                "Lab assisted in COMP2041 - Software Construction Tools and Techniques.",
            },
          ]}
        ></Timeline>
      </div>
    </div>
  );
}
