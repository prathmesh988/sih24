import { Group, Code, ScrollArea, rem } from "@mantine/core";
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconGift,
} from "@tabler/icons-react";
import { UserButton } from "./UserButton/UserButton";
import { Logo } from "./Logo";
import classes from "./NavbarNested.module.css";
import { LinksGroup } from "./NavLinksGroup/NavbarLinksGroup";

import Link from "next/link";
const mockdata = [
  { label: "Discussion", icon: IconGauge, link: "/Discussion" },
  {
    label: "Jobs & internships",
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: "Listings", link: "/Jobs" },
      { label: "company insights", link: "/insights" },
      { label: "Upload & Review CV", link: "/ReviewCv" },
    ],
  },
  {
    label: "Donation",
    icon: IconGift,
    initiallyOpened: true,
    links: [
      { label: "Donation", link: "/Donation" },
      { label: "Track Your Donation", link: "/DonationTrack" },
    ],
  },
  { label: "Mentorship", icon: IconPresentationAnalytics },
];

export default function NavbarNested() {
  return (
    <div className="w-[20%] h-[100vh] ">
      <nav
        className={classes.navbar}
        style={{
          height: "100% ",
        }}
      >
        <ScrollArea className={classes.links}>
          <div className={classes.linksInner}>
            {mockdata.map((item, index) =>
              item.link ? (
                <Link href={item.link} key={index}>
                  <LinksGroup
                    icon={item.icon}
                    label={item.label}
                    initiallyOpened={item.initiallyOpened}
                  />
                </Link>
              ) : (
                <LinksGroup {...item} />
              )
            )}
          </div>
        </ScrollArea>

        <div className={classes.footer}>
          <UserButton />
        </div>
      </nav>
    </div>
  );
}
